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
      name: "Movies", // name of a tag
    },
  ],

  paths: {
    //! method of operation for Auth
    "/movies/createMovie": {
      post: {
        tags: ["Movies"], // operation's tag
        description: "create Movie", // short desc
        operationId: "create movie", // unique operation id
        // parameters: [], // expected params
        requestBody: {
          // expected request body
          content: {
            // content-type
            "application/json": {
              schema: {
                $ref: "#/components/schemas/createMovieReq", // todo input data model
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
                  $ref: "#/components/schemas/movieCreated",
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
                  $ref: "#/components/schemas/noAuth",
                },
              },
            },
          },
          409: {
            content: {
              // content-type
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/movieAlreadyCreated",
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
      //! Movie schema
      createMovieReq: {
        type: "object", // data type
        properties: {
          name: {
            type: "string", // data type
            description: "movie name", // desc
            example: "interstellar", // example of a email
          },
          time: {
            type: "array", // data type
            description: "movie time", // desc
            example: ["10:00Am", "1:00Am"], // example of a completed value
          },
          rating: {
            type: "string", // data type
            description: "movie rating", // desc
            example: "9.9", // example of a completed value
          },
          description: {
            type: "string", // data type
            description: "movie description", // desc
            example: "Test", // example of a completed value
          },
          genre: {
            type: "array", // data type
            description: "movie genre", // desc
            example: ["Action", "Space"], // example of a completed value
          },
          releaseDate: {
            type: "string", // data type
            description: "movie release Date", // desc
            example: "2014", // example of a completed value
          },
        },
      },
      noAuth: {
        type: "object", // data type
        properties: {
          message: {
            type: "string", // data type
            description: "not Auth", // desc
            example: "not Auth", // example of a email
          },
        },
      },
      movieCreated: {
        type: "object", // data type
        properties: {
          success: {
            type: "boolean", // data type
            description: "flag", // desc
            example: true, // example of a email
          },
          id: {
            type: "string", // data type
            description: "movie id", // desc
            example: "6505cb41aa29e15807622153", // example of an id
          },
          message: {
            type: "string", // data type
            description: "not Auth", // desc
            example: "Movie created!", // example of a email
          },
        },
      },
      movieAlreadyCreated: {
        type: "object", // data type
        properties: {
          movie: {
            type: "object",
            properties: {
              _id: {
                type: "string", // data type
                description: "movie id", // desc
                example: "6505cb41aa29e15807622153", // example of an id
              },
              name: {
                type: "string", // data type
                description: "movie name", // desc
                example: "interstellar", // example of a email
              },
              time: {
                type: "array", // data type
                description: "movie time", // desc
                example: ["10:00Am", "1:00Am"], // example of a completed value
              },
              rating: {
                type: "string", // data type
                description: "movie rating", // desc
                example: "9.9", // example of a completed value
              },
              description: {
                type: "string", // data type
                description: "movie description", // desc
                example: "Test", // example of a completed value
              },
              genre: {
                type: "array", // data type
                description: "movie genre", // desc
                example: ["Action", "Space"], // example of a completed value
              },
              releaseDate: {
                type: "string", // data type
                description: "movie release Date", // desc
                example: "2014", // example of a completed value
              },
            },
          },
          message: {
            type: "string", // data type
            description: "not Auth", // desc
            example: "Movie Already exist", // example of a email
          },
        },
      },
    },
  },
};
