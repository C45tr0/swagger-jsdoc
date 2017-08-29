// Mock for Components Object. `components` is correct, not `component`.
var testDataComponents = [
  {
    "component": {
      "DefinitionSingular": {
        "required": ["username", "password"],
        "properties": {
          "username": {
            "type": "string"
          },
          "password": {
            "type": "string"
          }
        }
      }
    }
  },
  {
    "components": {
      "DefinitionPlural": {
        "required": ["username", "password"],
        "properties": {
          "username": {
            "type": "string"
          },
          "password": {
            "type": "string"
          }
        }
      }
    }
  }
];

// Mock for Parameters Definitions Object. `parameters` is correct, not `parameter`.
var testDataParameters = [
  {
    "parameter": {
      "ParameterSingular": {
        "name": "username",
        "description": "Username to use for login.",
        "in": "formData",
        "required": true,
        "type": "string"
      }
    }
  },
  {
    "parameters": {
      "ParameterPlural": {
        "name": "limit",
        "in": "query",
        "description": "max records to return",
        "required": true,
        "type": "integer",
        "format": "int32"
      }
    }
  }
];

// Mock for Security Definitions Object. `securityDefinitions` is correct, not `securityDefinition`.
var testDataSecurityDefinitions = [
  {
    "securityDefinition": {
      "basicAuth": {
        "type": "basic",
        "description": "HTTP Basic Authentication. Works over `HTTP` and `HTTPS`"
      }
    }
  },
  {
    "securityDefinitions": {
      "api_key": {
        "type": "apiKey",
        "name": "api_key",
        "in": "header"
      },
      "petstore_auth": {
        "type": "oauth2",
        "authorizationUrl": "http://swagger.io/api/oauth/dialog",
        "flow": "implicit",
        "scopes": {
          "write:pets": "modify pets in your account",
          "read:pets": "read your pets"
        }
      },
    }
  }
];

// Mock for Responses Definitions Object. `responses` is correct, not `response`.
var testDataResponses = [
  {
    "response": {
      "NotFound": {
        "description": "Entity not found."
      }
    }
  },
  {
    "responses": {
      "IllegalInput": {
        "description": "Illegal input for operation."
      }
    }
  }
];

module.exports = {
  components: testDataComponents,
  parameters: testDataParameters,
  securityDefinitions: testDataSecurityDefinitions,
  responses: testDataResponses,
};
