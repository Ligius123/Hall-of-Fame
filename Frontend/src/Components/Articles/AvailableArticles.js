import Card from "../UI/Card";
import ArticleItem from "./ArticleItem/ArticleItem";
import classes from "./AvailableArticles.module.css";
import HagiArticle from "./HagiArticle.jpg";
import HalepArticle from "./HalepArticle.jpg";
import ComaneciArticle from "./ComaneciArticle.webp";
import BranzaArticle from "./BranzaArticle.jpg";

const DUMMY_ARTICLES = [
  {
    id: "a1",
    name: "Tricou",
    description: "Tricou mondial 94",
    price: 22.99,
    image: HagiArticle,
  },
  {
    id: "a2",
    name: "Racheta",
    description: "Racheta turneu Wimbledon",
    price: 16.5,
    image: HalepArticle,
  },
  {
    id: "a3",
    name: "Spada",
    description: "Medalie de aur",
    price: 12.99,
    image: ComaneciArticle,
  },
  {
    id: "a4",
    name: "Costum",
    description: "Costum nota 10",
    price: 18.99,
    image: BranzaArticle,
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
