import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddSongButton from "../components/AddSongButton";
import MusicComponent from "../components/MusicComponent";
import "../components/MusicComponent.css";

import { setSpotifySong } from "../store/playSong/actions";
import { selectSearchInput } from "../store/searchInput/selectors";
import {
  selectSpotifyMusic,
  selectSpotifyNewReleases,
} from "../store/spotifyMusic/selectors";

export default function SpotifyMusic() {
  const song = useSelector(selectSpotifyMusic);
  const newRleases = useSelector(selectSpotifyNewReleases);
  const search = useSelector(selectSearchInput);

  const [track, setTrack] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSpotifySong(track));
  }, [dispatch, track]);

  return (
    <div className="mainBox">
      {song?.length === 0 ||
        (!song && (
          <>
            {newRleases?.items?.map((tracks) => {
              return (
                <div key={tracks.id}>
                  <div className="musicBox">
                    <div
                      onClick={() => setTrack(tracks.uri)}
                      className="playSong"
                    >
                      <MusicComponent img={tracks?.images[2].url} />
                    </div>
                    <div className="songTitleArtistBox">
                      <div className="defaultTitleText">
                        <MusicComponent title={tracks.name} />
                      </div>
                      {tracks.artists.map((artists) => {
                        return (
                          <div className="defaultArtistText" key={artists.id}>
                            <MusicComponent artist={artists.name} />
                          </div>
                        );
                      })}
                      <AddSongButton
                        tracks={tracks}
                        image={tracks.images[2].url}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ))}
      {search && (
        <>
          {song?.items?.map((tracks) => {
            return (
              <div key={tracks.id}>
                <div className="musicBox">
                  <div
                    onClick={() => setTrack(tracks.uri)}
                    className="playSong"
                  >
                    <MusicComponent img={tracks.album.images[2].url} />
                  </div>
                  <div className="songTitleArtistBox">
                    <div className="defaultTitleText">
                      <MusicComponent title={tracks.name} />
                    </div>
                    {tracks.artists.map((artists) => {
                      return (
                        <div className="defaultArtistText" key={artists.id}>
                          <MusicComponent artist={artists.name} />
                        </div>
                      );
                    })}
                    <AddSongButton
                      tracks={tracks}
                      image={tracks.album.images[2].url}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
