const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;
const PUBLIC = path.join(__dirname, "public");

// Home -> Arabic landing page
app.get("/", (req, res) => res.sendFile(path.join(PUBLIC, "traffic-landing.html")));
// English home shortcut
app.get("/en", (req, res) => res.sendFile(path.join(PUBLIC, "traffic-landing-en.html")));

// Static files (html, images, ...)
app.use(express.static(PUBLIC, { extensions: ["html"] }));

// 404 -> back to home
app.use((req, res) => res.redirect("/"));

app.listen(PORT, "0.0.0.0", () => console.log(`Server running on port ${PORT}`));
