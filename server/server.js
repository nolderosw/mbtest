const express = require("express");
const path = require("path");

const app = express();
app.use(express.json());

const distPath = path.join(__dirname, "../front/dist");
app.use(express.static(distPath));

app.get("/registration", (req, res) => {
    res.sendFile(path.join(distPath, "index.html"));
  });

app.post("/registration", (req, res) => {
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

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
