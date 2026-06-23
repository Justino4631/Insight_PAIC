const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;


app.get("/api/message", (req, res) => {
    res.json({message: "Hello from the Node.js backend!"});
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});