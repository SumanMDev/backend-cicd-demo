import app from "./app.js";

const PORT = 7000;


console.log('hello')

app.listen(PORT, () => {
  console.log(`Your Server is running on http:localhost:${PORT}`);
});
