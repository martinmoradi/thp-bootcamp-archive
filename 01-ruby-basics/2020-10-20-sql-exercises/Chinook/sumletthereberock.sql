SELECT SUM(tracks.UnitPrice), SUM(tracks.Milliseconds)
FROM tracks
INNER JOIN albums ON albums.AlbumId = tracks.AlbumId WHERE albums.Title = 'Let There Be Rock'