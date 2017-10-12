# Screencast nginx server with simple client

## Usage (server)

    docker-compose up -d

## To broadcast

In [OBS](https://obsproject.com) settings, set Stream URL `rtmp://<server>:1935/live` and `<Stream key>`.

## To watch

Open `http://<server>:8080?key=<Stream key>`.
