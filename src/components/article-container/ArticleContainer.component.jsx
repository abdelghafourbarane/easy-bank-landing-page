import classes from "./ArticleContainer.styles.module.scss";

function ArticleContainer() {
  return (
    <div className={classes.article_container}>
      <img src="/assets/image-currency.jpg" />
      <div className={classes.text_container}>
        <span className={classes.author}>by Claire Robinson</span>
        <span className={classes.title}>
          Receive money in any currency with no fees
        </span>
        <span className={classes.description}>
          The world is getting smaller and we’re becoming more mobile. So why
          should you be forced to only receive money in a single …
        </span>
      </div>
    </div>
  );
}

export default ArticleContainer;
