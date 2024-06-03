const express = require('express');
const axios = require('axios');
const path = require('path');
const app = express();
const port = 3000;
require('dotenv').config();

const apiUrl = `${process.env.API_URL}/names`;

app.use(express.static('public'));

app.get('/data', async (req, res) => {
    try {
        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching data');
    }
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
