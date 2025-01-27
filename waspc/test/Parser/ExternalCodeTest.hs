module Parser.ExternalCodeTest where

import Data.Either (isLeft)
import qualified StrongPath as SP
import Test.Tasty.Hspec
import Wasp.Parser.Common (runWaspParser)
import Wasp.Parser.ExternalCode (extCodeFilePathString)

spec_ParserExternalCode :: Spec
spec_ParserExternalCode = do
  describe "Parsing external code file path string" $ do
    it "Correctly parses external code path in double quotes" $ do
      runWaspParser extCodeFilePathString "\"@ext/foo/bar.txt\""
        `shouldBe` Right [SP.relfileP|foo/bar.txt|]

    it "When path does not start with @ext/, returns Left" $ do
      isLeft (runWaspParser extCodeFilePathString "\"@ext2/foo/bar.txt\"") `shouldBe` True
