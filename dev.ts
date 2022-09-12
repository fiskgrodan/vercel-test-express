import app from "./api/";
import express from "express";

const PORT = 5000;

app.use(express.static("public"));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
