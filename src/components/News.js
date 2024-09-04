import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
  render() {
    return (
      <div>
        <div className="container my-3">
          <h1>News Feed</h1>
          <div className="row my-3">
            <div className="col-md-4">
              <NewsItem title="myTitle" description="myDesc" imageUrl="https://www.dailyexcelsior.com/wp-content/uploads/2019/07/Dhoni-1.jpg"/>
            </div>
            <div className="col-md-4">
              <NewsItem title="myTitle" description="myDesc" imageUrl="https://www.dailyexcelsior.com/wp-content/uploads/2019/07/Dhoni-1.jpg"/>
            </div>
            <div className="col-md-4">
              <NewsItem title="myTitle" description="myDesc" imageUrl="https://www.dailyexcelsior.com/wp-content/uploads/2019/07/Dhoni-1.jpg"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default News
