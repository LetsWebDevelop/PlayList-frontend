import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchPlaylists } from "../store/getPlaylists/actions";

export default function Loading() {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylists());
    history.push("/");
  }, [history, dispatch]);

  return (
    <div>
      <h3>Loading....</h3>
    </div>
  );
}
