const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// Configuración de la base de datos SQLite
const db = new sqlite3.Database(':memory:');
db.serialize(() => {
    db.run("CREATE TABLE datos (id INTEGER PRIMARY KEY, nombre TEXT)");
    db.run("INSERT INTO datos (nombre) VALUES ('Dato 1')");
    db.run("INSERT INTO datos (nombre) VALUES ('Dato 2')");
    db.run("INSERT INTO datos (nombre) VALUES ('Dato 3')");
});

// Ruta para obtener todos los datos
app.get('/api/datos', (req, res) => {
    db.all("SELECT * FROM datos", (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Servidor backend iniciado en http://localhost:${port}`);
});
