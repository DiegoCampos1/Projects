SELECT
  concat(e.first_name, ' ', e.last_name) AS 'Nome completo',
  j.job_title AS Cargo,
  h.start_date AS 'Data de início do cargo',
  d.department_name AS 'Departamento'
FROM
  hr.employees AS e
  INNER JOIN hr.job_history as h ON h.EMPLOYEE_ID = e.EMPLOYEE_ID
  INNER JOIN hr.departments as d ON d.DEPARTMENT_ID = h.DEPARTMENT_ID
  INNER JOIN hr.jobs AS j ON j.JOB_ID = h.JOB_ID
order by
  concat(e.first_name, ' ', e.last_name) desc,
  Cargo;
