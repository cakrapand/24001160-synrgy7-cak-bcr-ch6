import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Application } from "express";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Binar Car Rental API Docs",
      version: "1.0.0",
      description: "Docs for binar car rental app",
    },
  },
  apis: ["./src/routes/*.ts"], // Path to the API docs
};

export const swaggerSpec = swaggerJsdoc(options);

// const swaggerDocs = (app: Application) => {
//   app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
// };

// export default swaggerDocs;
