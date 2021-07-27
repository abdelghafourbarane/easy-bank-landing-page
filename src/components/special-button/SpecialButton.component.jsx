import classes from "./SpecialButton.styles.module.scss";

function SpecialButton({ text }) {
  return <button className={classes.special_button}>{text}</button>;
}

export default SpecialButton;
