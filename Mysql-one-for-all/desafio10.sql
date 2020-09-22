USE SpotifyClone;
DELIMITER $$
USE `SpotifyClone`$$
CREATE FUNCTION quantidade_musicas_no_historico(num int) RETURNS INT READS SQL DATA
BEGIN
DECLARE quantidade INT;
SELECT 
    COUNT(*) 
INTO quantidade FROM
    SpotifyClone.historico_de_reproducoes
    
WHERE

usuario_id
  = num;
  RETURN quantidade;

END $$

DELIMITER ;
