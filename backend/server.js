const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT;

// Servir archivos desde carpeta frontend
app.use(express.static(path.join(__dirname, '../frontend')));

// Redirigir todo a index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
