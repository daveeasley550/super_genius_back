# Super Genius Music API
## Project 8 - By LEHM(on)

##### Used: 
* express
* javascript
* mongoose
* heroku
* mongo atlas
  
##### Information source: https://www.last.fm/api/scrobbling#how-we-handle-requests

### End Point: 
`https://super-genius-back.herokuapp.com/`

`https://super-genius-back.herokuapp.com/artist`

#### Categories to search

* Songs: `name`, `playcount`, `artist: name`
* Artists: `name`, `playcount`, `url`

## This API uses HTTP GET for query
### This will retrieve every object within your specified category.

#### Example: `$ http get https://super-genius-back.herokuapp.com/songs`

##### Expected result:

```
                        {
                                "_id" : ObjectId("605cb5d4b7182f48fcf4367d"),
                                "name" : "Say So",
                                "playcount" : 5493772,
                                "artist" : {
                                        "name" : "Doja Cat"
                                }
                        },
                        {
                                "_id" : ObjectId("605cb5d4b7182f48fcf4367e"),
                                "name" : "Wild at Heart",
                                "playcount" : 325048,
                                "artist" : {
                                        "name" : "Lana Del Rey"
                                }
                        }


```



#### Example: `$ http get https://super-genius-back.herokuapp.com/artist`

##### Expected result: 

```
                        {
                                "_id" : ObjectId("605cb5d4b7182f48fcf4364c"),
                                "name" : "Imagine Dragons",
                                "playcount" : "100470545",
                                "url" : "https://www.last.fm/music/Imagine+Dragons"
                        },
                        {
                                "_id" : ObjectId("605cb5d4b7182f48fcf4364d"),
                                "name" : "The Strokes",
                                "playcount" : "199546082",
                                "url" : "https://www.last.fm/music/The+Strokes"
                        }

```

## POST
### This will allow you to create a new artist.

#### Template: `$ http POST https://super-genius-back.herokuapp.com/artist/<artist name> name="<name>" playcount="<number string>" url="<url>"`

#### Example: `$ http POST https://super-genius-back.herokuapp.com/artist/Artists Name name="Artists Name" playcount="1051120140" url="https://lorum.com"`

##### Expected result: 
```
Artist
{
    "name": "Artist name",
    "playcount": "1051120140",
    "url": "https://lorum.com"
}
```

### This will allow you to create a new song.

#### Template: `$ http POST https://super-genius-back.herokuapp.com/songs/<song name> name="<name>" playcount="<number string>" artist={name="<artist name>"}`

#### Example: `$ http POST https://super-genius-back.herokuapp.com/songs/Song name="Song" playcount="1051120140" artist={name="Artist"}`

##### Expected Result: 
```
Songs
{
    "name": "Song",
    "playcount": "1051120140",
    "artist": {"name": "Artist"}
}
```

## PUT
### This will allow you to edit an artist.

#### Template: `$ http POST https://super-genius-back.herokuapp.com/artist/<_id> name="<name>" playcount="<number string>" url="<url>"`

#### Example: `$ http POST https://super-genius-back.herokuapp.com/artist/605cb5d4b7182f48fcf4364d name="Artists Name" playcount="1051120140" url="https://lorum.com"`

##### Expected result: 
```
Artist
{
    "name": "Artist name",
    "playcount": "1051120140",
    "url": "https://lorum.com"
}
```

### This will allow you to edit a song.

#### Template: `$ http PUT https://super-genius-back.herokuapp.com/songs/<_id> name="<name>" playcount="<number string>" artist={name="<artist name>"}`

#### Example: `$ http PUT https://super-genius-back.herokuapp.com/songs/"605cb5d4b7182f48fcf4367f name="Song" playcount="1051120140" artist={name="Artist"}`

##### Expected Result: 
```
Songs
{
    "name": "Song",
    "playcount": "1051120140",
    "artist": {"name": "Artist"}
}
```


## DELETE
### This will allow you to delete an artist.

#### Template: `$ http DELETE https://super-genius-back.herokuapp.com/artist/<_id>`

#### Example: `$ http DELETE https://super-genius-back.herokuapp.com/artist/605cb5d4b7182f48fcf4364d`

##### Expected result: 
```
{
    "ok": true
}
```

### This will allow you to delete a song.

#### Template: `$ http DELETE https://super-genius-back.herokuapp.com/songs/<_id>`

#### Example: `$ http DELETE https://super-genius-back.herokuapp.com/songs/"605cb5d4b7182f48fcf4367f`

##### Expected result: 
```
{
    "ok": true
}
```