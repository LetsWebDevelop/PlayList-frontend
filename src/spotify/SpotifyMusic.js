import { useDispatch, useSelector } from "react-redux";

import MusicComponent from "../components/MusicComponent";
import PlayAllButton from "../components/PlayAllButton";

import { selectSearchInput } from "../store/searchInput/selectors";
import {
  selectSpotifyMusic,
  selectDailyTop50Spotify,
} from "../store/spotifyMusic/selectors";

import "../components/PlayListComponent.css";
import { useEffect } from "react";
import { clearPlaylistByID } from "../store/PlaylistByID/actions";

export default function SpotifyMusic() {
  const song = useSelector(selectSpotifyMusic);
  const dailyTop50 = useSelector(selectDailyTop50Spotify);
  const search = useSelector(selectSearchInput);
  const dispatch = useDispatch();

  const top50List = dailyTop50?.items;
  const searchList = song?.items;

  const playAllDailyTop50 = dailyTop50?.items?.map((song) => {
    return song.track.uri;
  });

  const playAllSearch = song?.items?.map((song) => {
    return song.uri;
  });

  useEffect(() => {
    dispatch(clearPlaylistByID());
  });

  return (
    <div>
      {song?.length === 0 ||
        (!song && (
          <div>
            <PlayAllButton playAll={playAllDailyTop50} />
            <div className="mainBoxPL">
              {dailyTop50?.items?.map((tracks) => {
                return (
                  <div key={tracks.track.id}>
                    <MusicComponent
                      dataTop50={tracks}
                      top50Array={top50List}
                      img={tracks?.track.album.images[2].url}
                      title={tracks.track.name}
                      uri={tracks.track.uri}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      {search && song?.items?.length > 0 && (
        <div>
          <PlayAllButton playAll={playAllSearch} />
          <div className="mainBoxPL">
            {song?.items?.map((tracks) => {
              return (
                <div key={tracks.id}>
                  <MusicComponent
                    dataSearch={tracks}
                    searchArray={searchList}
                    img={tracks.album.images[2].url}
                    title={tracks.name}
                    uri={tracks.uri}
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
