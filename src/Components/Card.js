import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.card}>
      {props.children}
      <span>{props.mediaName}</span>
      <button className={[classes.btn, classes.copyLink]}></button>
      <button className={[classes.btn, classes.copyImg]}></button>
      <button className={[classes.btn, classes.remove]}></button>
    </div>
  );
}

export default Card;
