import classes from "./ArticleContainer.styles.module.scss";

function ArticleContainer({ imageUrl, author, title, description }) {
  return (
    <div className={classes.article_container}>
      <img src={`${imageUrl}`} alt={title} />
      <div className={classes.text_container}>
        <span className={classes.author}>{`By ${author}`}</span>
        <span className={classes.title}>{title}</span>
        <span className={classes.description}>{description}</span>
      </div>
    </div>
  );
}

export default ArticleContainer;
