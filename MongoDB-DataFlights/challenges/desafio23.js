db.voos
  .findOne(
    {
      $and: [
        { litrosCombustivel: { $exists: true } },
        { litrosCombustivel: { $lt: 1000 } },
      ],
    },
    { vooId: 1, _id: 0, litrosCombustivel: true }
  );
