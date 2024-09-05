import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "us",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    tegory: PropTypes.string,
  };

  captalize = (word) =>{
    return word.charAt(0).toUpperCase() + word.slice(1)
  }

  constructor(props) {
    super(props);
    // this.handlePrevClick = this.handlePrevClick.bind(this);
    // this.handleNextClick = this.handleNextClick.bind(this);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults : 0
    };
    document.title = `Flash News - ${this.captalize(this.props.category)}`
  }

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cd95f4cbfdc45a09d064b87246e6619&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchData = async ()=>{
    this.setState({page : this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=9cd95f4cbfdc45a09d064b87246e6619&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let response = await fetch(url);
    let data = await response.json();
    this.setState({
      articles: this.state.articles.concat(data.articles),
      totalResults: data.totalResults
    });
  }
  render() {
    return (
      <div>
          <h1 className="text-center">News Feed on {this.captalize(this.props.category)}</h1>
          {this.state.loading && <Spinner/>}
           <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}
            endMessage={
              <p style={{ textAlign: 'center' }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
            // below props only if you need pull down functionality
            // refreshFunction={this.refresh}
            // pullDownToRefresh
            // pullDownToRefreshThreshold={50}
            // pullDownToRefreshContent={
            //   <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            // }
            // releaseToRefreshContent={
            //   <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            // }
          >
            <div className="container">
              <div className="row my-3">
                  {this.state.articles.map((element) => {
                    return (
                      <div className="col-md-4 my-3" key={element.url}>
                        <NewsItem
                          title={element.title ? element.title.slice(0, 45) : ""}
                          description={element.description ? element.description.slice(0, 90) : ""}
                          imageUrl={element.urlToImage}
                          newsUrl={element.url}
                          author={element.author}
                          date={element.publishedAt}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
          </InfiniteScroll>
      </div>
    );
  }
}

export default News;
