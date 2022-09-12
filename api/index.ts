import express from "express";

const app = express();

app.get("/api", (request, response) => {
  response.send("Hello World!");
});

export default app;
