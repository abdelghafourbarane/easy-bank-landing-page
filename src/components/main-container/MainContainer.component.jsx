import classes from "./MainContainer.styles.module.scss";
import SpecialButton from "../special-button/SpecialButton.component";

function MainContainer() {
  return (
    <div className={classes.main_container}>
      <div className={classes.text_container}>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <SpecialButton text="Request Invite" />
      </div>
      <div className={classes.image_container}>
        <img className={classes.image_bg} src="/assets/bg-intro-desktop.svg" />
        <img
          className={classes.image_bg_mobile}
          src="/assets/bg-intro-mobile.svg"
        />
      </div>
    </div>
  );
}

export default MainContainer;
