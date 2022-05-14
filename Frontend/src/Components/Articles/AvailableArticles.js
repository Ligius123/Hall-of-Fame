import Card from "../UI/Card";
import ArticleItem from "./ArticleItem/ArticleItem";
import classes from "./AvailableArticles.module.css";

const DUMMY_ARTICLES = [
  {
    id: "a1",
    name: "Tricou",
    description: "Tricou mondial 94",
    price: 22.99,
  },
  {
    id: "a2",
    name: "Racheta",
    description: "Racheta turneu Wimbledon",
    price: 16.5,
  },
  {
    id: "a3",
    name: "Spada",
    description: "Medalie de aur",
    price: 12.99,
  },
  {
    id: "a4",
    name: "Costum",
    description: "Costum nota 10",
    price: 18.99,
  },
];

const AvailableArticles = () => {
  const articlesList = DUMMY_ARTICLES.map((article) => (
    <ArticleItem
      id={article.id}
      key={article.id}
      name={article.name}
      description={article.description}
      price={article.price}
    />
  ));

  return (
    <section className={classes.articles}>
      <Card>
        <ul>{articlesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableArticles;
