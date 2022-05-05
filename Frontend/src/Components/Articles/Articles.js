import { Fragment } from "react";

import ArticlesSummary from "./ArticlesSummary";
import AvailableArticles from "./AvailableArticles";

const Articles = () => {
  return (
    <Fragment>
      <ArticlesSummary />
      <AvailableArticles />
    </Fragment>
  );
};

export default Articles;
