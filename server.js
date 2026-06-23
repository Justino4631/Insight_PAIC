const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.listen(express.static("public"));

app.get("/api/message", (req, res) => {
    res.json({message: "Hello from the Node.js backend!"});
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});