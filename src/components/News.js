import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
 
constructor(){
  super();
  // console.log("I am constructor");
  this.handlePrevClick = this.handlePrevClick.bind(this);
  this.handleNextClick = this.handleNextClick.bind(this);
  this.state = {
    articles : [],
    loading : false,
    page : 1
  }
}
async componentDidMount(){
  // let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9cd95f4cbfdc45a09d064b87246e6619"
  let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=9cd95f4cbfdc45a09d064b87246e6619&page=1&pageSize=15"
  let response = await fetch(url);
  let data = await response.json();
  // console.log(data)
  this.setState({articles : data.articles, totalResults : data.totalResults})
}

handlePrevClick = async ()=>{
  let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9cd95f4cbfdc45a09d064b87246e6619&page=${this.state.page - 1}&pageSize=15`
  let response = await fetch(url);
  let data = await response.json();
  // console.log(data)
  this.setState({
    page : this.state.page - 1 ,
    articles : data.articles
  })
}

handleNextClick = async ()=>{
  console.log(this.state.page)
  if(this.state.page >= Math.ceil(this.state.totalResults/15)){

  }
  else{
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9cd95f4cbfdc45a09d064b87246e6619&page=${this.state.page + 1}&pageSize=15`
    let response = await fetch(url);
    let data = await response.json();
    console.log(data)
    this.setState({
      page : this.state.page + 1 ,
      articles : data.articles

    })
  }
}

  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>News Feed</h1>
          <div className="row my-3">
            {this.state.articles.map((element)=>{
              return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,90):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                        {/* <NewsItem title={element.title?element.title.slice(0,45):""} /> */}
                      </div>  
            })}
          </div>
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
          <button className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
