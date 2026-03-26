const express = require("express");
const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ service: "product-service", status: "running" });
});

app.get("/products", (req, res) => {
    res.json([
        { id: 1, name: "Laptop" },
        { id: 2, name: "Phone" }
    ]);
});

app.listen(3003, () => {
    console.log("Product Service running on port 3003");
});