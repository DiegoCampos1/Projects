SELECT
  job_title AS Cargo,
  (max_salary - min_salary) AS 'Diferença entre salários máximo e mínimo'
FROM
  hr.jobs
order by
  (max_salary - min_salary),
  Cargo;
