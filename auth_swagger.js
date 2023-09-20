module.exports = {
  servers: [
    {
      url: "http://localhost:3000/api", // url
      description: "Local server", // name
    },
  ],

  openapi: "3.0.3", // present supported openapi version
  info: {
    title: "Movie Project", // short title.
    description: "Movie Project Api Documentation", //  desc.
    version: "1.0.0", // version number
    // contact: {
    //   name: "John doe", // your name
    //   email: "john@web.com", // your email
    //   url: "web.com", // your website
    // },
  },
  tags: [
    {
      name: "Auth", // name of a tag
    },
  ],

  paths: {
    //! method of operation for Auth
    "/auth/login": {
      post: {
        tags: ["Auth"], // operation's tag
        description: "Login to App", // short desc
        operationId: "login", // unique operation id
        // parameters: [], // expected params
        requestBody: {
          // expected request body
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/LoginReq", // todo input data model
              },
            },
          },
        },
        // expected responses
        responses: {
          // response code
          201: {
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoginSuccessResponse", 
                },
              },
            },
          },
          // response code
          401: {
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoginFailedResponse", 
                },
              },
            },
          },
          400: {
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoginError", 
                },
              },
            },
          },
        },
      },
    },
    "/auth/register": {
      post: {
        tags: ["Auth"], // operation's tag
        description: "sign up to App", // short desc
        operationId: "sign up", // unique operation id
        // parameters: [], // expected params
        requestBody: {
          // expected request body
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SignUpReq", 
              },
            },
          },
        },
        // expected responses
        responses: {
          // response code
          200: {
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/LoginSuccessResponse", 
                },
              },
            },
          },
          400: {
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SignUpError2", 
                },
              },
            },
          },
          409: {
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/SignUpError", 
                },
              },
            },
          },
        },
      },
    },
    "/auth/deleteUser/{id}": {
      delete: {
        tags: ["Auth"], // operation's tag
        description: "Deleting a user", // short desc
        operationId: "Deleting user", // unique operation id
        parameters: [
          // expected parameters
          {
            name: "id", // name of param
            in: "path", // location of param
            schema: {
              $ref: "#/components/schemas/id", // id model
            },
            required: true, // mandatory
            description: "user id", // param desc
          },
        ],
        // expected responses
        responses: {
          // response code
          200: {
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/deleteUserSuccess", 
                },
              },
            },
          },
          // response code
          400: {
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/deleteUserError", 
                },
              },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      //! Auth schema
      LoginReq: {
        type: "object", // data type
        properties: {
          email: {
            type: "string", // data type
            description: "user email", // desc
            example: "test@test.com", // example of a email
          },
          password: {
            type: "string", // data type
            description: "user password", // desc
            example: "Anas#1234567890", // example of a completed value
          },
        },
      },
      LoginSuccessResponse: {
        type: "object", // data type
        properties: {
          message: {
            type: "string", // data type
            description: "message", // desc
            example: "login success", // example of a message
          },
          token: {
            type: "string", // data type
            description: "user token", // desc
            example:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjM2MDAsImRhdGEiOnsiX2lkIjoiNjUwNWNiNDFhYTI5ZTE1ODA3NjIyMTUzIiwidXNlck5hbWUiOiJhbmFzIiwiZW1haWwiOiJhLnFhc2VtQHRlc3QyMTMyLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGJZTllXS291LnZ0MEtZUmo5RG5ULy5hcnhJaXhITnNBUERhRGFhbjNSQ1EuLmJYN2s4ZFV1IiwiaXNBZG1pbiI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMy0wOS0xNlQxNTozNToyOS42MzBaIiwidXBkYXRlZEF0IjoiMjAyMy0wOS0xNlQxNTozNToyOS42MzBaIiwiX192IjowfSwiaWF0IjoxNjk1MTYyOTE2fQ.5AM3xxecEHtE2euK43tza8G1casXM5RLcEwFz7hZC0s", // example of a completed value
          },
          id: {
            type: "string", // data type
            description: "user id", // desc
            example: "6505cb41aa29e15807622153", // example of an id
          },
        },
      },
      LoginFailedResponse: {
        type: "object", // data type
        properties: {
          message: {
            type: "string", // data type
            description: "message", // desc
            example: "Your Password is incorrect or this account doesn't exist", // example of a message
          },
        },
      },
      LoginError: {
        type: "object", // data type
        properties: {
          error: {
            type: "string", // data type
            description: "message", // desc
            example: "Please fill all fields", // example of a message
          },
        },
      },
      SignUpReq: {
        type: "object", // data type
        properties: {
          email: {
            type: "string", // data type
            description: "user email", // desc
            example: "test@test.com", // example of a email
          },
          password: {
            type: "string", // data type
            description: "user password", // desc
            example: "Anas#1234567890", // example of a password
          },
          userName: {
            type: "string", // data type
            description: "user email", // desc
            example: "Anas", // example of a user name
          },
          isAdmin: {
            type: "boolean", // data type
            description: "is Admin", // desc
            example: true, // example of a user name
          },
        },
      },
      SignUpError2: {
        type: "object", // data type
        properties: {
          errors: {
            type: "string", // data type
            description: "message", // desc
            example: "Please fill all fields", // example of a message
          },
        },
      },
      SignUpError: {
        type: "object", // data type
        properties: {
          error: {
            type: "string", // data type
            description: "message", // desc
            example: "User is already exists", // example of a message
          },
        },
      },
      id: {
        type: "string", // data type
        description: "user id", // desc
        example: "6505cb41aa29e15807622153", // example of an id
      },
      deleteUserError: {
        type: "object", // data type
        properties: {
          message: {
            type: "string", // data type
            description: "message", // desc
            example: "user not found", // example of a message
          },
        },
      },
      deleteUserSuccess: {
        type: "object", // data type
        properties: {
          message: {
            type: "string", // data type
            description: "message", // desc
            example: "user deleted", // example of a message
          },
        },
      },
    },
  },
};
