## Vehicle Enquiry API v1.2.0

### Introduction
The DVLA Vehicle Enquiry Service API is a RESTful service that provides vehicle details of a specified vehicle. It uses the vehicle registration number as input to search and provide details of the vehicle. The response data is provided in JSON format.

### Technical Specification
https://developer-portal.driver-vehicle-licensing.api.gov.uk/apis/vehicle-enquiry-service/v1.2.0-vehicle-enquiry-service.html

### JSON Format
https://developer-portal.driver-vehicle-licensing.api.gov.uk/apis/vehicle-enquiry-service/v1.2.0-vehicle-enquiry-service.json


```
{
  "openapi": "3.0.0",
  "info": {
    "title": "Vehicle Enquiry API",
    "version": "1.2.0",
    "description": "Interface specification for the DVLA Vehicle Enquiry API",
    "contact": {
      "name": "DVLA API Team",
      "email": "DvlaAPIAccess@dvla.gov.uk"
    }
  },
  "tags": [
    {
      "name": "vehicle"
    }
  ],

  "paths": {
    "/v1/vehicles": {
      "post": {
        "tags": [
          "vehicle"
        ],
        "description": "Returns vehicle details based on registration number",
        "summary": "Get vehicle details by registration number",
        "operationId": "getVehicleDetailsByRegistrationNumber",
        "parameters": [
          {
            "name": "x-api-key",
            "in": "header",
            "description": "Client Specific API Key",
            "required": true,
            "schema": {
              "type": "string"
            }
          },
          {
            "name": "X-Correlation-Id",
            "in": "header",
            "description": "Consumer Correlation ID",
            "required": false,
            "schema": {
              "type": "string"
            }
          }
        ],
        "requestBody": {
          "description": "Registration number of the vehicle to find details for",
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/VehicleRequest"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/Vehicle"
                }
              }
            }
          },
          "400": {
            "description": "Bad Request",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "404": {
            "description": "Vehicle Not Found",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "500": {
            "description": "Internal Server Error",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          },
          "503": {
            "description": "Service Unavailable",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/ErrorResponse"
                }
              }
            }
          }
        }
      }
    }
  },
  "servers": [
    {
      "description": "Production environment",
      "url": "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry"
    },
    {
      "description": "Test environment",
      "url": "https://uat.driver-vehicle-licensing.api.gov.uk/vehicle-enquiry"
    }
  ],
  "components": {
    "schemas": {
      "ErrorResponse": {
        "type": "object",
        "description": "Error Response",
        "properties": {
          "errors": {
            "type": "array",
            "items": {
              "$ref": "#/components/schemas/Errors"
            }
          }
        }
      },
      "Errors": {
        "type": "object",
        "properties": {
          "status": {
            "type": "string",
            "example": "400"
          },
          "code": {
            "type": "string",
            "example": "105",
            "description": "DVLA reference code"
          },
          "title": {
            "type": "string",
            "example": "Invalid vrn number",
            "description": "Error title"
          },
          "detail": {
            "type": "string",
            "description": "A meaningful description of the error which has occurred",
            "example": "Invalid format for field - vehicle registration number"
          }
        },
        "required": [
          "title"
        ]
      },
      "VehicleRequest": {
        "type": "object",
        "properties": {
          "registrationNumber": {
            "type": "string"
          }
        }
      },
      "Vehicle": {
        "type": "object",
        "required": [
          "registrationNumber"
        ],
        "properties": {
          "registrationNumber": {
            "type": "string",
            "example": "WN67DSO",
            "description": "Registration number of the vehicle"
          },
          "taxStatus": {
            "type": "string",
            "example": "Untaxed",
            "description": "Tax status of the vehicle",
            "enum": [
              "Not Taxed for on Road Use",
              "SORN",
              "Taxed",
              "Untaxed"
            ]
          },
          "taxDueDate": {
            "type": "string",
            "format": "date",
            "example": "2017-12-25",
            "description": "Date of tax liability, used in calculating licence information presented to user"
          },
          "artEndDate": {
            "type": "string",
            "format": "date",
            "example": "2007-12-25",
            "description": "Additional Rate of Tax End Date, format: YYYY-MM-DD"
          },
          "motStatus": {
            "type": "string",
            "example": "No details held by DVLA",
            "description": "MOT Status of the vehicle",
            "enum": [
              "No details held by DVLA",
              "No results returned",
              "Not valid",
              "Valid"
            ]
          },
          "motExpiryDate": {
            "type": "string",
            "format": "date",
            "example": "2008-12-25",
            "description": "Mot Expiry Date"
          },
          "make": {
            "type": "string",
            "example": "ROVER",
            "description": "Vehicle make"
          },
          "monthOfFirstDvlaRegistration": {
            "type": "string",
            "format": "date",
            "example": "2011-11",
            "description": "Month of First DVLA Registration"
          },
          "monthOfFirstRegistration": {
            "type": "string",
            "format": "date",
            "example": "2012-12",
            "description": "Month of First Registration"
          },
          "yearOfManufacture": {
            "type": "integer",
            "format": "int32",
            "example": 2004,
            "description": "Year of Manufacture"
          },
          "engineCapacity": {
            "type": "integer",
            "format": "int32",
            "example": 1796,
            "description": "Engine capacity in cubic centimetres"
          },
          "co2Emissions": {
            "type": "integer",
            "format": "int32",
            "example": 0,
            "description": "Carbon Dioxide emissions in grams per kilometre"
          },
          "fuelType": {
            "type": "string",
            "example": "PETROL",
            "description": "Fuel type (Method of Propulsion)"
          },
          "markedForExport": {
            "type": "boolean",
            "example": true,
            "description": "True only if vehicle has been export marked"
          },
          "colour": {
            "type": "string",
            "example": "Blue",
            "description": "Vehicle colour"
          },
          "typeApproval": {
            "type": "string",
            "example": "N1",
            "description": "Vehicle Type Approval Category"
          },
          "wheelplan": {
            "type": "string",
            "example": "NON STANDARD",
            "description": "Vehicle wheel plan"
          },
          "revenueWeight": {
            "type": "integer",
            "format": "int32",
            "example": 1640,
            "description": "Revenue weight in kilograms"
          },
          "realDrivingEmissions": {
            "type": "string",
            "example": "1",
            "description": "Real Driving Emissions value"
          },
          "dateOfLastV5CIssued": {
            "type": "string",
            "format": "date",
            "example": "2016-12-25",
            "description": "Date of last V5C issued"
          },
          "euroStatus": {
            "type": "string",
            "example": "Euro 5",
            "description": "Euro Status (Dealer / Customer Provided (new vehicles))"
          },
          "automatedVehicle": {
            "type": "boolean",
            "example": true,
            "description": "Automated Vehicle (AV)"
          }
        }
      }
    }
  }
}
```