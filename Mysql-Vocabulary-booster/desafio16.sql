USE `hr`;
DROP FUNCTION IF EXISTS `buscar_quantidade_de_empregos_por_funcionario`;
DELIMITER $$
USE `hr`$$
CREATE FUNCTION `buscar_quantidade_de_empregos_por_funcionario`(email varchar(25)) RETURNS INT BEGIN
DECLARE quantidade INT;
SELECT 
    COUNT(*)
INTO quantidade FROM
    hr.job_history AS jh
        INNER JOIN
    hr.employees AS e ON (e.employee_id = jh.employee_id)
WHERE
    
e.email
  = email;
  RETURN quantidade;

END $$

DELIMITER ;
