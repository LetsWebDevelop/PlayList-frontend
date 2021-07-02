import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import AddSongButton from "../components/AddSongButton";
import MusicComponent from "../components/MusicComponent";
import "../components/MusicComponent.css";
import { clearPlaylistByID } from "../store/PlaylistByID/actions";

import { setSpotifySong } from "../store/playSong/actions";
import { selectSearchInput } from "../store/searchInput/selectors";
import {
  selectSpotifyMusic,
  selectDailyTop50Spotify,
} from "../store/spotifyMusic/selectors";

export default function SpotifyMusic() {
  const song = useSelector(selectSpotifyMusic);
  const dailyTop50 = useSelector(selectDailyTop50Spotify);
  const search = useSelector(selectSearchInput);
  const dispatch = useDispatch();

  console.log("check this one:::", dailyTop50);

  const playAllDailyTop50 = () => {
    const array = dailyTop50?.items?.map((song) => {
      return song.track.uri;
    });
    dispatch(setSpotifySong(array));
  };

  const playAllSearch = () => {
    const array = song?.items?.map((song) => {
      return song.uri;
    });
    dispatch(setSpotifySong(array));
  };

  useEffect(() => {
    dispatch(clearPlaylistByID());
  }, [dispatch]);

  return (
    <div className="mainBox">
      {song?.length === 0 ||
        (!song && (
          <>
            <button
              onClick={playAllDailyTop50}
              style={{
                marginLeft: "5px",
                border: "none",
                borderBottom: "1px solid black",
                cursor: "pointer",
                maxHeight: "20px",
              }}
            >
              play all
            </button>
            {dailyTop50?.items?.map((tracks) => {
              return (
                <div key={tracks.track.id}>
                  <div className="musicBox">
                    <div
                      onClick={() => {
                        dispatch(setSpotifySong(tracks.track.uri));
                        // setTrack(tracks.uri);

                        // console.log("allUris:", array1);
                      }}
                      className="playSong"
                    >
                      <MusicComponent img={tracks?.track.album.images[2].url} />
                    </div>
                    <div className="songTitleArtistBox">
                      <div className="defaultTitleText">
                        <MusicComponent title={tracks.track.name} />
                      </div>
                      {tracks.track.artists.map((artists) => {
                        return (
                          <div className="defaultArtistText" key={artists.id}>
                            <MusicComponent artist={artists.name} />
                          </div>
                        );
                      })}
                      <AddSongButton
                        tracks={tracks.track}
                        image={tracks.track.album.images[2].url}
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
          <button
            onClick={playAllSearch}
            style={{
              marginLeft: "5px",
              border: "none",
              borderBottom: "1px solid black",
              cursor: "pointer",
              maxHeight: "20px",
            }}
          >
            play all
          </button>
          {song?.items?.map((tracks) => {
            return (
              <div key={tracks.id}>
                <div className="musicBox">
                  <div
                    onClick={() => {
                      dispatch(setSpotifySong(tracks.uri));
                      // setTrack(tracks.uri);
                    }}
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
