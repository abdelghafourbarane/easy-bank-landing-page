import ArticleContainer from "../article-container/ArticleContainer.component";
import classes from "./ArticlesContainer.styles.module.scss";

function ArticlesContainer() {
  return (
    <div className={classes.articles_container}>
      <h3>Latest Articles</h3>
      <div className={classes.articles_list}>
        <ArticleContainer />
        <ArticleContainer />
        <ArticleContainer />
        <ArticleContainer />
      </div>
    </div>
  );
}

export default ArticlesContainer;
