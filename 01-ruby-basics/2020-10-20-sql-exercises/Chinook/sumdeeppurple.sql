SELECT SUM(tracks.UnitPrice)
FROM tracks
INNER JOIN albums ON albums.AlbumId = tracks.AlbumId inner join artists ON artists.ArtistId = albums.ArtistId WHERE artists.Name = 'Deep Purple'


 
---

-- Artists 

-- Récuperer les albumId avec artistId where artist.name = deep purple 

-- Tracks identifié par albumId