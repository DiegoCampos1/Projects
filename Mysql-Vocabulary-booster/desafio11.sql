SELECT
  ContactName AS Nome,
  Country AS País,
  (
    SELECT
      Count(Country) -1
    FROM
      w3schools.customers
    WHERE
      country = `País`
    GROUP BY
      Country
  ) AS 'Número de compatriotas'
FROM
  w3schools.customers
HAVING
  `Número de compatriotas` > 0
ORDER BY
  ContactName;
