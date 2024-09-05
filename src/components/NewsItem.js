import React from 'react'

const NewsItem = (props) => {
    let {title, description, imageUrl, newsUrl, author, date, source} = props;

    return (
      <div>
        <div className="card">
          <div style={{display:"flex", position:"absolute", right:"5px", top:"5px"}}>
            <span className="bagde rounded-pill bg-danger text-light px-2">{source}</span>
          </div>
          <img src={imageUrl?imageUrl : "https://www.bing.com/images/search?view=detailV2&ccid=QoQQS2nq&id=935CC4603B6A69351D1B5BECF6454705FE403791&thid=OIP.QoQQS2nqeKnEH-lT8TTqEwHaEo&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.4284104b69ea78a9c41fe953f134ea13%3frik%3dkTdA%252fgVHRfbsWw%26riu%3dhttp%253a%252f%252fwww.baltana.com%252ffiles%252fwallpapers-7%252fMS-Dhoni-Wallpaper-22521.jpg%26ehk%3dYnhdarENT9bsEOPYH%252fVOLsTWv3mFFRBNWkPRe2sM17E%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=1200&expw=1920&q=dhoni&simid=607988141017226301&FORM=IRPRST&ck=E91F547FCBC0EDD2FBAE6E6B815D69B2&selectedIndex=4&itb=0"} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={newsUrl} target='_blank' className="btn btn-sm btn-dark">Read more</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
