import classes from "./FeatureContainer.styles.module.scss";

function FeatureContainer({ iconUrl, title, description }) {
  return (
    <div className={classes.feature_container}>
      <img src={`${iconUrl}`} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default FeatureContainer;
