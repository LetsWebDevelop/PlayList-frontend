import { selectPlaylistByID } from "../store/PlaylistByID/selectors";
import { useSelector } from "react-redux";

import "./PlayListComponent.css";
import PlayAllButton from "./PlayAllButton";
import MusicComponent from "./MusicComponent";

export default function PlayListComponent() {
  const playlist = useSelector(selectPlaylistByID);
  const songs = playlist.songs;

  const playAllPlaylist = songs?.map((song) => {
    return song.uri;
  });

  return (
    <div>
      {songs?.length > 0 && <PlayAllButton playAll={playAllPlaylist} />}
      <div className="mainBoxPL">
        {songs?.length === 0 && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <h3>So empty here! Add some songs!</h3>
          </div>
        )}
        {songs?.map((song) => {
          return (
            <>
              <MusicComponent
                key={song.id}
                uri={song.uri}
                img={song.image}
                title={song.title}
                artist={song.artist}
                songs={songs}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}
