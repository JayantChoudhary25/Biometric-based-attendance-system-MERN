require("dotenv").config({ path: "./config.env" });
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorHandler");

// Connect Database
connectDB();

const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/private", require("./routes/private"));

// Error Handler 
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
// DB error handler
process.on("unhandledRejection", (err, promise) => {
  console.log(`Log Error: ${err}`);
  server.close(() => process.exit(1));
});
