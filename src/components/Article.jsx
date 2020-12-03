import React from 'react';
import { Link } from 'react-router-dom';
import './Article.css';

const Article = (props) => {
    const article = props.getArticle(props.match.params.idx);
    return(
        <div className='ArticlePage'>
  
            <div className='ArticlePage-article'>
            <span><h2 className = 'bold'>{article.title}</h2></span>
            <span> <span className = 'bold'>Description:</span> {article.description}</span>

            <span><span className = 'bold'>Content:</span> {article.content}</span>

            <span><span className = 'bold'>Posted By:</span> {article.author}</span>

            <span><span className = 'bold'>Posted On: </span>{article.source.name}</span>
            <Link className = 'bold' to='/'> RETURN TO MAINPAGE</Link>
            </div>
        </div>
    );
}

export default Article;