SELECT
  UPPER(CONCAT(e.first_name, " ", e.last_name)) AS 'Nome completo',
  h.START_DATE AS 'Data de início',
  e.SALARY AS 'Salário'
FROM
  hr.employees AS e
  INNER JOIN hr.job_history AS h ON h.EMPLOYEE_ID = e.EMPLOYEE_ID
  INNER JOIN hr.jobs AS j ON j.JOB_ID = h.JOB_ID
  INNER JOIN hr.departments AS d ON d.DEPARTMENT_ID = h.DEPARTMENT_ID
WHERE
  MONTH(h.START_DATE) < 4
ORDER BY
  CONCAT(e.first_name, " ", e.last_name),
  h.START_DATE;
