// import React, { Component } from "react";
// import NewsItem from "./NewsItem";
// import Spinner from "./Spinner";
// import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

// export class News extends Component {
//   static defaultProps = {
//     country: "us",
//     pageSize: 9,
//     category: "general",
//   };

//   static propTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
//     tegory: PropTypes.string,
//   };

//   captalize = (word) =>{
//     return word.charAt(0).toUpperCase() + word.slice(1)
//   }

//   constructor(props) {
//     super(props);
//      this.state = {
//       articles: [],
//       loading: true,
//       page: 1,
//       totalResults : 0
//     };
//     document.title = `Flash News - ${this.captalize(this.props.category)}`
//   }

//   async updateNews() {
//     this.props.setProgress(0);
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let response = await fetch(url);
//     this.props.setProgress(30);
//     let data = await response.json();
//     this.props.setProgress(70);
//     this.setState({
//       articles: data.articles,
//       totalResults: data.totalResults,
//       loading: false,
//     });
//     this.props.setProgress(100)
//   }

//   async componentDidMount() {
//     this.updateNews();
//   }

//   fetchData = async ()=>{
//     this.setState({page : this.state.page + 1 });
//     const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
//     let response = await fetch(url);
//     let data = await response.json();
//     this.setState({
//       articles: this.state.articles.concat(data.articles),
//       totalResults: data.totalResults
//     });
//   }
//   render() {
//     return (
//       <div>
//           <h1 className="text-center">News Feed on {this.captalize(this.props.category)}</h1>
//           {this.state.loading && <Spinner/>}
//            <InfiniteScroll
//             dataLength={this.state.articles.length} //This is important field to render the next data
//             next={this.fetchData}
//             hasMore={this.state.articles.length !== this.state.totalResults}
//             loader={<Spinner/>}
//             endMessage={
//               <p style={{ textAlign: 'center' }}>
//                 <b>Yay! You have seen it all</b>
//               </p>
//             }
//           >
//             <div className="container">
//               <div className="row my-3">
//                   {this.state.articles.map((element) => {
//                     return (
//                       <div className="col-md-4 my-3" key={element.url}>
//                         <NewsItem
//                           title={element.title ? element.title.slice(0, 45) : ""}
//                           description={element.description ? element.description.slice(0, 90) : ""}
//                           imageUrl={element.urlToImage}
//                           newsUrl={element.url}
//                           author={element.author}
//                           date={element.publishedAt}
//                           source={element.source.name}
//                         />
//                       </div>
//                     );
//                   })}
//               </div>
//             </div>
//           </InfiniteScroll>
//       </div>
//     );
//   }
// }

// export default News;



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
    category: PropTypes.string, // Fixed typo here
    setProgress: PropTypes.func,
    apiKey: PropTypes.string.isRequired, // Ensure apiKey is required
  };

  capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
    document.title = `Flash News - ${this.capitalize(this.props.category)}`;
  }

  async updateNews() {
    if (this.props.setProgress) this.props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    
    this.setState({ loading: true });
    try {
      let response = await fetch(url);
      if (this.props.setProgress) this.props.setProgress(30);
      let data = await response.json();
      if (this.props.setProgress) this.props.setProgress(70);
      
      this.setState({
        articles: data.articles,
        totalResults: data.totalResults,
        loading: false,
      });

      if (this.props.setProgress) this.props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      this.setState({ loading: false });
    }
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchData = async () => {
    this.setState(
      (prevState) => ({
        page: prevState.page + 1,
      }),
      async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        try {
          let response = await fetch(url);
          let data = await response.json();
          this.setState({
            articles: this.state.articles.concat(data.articles),
            totalResults: data.totalResults,
          });
        } catch (error) {
          console.error("Error fetching more news:", error);
        }
      }
    );
  };

  render() {
    return (
      <div>
        <h1 className="text-center">News Feed on {this.capitalize(this.props.category)}</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length} // Important field to render the next data
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="container">
            <div className="row my-3">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4 my-3" key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : "No Title Available"}
                      description={element.description ? element.description.slice(0, 90) : "No Description Available"}
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
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

