db.voos.deleteMany({
  $and: [
    { litrosCombustivel: { $lt: 400 } },
    { litrosCombustivel: { $exists: true } },
    { "empresa.nome": "AZUL" },
  ],
});
