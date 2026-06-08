-- SQLite
SELECT albums.Title
FROM albums
INNER JOIN artists ON artists.ArtistId = albums.ArtistId WHERE artists.Name = 'AC/DC'