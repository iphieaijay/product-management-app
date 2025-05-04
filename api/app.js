const express = require("express");
const productRoutes = require("./routes/productRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
require("dotenv").config();

const app = express();
app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Product API",
      version: "1.0.0",
      description: "CRUD API for Product Management",
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/products", productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
// This code sets up an Express.js server with a product management API and Swagger documentation.
// It uses environment variables for configuration and serves the API documentation at /api-docs.
// The server listens on a specified port, defaulting to 3000 if not provided in the environment variables.
// The API allows for CRUD operations on products, with routes defined in the productRoutes module.
// The Swagger documentation is generated using the swagger-jsdoc library, which reads the API definitions from the route files.
// The server is set to listen on the specified port, and a message is logged to the console when it starts successfully.
