import React, {useEffect, useState}  from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) =>{
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  };
  
  const updateNews = async () => {
    // if (props.setProgress) props.setProgress(0);
    props.setProgress(0);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    
    setLoading(true)
    try {
      let response = await fetch(url);
      // if (props.setProgress) props.setProgress(30);
      props.setProgress(30);
      let data = await response.json();
      if (props.setProgress) props.setProgress(70);
      setArticles(data.articles)
      setTotalResults(data.totalResults)
      setLoading(false)

      // if (props.setProgress) props.setProgress(100);
      props.setProgress(100);
    } catch (error) {
      console.error("Error fetching news:", error);
      setLoading(false);
    }
  }

  useEffect(()=>{
    updateNews();
    
  })

  const fetchData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        try {
          let response = await fetch(url);
          let data = await response.json();
          setArticles(articles.concat(data.articles));
          setTotalResults(data.totalResults)
        } catch (error) {
          console.error("Error fetching more news:", error);
        }
  };
  return (
    <div>
      <h1 className="text-center">News Feed on {capitalize(props.category)}</h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length} // Important field to render the next data
        next={fetchData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="container">
          <div className="row my-3">
            {articles.map((element) => {
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

News.defaultProps = {
  country: "us",
  pageSize: 9,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string, // Fixed typo here
  setProgress: PropTypes.func,
  apiKey: PropTypes.string.isRequired, // Ensure apiKey is required
};
export default News;

