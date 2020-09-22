DELIMITER $$
DROP PROCEDURE IF exists buscar_media_por_cargo;
CREATE PROCEDURE buscar_media_por_cargo (IN cargo VARCHAR(200))
BEGIN
SELECT
  ROUND(AVG(e.salary), 2) AS 'Média salarial'
FROM
  hr.employees AS e
  INNER JOIN hr.jobs AS j ON (e.job_id = j.job_id)
WHERE
  j.job_title = cargo;
END $$
DELIMITER ;

call buscar_media_por_cargo('Programmer');
