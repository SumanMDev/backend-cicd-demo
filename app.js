import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Backend is running</h1>");
});

app.get("/health", (req, res) => {
  res.send("<h1>Your app is running</h1>");
});

export default app;