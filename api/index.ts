import express from "express";
import { format } from "date-fns";

const app = express();

app.get("/api", (request, response) => {
  const now = format(new Date(), "yyyy-MM-dd HH:mm:ss");
  response.send(`Hello World! ${now}`);
});

export default app;
