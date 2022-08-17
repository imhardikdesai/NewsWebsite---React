import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5ee41684e9124d3382b0e5416bb89437&page=1&pageSize=9`;
        let data = await fetch(url);
        let newData = await data.json();
        this.setState({
            articles: newData.articles,
            totalResults: newData.totalResults
        })
    }

    btnPrev = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5ee41684e9124d3382b0e5416bb89437&page=${this.state.page - 1}&pageSize=9`;
        let data = await fetch(url);
        let newData = await data.json();
        this.setState({
            articles: newData.articles,
            page: this.state.page - 1
        })
        document.getElementById('btnNext').removeAttribute("disabled", "")
    }

    btnNext = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {
            document.getElementById('btnNext').setAttribute('disabled', "")
        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=5ee41684e9124d3382b0e5416bb89437&page=${this.state.page + 1}&pageSize=9`;
            let data = await fetch(url);
            let newData = await data.json(this.state.articles);
            this.setState({
                articles: newData.articles,
                totalResults: newData.totalResults,
                page: this.state.page + 1
            })
        }
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
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.btnPrev}>&larr; Privious</button>
                    <button id="btnNext" className="btn btn-dark" onClick={this.btnNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
