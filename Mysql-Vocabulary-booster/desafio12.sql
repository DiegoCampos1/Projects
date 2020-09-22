SELECT
  CONCAT(fe.first_name, ' ', fe.last_name) AS 'Nome completo funcionário 1',
  fe.salary AS 'Salário funcionário 1',
  fe.phone_number AS 'Telefone funcionário 1',
  CONCAT(se.first_name, ' ', se.last_name) AS 'Nome completo funcionário 2',
  se.salary AS 'Salário funcionário 2',
  se.phone_number AS 'Telefone funcionário 2'
FROM
  hr.employees AS fe,
  hr.employees AS se
WHERE
  fe.job_id = se.job_id
  AND CONCAT(fe.first_name, ' ', fe.last_name) <> CONCAT(se.first_name, ' ', se.last_name)
ORDER BY
  `Nome completo funcionário 1`,
  `Nome completo funcionário 2`
