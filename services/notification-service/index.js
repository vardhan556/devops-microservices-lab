const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ service: "notification-service", status: "running" });
});

app.post("/notify", (req, res) => {
    console.log("Notification:", req.body);
    res.json({ message: "Notification sent" });
});

app.listen(3004, () => {
    console.log("Notification Service running on port 3004");
});