require('dotenv').config();
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Database Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Change to your DB username
  password: '', // Change to your DB password
  database: 'bus_schedule' // Change to your DB name
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err);
  } else {
    console.log('Connected to MySQL Database');
  }
});

// **API Routes**
app.get('/routes', (req, res) => {
  const { start, destination } = req.query;
  const query = `
    SELECT * FROM bus_routes
    WHERE start_point = ? AND destination = ?
  `;
  db.query(query, [start, destination], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.get('/bus-stops', (req, res) => {
  db.query('SELECT DISTINCT bus_stop FROM bus_schedule', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.get('/bus-timings', (req, res) => {
  const { busStop, day, timePeriod } = req.query;
  const query = `
    SELECT * FROM bus_schedule
    WHERE bus_stop = ? AND day = ? AND time_period = ?
  `;
  db.query(query, [busStop, day, timePeriod], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
