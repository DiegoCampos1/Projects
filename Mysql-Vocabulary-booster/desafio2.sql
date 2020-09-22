SELECT
  job_title as Cargo,
  CASE
    WHEN max_salary <= 10000 THEN 'Baixo'
    WHEN max_salary <= 20000 THEN 'Médio'
    WHEN max_salary <= 30000 THEN 'Alto'
    ELSE 'Altíssimo'
  END AS Nível
FROM
  hr.jobs
ORDER BY
  Cargo;
