import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 9
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`;
    }

    async componentDidMount() {
        this.updateNews();
    }

    async updateNews() {
        this.setState({ loading: true })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ee41684e9124d3382b0e5416bb89437&page=${this.state.page}& pageSize=${this.props.pageSize} `;
        let data = await fetch(url);
        let newData = await data.json();
        this.setState({
            articles: newData.articles,
            totalResults: newData.totalResults,
            loading: false
        })
    }
    btnPrev = async () => {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ee41684e9124d3382b0e5416bb89437&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let newData = await data.json();
        // this.setState({ loading: true })
        // this.setState({
        //     articles: newData.articles,
        //     page: this.state.page - 1,
        //     loading: false
        // })
        this.setState({ page: this.state.page - 1 })
        this.updateNews();
    }

    btnNext = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=5ee41684e9124d3382b0e5416bb89437&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        //     let data = await fetch(url);
        //     let newData = await data.json(this.state.articles);
        //     this.setState({
        //         articles: newData.articles,
        //         totalResults: newData.totalResults,
        //         page: this.state.page + 1
        //     })
        // }
        this.setState({ page: this.state.page + 1 })
        this.updateNews();
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center'>Top {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}  Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : "Empty Title"} imageUrl={element.urlToImage ? element.urlToImage : "https://asianatimes.com/wp-content/uploads/2022/08/asteroid-6054186_1920_1659586399339_1659712789934_1659712789934.jpg"} description={element.description ? element.description : "Empty Description"} url={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.btnPrev}>&larr; Privious</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.btnNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News
