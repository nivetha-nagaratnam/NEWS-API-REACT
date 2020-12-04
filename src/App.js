import React, { Component } from 'react';
import { getArticles } from './services/news-api';
import Articles from './components/Articles'
import Article from './components/Article'
import LoginPage from './components/LoginPage'
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';
class App extends Component {
  state = {
    articles: [],
  };

  getArticle = (idx) => {
    return this.state.articles[idx];
  }

  async componentDidMount() {
    const result =  await getArticles();
    this.setState({
      articles: result.articles
    });
    console.log(result)
  }

  
  render() {

    return (
      <div className="App">
        <header className="App-header">TOP HEADLINES CANADA </header>
        <Link to='/loginPage'> Login</Link>

      <Switch>
      <Route exact path='/' render={(props) =>
          <Articles
            articles = {this.state.articles}/>
      } />
      <Route exact path='/article/:idx' render={(props) =>
          <Article 
            {...props}
            getArticle={this.getArticle}/>
      } />
      <Route exact path='/loginPage' render={(props) =>
        <LoginPage
          {...props}
          userName={this.state.userName}
        />
      } />
      </Switch>
    </div>
    
   
    );
  }
}

export default App;


