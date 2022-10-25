import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageUrl, url, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <span style={{ zIndex: "1", left: "90%" }} className="position-absolute top-0 translate-middle badge rounded-pill bg-danger">
                        {source}
                    </span>
                    {/* <img src={imageUrl} className="card-img-top" alt="..." /> */}
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} at {new Date(date).toGMTString()}</small></p>
                        <a target="_blank" rel="noreferrer" href={url} className="btn btn-sm btn-dark">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
