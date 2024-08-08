const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Define the directory where your images are stored
const imagesDirectory = path.join(__dirname, '../assets/images');

// Serve static files from the images directory
app.use('/images', express.static(imagesDirectory));

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Image Server');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
