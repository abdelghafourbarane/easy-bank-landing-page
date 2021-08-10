import classes from "./modal.styles.module.scss";

function Modal() {
  return (
    <div className={classes.modal}>
      <div className={classes.list_container}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Modal;
