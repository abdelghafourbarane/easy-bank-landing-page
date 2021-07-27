import classes from "./Mockup.styles.module.scss";

function Mockup() {
  return (
    <div className={classes.mockup_wrapper}>
      <img className={classes.mockup_image} src="/assets/image-mockups.png" />
    </div>
  );
}

export default Mockup;
