CREATE VIEW historico_reproducao_usuarios AS
SELECT
  u.nome AS usuario,
  c.nome AS nome
FROM
  SpotifyClone.historico_de_reproducoes AS h
  INNER JOIN SpotifyClone.usuarios AS u ON u.usuario_id = h.usuario_id
  INNER JOIN SpotifyClone.cancoes AS c ON c.cancao_id = h.cancao_id
ORDER BY
  usuario,
  nome;
