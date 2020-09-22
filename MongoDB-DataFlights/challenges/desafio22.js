db.voos
.findOne(
  {
    $and: [
      { "empresa.nome": { $in: ["DELTA AIRLINES", "AMERICAN AIRLINES"] } },
      { "aeroportoDestino.sigla": "KJFK" },
      { "aeroportoOrigem.sigla": "SBGR" },
    ],
  },
  { vooId: 1, _id: 0 }
);
