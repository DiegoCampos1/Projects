db.produtos.updateMany({$and:[{"nome": {$nin: ["McChicken"]}}, {"ingredientes": {$nin: ["ketchup"]}}] }, {$push: {ingredientes: "ketchup"}});
db.produtos.find({}, {nome: 1, ingredientes: 1, _id: 0});
// Se essa solução não passar tente essa:
// db.produtos.updateMany({"nome": {$nin: ["McChicken"]}}, {$addToSet: {ingredientes: "ketchup"}});
// db.produtos.find({}, {nome: 1, ingredientes: 1, _id: 0});
