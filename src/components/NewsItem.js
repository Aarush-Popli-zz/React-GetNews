import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {

        let {title, description, imageUrl, newsUrl, name, date} = this.props;
        return (
            <div className='my-2'>
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://images.unsplash.com/photo-1478940020726-e9e191651f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <div className='mb-2'><span className="badge bg-dark">{name}</span></div>
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <p className='card-text'><small className='text-muted'>{new Date(date).toGMTString().slice(0, -13)}</small></p>
                            <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-sm btn-dark">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem