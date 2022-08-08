import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles = [
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Jeré Longman and Karan Deep Singh",
            "title": "Is Cricket Sustainable Amid Climate Change?",
            "description": "The warming of the earth, combined with the exhausting nature of the game, is raising questions about the future of the second most popular sport in the world.",
            "url": "https://www.nytimes.com/2022/08/04/sports/cricket/cricket-climate-change-sustainable.html",
            "urlToImage": "https://static01.nyt.com/images/2022/08/04/sports/04cricket-climate-1/04cricket-climate-1-facebookJumbo.jpg",
            "publishedAt": "2022-08-04T09:00:29Z",
            "content": "An eight-match series between the West Indies and India concludes Saturday and Sunday in South Florida as the height of hurricane season approaches in the Gulf and the Atlantic. In 2017, two Category… [+1924 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "India: Police rumble fake 'IPL' cricket league",
            "description": "Police say a gang set up a fake version of the Indian Premier League and fooled Russian gamblers.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-62123966",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12CA5/production/_125856967_p0cl4yjb.jpg",
            "publishedAt": "2022-07-11T12:25:09Z",
            "content": "Media caption, IPL: India police arrest organisers of fake cricket match\r\nPolice in India have arrested a group of conmen who set up a fake version of cricket's Indian Premier League (IPL) and fooled… [+1340 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Commonwealth Games: India thrash Pakistan in cricket",
            "description": "India cruise to an eight-wicket win over fierce rivals Pakistan in their Commonwealth Games Group A cricket match at Edgbaston.",
            "url": "https://www.bbc.co.uk/sport/commonwealth-games/62369628",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/14669/production/_126116538_gettyimages-1242221167.jpg",
            "publishedAt": "2022-07-31T13:42:24Z",
            "content": "Smriti Mandhana's 63 came off 42 balls with eight fours and three sixes\r\n<table>\r\n<tr><td>Commonwealth Games Group A, Edgbaston:</td></tr><tr><td>India 102-2 (11.4 overs) beat Pakistan 99 all out (18… [+520 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "David Waldstein and Yuvraj Khanna",
            "title": "Staten Island Cricket Club Celebrates Its 150th Anniversary",
            "description": "The club, which has been in continuous operation since before the invention of airplanes and the game of basketball, recently celebrated its 150th anniversary.",
            "url": "https://www.nytimes.com/2022/07/21/sports/staten-island-cricket-club.html",
            "urlToImage": "https://static01.nyt.com/images/2022/07/21/sports/21cricket-StatenIsland-slide-FLS7/21cricket-StatenIsland-slide-FLS7-facebookJumbo.jpg",
            "publishedAt": "2022-07-21T09:00:30Z",
            "content": "The moment that Nancy Johnson saw the gentlemen in white throwing and batting on the thin, sandy pitch carved into Walker Park on Saturday, she flashed back to the 1950s. As a young girl, she had gon… [+788 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Commonwealth Games: Australia Meg Lanning targets gold medal",
            "description": "Meg Lanning wants to add a Commonwealth Games cricket gold medal to help Australia complete a \"unique\" quadruple.",
            "url": "https://www.bbc.co.uk/sport/cricket/62023008",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/16CF9/production/_125733439_gettyimages-1389613313.jpg",
            "publishedAt": "2022-07-13T08:33:22Z",
            "content": "Australia captain Meg Lanning lifted the women's World Cup in April\r\nMeg Lanning says Australia's players will relish the chance to complete a 'grand slam' of tournament victories at this month's Com… [+2925 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "England v South Africa: Cricket dealt serious warnings during Chester-le-Street match",
            "description": "Cricket is dealt two serious warnings about its future during Tuesday's sweltering one-day international between England and South Africa.",
            "url": "https://www.bbc.co.uk/sport/cricket/62224133",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/72D5/production/_125979392_gettyimages-1409702714.jpg",
            "publishedAt": "2022-07-19T22:03:41Z",
            "content": "Ben Stokes' reluctant goodbye to one-day international cricket should have seen his every move applauded by his home crowd.\r\nBut when the England all-rounder wearily walked off at the change of innin… [+3898 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Jonathan Wolfe and Remy Tumin",
            "title": "Your Thursday Evening Briefing",
            "description": "Here’s what you need to know at the end of the day.",
            "url": "https://www.nytimes.com/2022/07/21/briefing/biden-covid-jan-6-committee-hearing.html",
            "urlToImage": "https://static01.nyt.com/images/2022/07/21/multimedia/21evening-briefing-nl-J61-promo/21evening-briefing-nl-J61-facebookJumbo.jpg",
            "publishedAt": "2022-07-21T21:52:00Z",
            "content": "9. In 1872, a group of British financiers living in New York gathered on Staten Island to play a game of cricket. The club has not stopped since.\r\nFor 150 years, the Staten Island Cricket Club has be… [+488 chars]"
        }
    ]
    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        }
    }
    render() {
        return (
            <div className='container my-3'>
                <h1>Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title.slice(0, 45)} imageUrl={element.urlToImage} description={element.description.slice(0, 70)} url={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
