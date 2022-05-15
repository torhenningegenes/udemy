import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
function MeetupItem(props) {
  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.alt}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.adress}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button>ADD TO FAVORITES</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
