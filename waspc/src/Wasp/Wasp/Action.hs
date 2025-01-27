module Wasp.Wasp.Action
  ( Action (..),
  )
where

import Data.Aeson (ToJSON (..), object, (.=))
import Wasp.Wasp.JsImport (JsImport)

-- TODO: Very similar to Wasp.Query, consider extracting duplication.

data Action = Action
  { _name :: !String,
    _jsFunction :: !JsImport,
    _entities :: !(Maybe [String]),
    _auth :: !(Maybe Bool)
  }
  deriving (Show, Eq)

instance ToJSON Action where
  toJSON action =
    object
      [ "name" .= _name action,
        "jsFunction" .= _jsFunction action,
        "entities" .= _entities action,
        "auth" .= _auth action
      ]
