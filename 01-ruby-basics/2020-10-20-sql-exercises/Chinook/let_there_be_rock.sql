-- SQLite
-- Récupérer la liste des titres de l'album "Let There Be Rock"
SELECT COUNT tracks.Name
FROM tracks
INNER JOIN albums ON albums.AlbumId = tracks.AlbumId WHERE albums.Title = 'Let There Be Rock'