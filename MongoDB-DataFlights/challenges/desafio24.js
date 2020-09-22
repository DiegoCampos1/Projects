db.voos.findOne(
  {
    $and: [
      { litrosCombustivel: { $exists: true } },
      { litrosCombustivel: { $lt: 600 } },
      { empresa: { $nin: ["GOL", "AZUL"] } },
    ],
  },
  { vooId: 1, _id: 0, litrosCombustivel: true, "empresa.nome": true }
);
