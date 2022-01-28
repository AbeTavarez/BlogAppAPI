module.exports = {
  openapi: "3.0.0",
  info: {
    title: "Blog API",
    description:
      "Full CRUD Blog API, with Users registration and authentication.",
    version: "0.1.9",
  },
  paths: {
    "/api/v1/auth/register": {
      post: {
        summary: "User registration.",
        parameters: [{
          name: "newUser",
          in: "body",
          schema: {

          },
          required: true,
          description: "Registers a user."
        }]
      },
    },
    "/api/v1/auth/login": {
      post: {
        summary: "User login.",
      },
    },
    "/api/v1/blogs": {
      get: {
        summary: "Test Route",
      },
    },
    "/api/v1/blogs/:username": {
      get: {
        summary: "Get all specify user's blogs.",
      },
    },
    "/api/v1/blogs": {
      post: {
        summary: "Create a new blog.",
      },
    },
    "/api/v1/blogs/:id": {
      put: {
        summary: "Edit a specify blog.",
      },
    },
    "/api/v1/blogs/:id": {
      delete: {
        summary: "Delete a specify blog.",
      },
    }
},





};
