export default function MusicComponent(props) {
  return (
    <>
      <img src={props.img} alt={props.name} />
      {props.title}
      {props.artist}
    </>
  );
}
