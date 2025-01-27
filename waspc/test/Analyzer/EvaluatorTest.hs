{-# LANGUAGE DeriveDataTypeable #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE TemplateHaskell #-}
{-# LANGUAGE TypeApplications #-}

module Analyzer.EvaluatorTest where

import Data.Data (Data)
import Test.Tasty.Hspec
import Wasp.Analyzer.Evaluator
import Wasp.Analyzer.Parser (parse)
import Wasp.Analyzer.TypeChecker (typeCheck)
import qualified Wasp.Analyzer.TypeDefinitions as TD
import Wasp.Analyzer.TypeDefinitions.TH
import Wasp.AppSpec.Core.Decl (IsDecl)
import Wasp.AppSpec.Core.Ref (Ref (..))
import Wasp.AppSpec.ExtImport (ExtImport (..), ExtImportName (..))
import Wasp.AppSpec.JSON (JSON (..))

fromRight :: Show a => Either a b -> b
fromRight (Right x) = x
fromRight (Left e) = error $ show e

newtype Simple = Simple String deriving (Eq, Show, Data)

instance IsDecl Simple

makeDeclType ''Simple

data Fields = Fields {a :: String, b :: Maybe Double} deriving (Eq, Show, Data)

instance IsDecl Fields

makeDeclType ''Fields

data Person = Person {name :: String, age :: Integer} deriving (Eq, Show, Data)

instance IsDecl Person

makeDeclType ''Person

data BusinessType = Manufacturer | Seller | Store deriving (Eq, Show, Data)

makeEnumType ''BusinessType

data Special = Special {imps :: [ExtImport], json :: JSON} deriving (Eq, Show)

instance IsDecl Special

makeDeclType ''Special

data Business = Business
  { employees :: [Ref Person],
    worth :: Double,
    businessType :: BusinessType,
    location :: Maybe String
  }
  deriving (Eq, Show, Data)

instance IsDecl Business

makeDeclType ''Business

eval :: TD.TypeDefinitions -> [String] -> Either EvaluationError [Decl]
eval typeDefs source = evaluate typeDefs $ fromRight $ typeCheck typeDefs $ fromRight $ parse $ unlines source

spec_Evaluator :: Spec
spec_Evaluator = do
  describe "Analyzer.Evaluator" $
    describe "evaluate" $ do
      it "Evaluates a simple declaration" $ do
        let typeDefs = TD.addDeclType @Simple $ TD.empty
        let decls = eval typeDefs ["simple Test \"hello wasp\""]
        fmap takeDecls decls
          `shouldBe` Right [("Test", Simple "hello wasp")]
      it "Evaluates a declaration with a dictionary" $ do
        let typeDefs = TD.addDeclType @Fields $ TD.empty
        let decls = eval typeDefs ["fields Test { a: \"hello wasp\", b: 3.14 }"]
        fmap takeDecls decls
          `shouldBe` Right [("Test", Fields {a = "hello wasp", b = Just 3.14})]
      it "Evaluates a declaration with missing optional fields" $ do
        let typeDefs = TD.addDeclType @Fields $ TD.empty
        let decls = eval typeDefs ["fields Test { a: \"hello wasp\" }"]
        fmap takeDecls decls
          `shouldBe` Right [("Test", Fields {a = "hello wasp", b = Nothing})]
      it "Evaluates a complicated example" $ do
        let typeDefs =
              TD.addDeclType @Business $
                TD.addEnumType @BusinessType $
                  TD.addDeclType @Person $ TD.empty
        let source =
              [ "person Tim { name: \"Tim Stocker\", age: 40 }",
                "person John { name: \"John Cashier\", age: 23 }",
                "business Grocer { employees: [Tim, John], businessType: Store, worth: 115 }"
              ]
        fmap takeDecls (eval typeDefs source)
          `shouldBe` Right
            [ ( "Grocer",
                Business
                  { employees = [Ref "Tim", Ref "John"],
                    businessType = Store,
                    worth = 115.0,
                    location = Nothing
                  }
              )
            ]
      it "Evaluates ExtImports and JSON" $ do
        let typeDefs = TD.addDeclType @Special $ TD.empty
        let source =
              [ "special Test {",
                "  imps: [import { field } from \"main.js\", import main from \"main.js\"],",
                "  json: {=json \"key\": 1 json=}",
                "}"
              ]
        fmap takeDecls (eval typeDefs source)
          `shouldBe` Right
            [ ( "Test",
                Special
                  [ExtImport (ExtImportField "field") "main.js", ExtImport (ExtImportModule "main") "main.js"]
                  (JSON " \"key\": 1 ")
              )
            ]
