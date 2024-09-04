import React, { Component } from 'react'
import NewsItem from './NewsItem'
export class News extends Component {
  articles = [
    {
        "source": {
            "id": "cbc-news",
            "name": "CBC News"
        },
        "author": "CBC News",
        "title": "Paralympic newsletter: Canada strikes gold, and who to watch on Tuesday | CBC Sports",
        "description": "CBC Sports' daily newsletter recaps the key Canadian results from Monday in Paris and looks ahead to the top medal contenders on Day 6.",
        "url": "http://www.cbc.ca/sports/paralympics/the-buzzer-newsletter-sept-2-1.7311461",
        "urlToImage": "https://i.cbc.ca/1.7311462.1725311562!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/bennett-nicholas-090224.jpg",
        "publishedAt": "2024-09-02T22:07:13.47076Z",
        "content": "This is a web version of CBC Sports' daily newsletter, The Buzzer. Sign up here to get it delivered to your inbox.\r\nAfter collecting eight medals over the first four days of competition without reach… [+6346 chars]"
    },
    {
        "source": {
            "id": "the-verge",
            "name": "The Verge"
        },
        "author": "Kevin Nguyen",
        "title": "Is tennis the sport of the future?",
        "description": "The sport is taking big swings at TikTok, sports gambling, and Saudi Arabia.",
        "url": "http://www.theverge.com/c/24225103/tennis-ai-electronic-line-calling-hawk-eye-sports-betting-gambling",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/3EdSIy5ZZv7ML_Qrhw_pF3T5bJU=/49x170:1992x1190/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25595941/WHATS_IN_WHATS_OUT_TENNIS_CHORUS_LEDE.jpg",
        "publishedAt": "2024-09-02T14:00:29Z",
        "content": "dId been promised the future of tennis was in the desert.\r\nFrom the stands of the Next Gen ATP Finals in Jeddah, Saudi Arabia, I watched as the eighth seed, Abdullah Shelbayh, was given the most dram… [+35005 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Madeleine Stix",
        "title": "Football has a head injury problem. Do these caps help? | CNN",
        "description": "CNN Sports Correspondent Coy Wire breaks down the benefits and potential shortcomings of Guardian Caps.",
        "url": "https://www.cnn.com/2024/08/30/health/video/guardian-caps-football-coy-wire-digvid",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1412260600.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-08-31T15:16:25.248Z",
        "content": "CNN Sports Correspondent Coy Wire breaks down the benefits and potential shortcomings of Guardian Caps."
    },
    {
        "source": {
            "id": "fox-sports",
            "name": "Fox Sports"
        },
        "author": "John Fanta, Michael Cohen",
        "title": "College basketball roundtable: Michigan State's tourney streak, top transfers and more",
        "description": "Is Michigan State's NCAA Tournament streak in jeopardy? Who is the top transfer in the nation? FOX Sports' college basketball experts answer that and more.",
        "url": "http://www.foxsports.com/stories/college-basketball/college-basketball-roundtable-michigan-states-tourney-streak-top-transfers-and-more",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/2024-02-29_College-Basketball-Roundtable_16x9.jpg?ve=1&tl=1",
        "publishedAt": "2024-02-29T20:59:30Z",
        "content": "It's almost time, ladies and gentlemen!\r\nThat long-awaited, fun-filled day when you wait to hear your team's name called before breaking out a pen and paper to fill out your NCAA Tournament bracket i… [+17577 chars]"
    },
    {
        "source": {
            "id": "bleacher-report",
            "name": "Bleacher Report"
        },
        "author": null,
        "title": "New Micah Parsons Show ",
        "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
        "url": "https://bleacherreport.com/videos/490566-the-edge-w-micah-parsons-ep-11-vod",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/2024-02-29_College-Basketball-Roundtable_16x9.jpg?ve=1&tl=1",
        "publishedAt": "2023-11-27T20:37:24.6381564Z",
        "content": null
    },
    {
        "source": {
            "id": "bleacher-report",
            "name": "Bleacher Report"
        },
        "author": null,
        "title": " Mikal Bridges Interview ",
        "description": "Fan easier, fan faster and fan better with Bleacher Report. Keep up with the latest storylines, expert analysis, highlights and scores for all your favorite sports.",
        "url": "https://bleacherreport.com/videos/491103-taylor-rooks-x-mikal-bridges-vod",
        "urlToImage": "https://a57.foxsports.com/statics.foxsports.com/www.foxsports.com/content/uploads/2024/02/1408/814/2024-02-29_College-Basketball-Roundtable_16x9.jpg?ve=1&tl=1",
        "publishedAt": "2023-11-27T20:37:24.3882176Z",
        "content": "Nets star sits down with Taylor Rooks for exclusive convo."
    }
]

constructor(){
  super();
  console.log("I am constructor");
  this.state = {
    articles : this.articles,
    loading : false
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
                        <NewsItem title={element.title.slice(0,45)} description={element.description.slice(0,90)} imageUrl={element.urlToImage} newsUrl={element.url}/>
                      </div>
              
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default News
