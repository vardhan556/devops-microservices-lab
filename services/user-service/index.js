const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ service: "user-service", status: "running" });
});

app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Vardhan" },
        { id: 2, name: "User2" }
    ]);
});

app.listen(3002, () => {
    console.log("User Service running on port 3002");
});