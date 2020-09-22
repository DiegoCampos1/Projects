CREATE VIEW cancoes_premium AS
SELECT
  c.nome AS nome,
  count(*) AS reproducoes
FROM
  SpotifyClone.historico_de_reproducoes AS hr
  INNER JOIN SpotifyClone.cancoes AS c ON hr.cancao_id = c.cancao_id
  INNER JOIN SpotifyClone.usuarios AS u ON hr.usuario_id = u.usuario_id
WHERE
  u.plano_id > 1
GROUP BY
  (hr.cancao_id)
ORDER BY
  nome;
