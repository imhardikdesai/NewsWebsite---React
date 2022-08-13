import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5ee41684e9124d3382b0e5416bb89437";
        let data = await fetch(url);
        let newData = await data.json();
        this.setState({
            articles: newData.articles
        })
    }
    render() {
        return (
            <div className='container my-3'>
                <h1>Top Headlines</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : "Empty Title"} imageUrl={element.urlToImage ? element.urlToImage : "https://asianatimes.com/wp-content/uploads/2022/08/asteroid-6054186_1920_1659586399339_1659712789934_1659712789934.jpg"} description={element.description ? element.description : "Empty Description"} url={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
