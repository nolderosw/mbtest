const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

const distPath = path.join(__dirname, "../front/dist");
app.use(express.static(distPath));

app.post("*", (req, res) => {
  try {
    const formData = req.body;
    if (formData) {
      res
        .status(200)
        .json({ message: "Formulário recebido com sucesso!", data: formData });
    } else {
      res.status(400).json({ message: "Request inválida" });
    }
  } catch (err) {
    res.status(500).json({ message: "erro interno no servidor" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
