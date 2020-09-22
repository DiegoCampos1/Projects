SELECT
  p.ProductName AS 'Produto',
  p.Price AS 'Preço'
FROM
  w3schools.products AS p
  INNER JOIN w3schools.order_details AS o ON o.ProductID = p.ProductID
WHERE
  o.Quantity > 80
ORDER BY
  p.ProductName;
