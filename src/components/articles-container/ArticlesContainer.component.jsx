import ArticleContainer from "../article-container/ArticleContainer.component";
import classes from "./ArticlesContainer.styles.module.scss";

const ARTICLES_LIST = [
  {
    id: 1,
    imageUrl: "./assets/image-currency.jpg",
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    description:
      "The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …",
  },
  {
    id: 2,
    imageUrl: "./assets/image-restaurant.jpg",
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    description:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …",
  },
  {
    id: 3,
    imageUrl: "./assets/image-plane.jpg",
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    description:
      "We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …",
  },
  {
    id: 4,
    imageUrl: "./assets/image-confetti.jpg",
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live! ",
    description:
      " After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ... ",
  },
];

function ArticlesContainer() {
  return (
    <div className={classes.articles_container}>
      <h3>Latest Articles</h3>
      <div className={classes.articles_list}>
        {ARTICLES_LIST.map((article) => (
          <ArticleContainer key={article.id} {...article} />
        ))}
      </div>
    </div>
  );
}

export default ArticlesContainer;
