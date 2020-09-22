SELECT
  job_title as Cargo,
  (max_salary - min_salary) AS 'Variação Salarial',
  round(min_salary / 12, 2) AS 'Média mínima mensal',
  round(max_salary / 12, 2) AS 'Média máxima mensal'
FROM
  hr.jobs
ORDER BY
  (max_salary - min_salary),
  Cargo;
