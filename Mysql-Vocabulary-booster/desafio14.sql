(
  SELECT
    DISTINCT country AS "País"
  FROM
    w3schools.suppliers
)
UNION
ALL (
  SELECT
    DISTINCT country AS "País"
  FROM
    w3schools.customers
)
ORDER BY
  `País`
LIMIT
  5;
