# Notes app

A small full-stack notes app: Express REST API for CRUD operations and a static SPA-style UI in `public/`. Data is kept in memory (resets when the server restarts).

## Demo

Screen recording of the app:

<video src="notes.mov" controls playsinline width="720">
  <a href="notes.mov">Download or open notes.mov</a>
</video>

If the inline player does not load in your viewer, open [notes.mov](notes.mov) directly. On GitHub, you may need to set the `<video>` `src` to the file’s **raw** URL (click *Raw* on the file page) for the player to work in the rendered README.

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). Override the port with `PORT` if needed.

## API

| Method | Path | Description |
|--------|------|-------------|
| `POST` | `/notes` | Create a note (`title`, `content` JSON body) |
| `GET` | `/notes` | List all notes |
| `GET` | `/note/:id` | Get one note |
| `PUT` | `/note/:id` | Update a note |
| `DELETE` | `/note/:id` | Delete a note |
