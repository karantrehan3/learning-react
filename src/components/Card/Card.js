import "./Card.css";

function Card(props) {
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>; // props.children is reserved abd is the content between the opening and closing tags of the component
}

export default Card;
