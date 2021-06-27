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
  // const [track, setTrack] = useState("");
  const dispatch = useDispatch();

  // const array1 = newRleases?.items?.map((song) => {
  //   return song.uri;
  // });

  // const space = `", "`;
  // const thisArray = array1?.join();

  // const index = array1?.findIndex((item) => {
  //   if (track === item) return item;
  // });

  // const nextIndex = index + 1;

  // const nextItem = array1?.find((index) => {
  //   if (index === array1[nextIndex]) return index;
  // });

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
    // console.log("track", track);
    // console.log("stringified?", thisArray);
    // console.log("index:", index);
    // console.log("nextIndex", nextIndex);
    // console.log("nextItem", nextItem);
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
              }}
            >
              play all
            </button>
            {dailyTop50?.items?.map((data) => {
              return (
                <div key={data.track.id}>
                  <div className="musicBox">
                    <div
                      onClick={() => {
                        dispatch(setSpotifySong(data.track.uri));
                        // setTrack(data.uri);

                        // console.log("allUris:", array1);
                      }}
                      className="playSong"
                    >
                      <MusicComponent img={data?.track.album.images[2].url} />
                    </div>
                    <div className="songTitleArtistBox">
                      <div className="defaultTitleText">
                        <MusicComponent title={data.track.name} />
                      </div>
                      {data.track.artists.map((artists) => {
                        return (
                          <div className="defaultArtistText" key={artists.id}>
                            <MusicComponent artist={artists.name} />
                          </div>
                        );
                      })}
                      <AddSongButton
                        tracks={data}
                        image={data?.track.album.images[2].url}
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
