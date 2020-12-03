import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

const Articles = (props) => {
  return (
    props.articles.map((article,idx) => {
      return (
        <div>
          <Link
            to={`/article/${idx}`}
            key={article.title}
          >
            *{article.title}
          </Link>
        </div>
      )}
  ));
};

export default Articles;


