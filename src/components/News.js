import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0
        }
        document.title = `Get News | ${this.props.category}`;
    }
    async updateNews(){
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        this.props.setProgress(30);
        let parsedData = await data.json();
        this.props.setProgress(70);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        });
        this.props.setProgress(100);
    }

    async componentDidMount(){
        this.updateNews();
    }
    // handlePrevClick = async()=>{
    //     this.setState({
    //         page: this.state.page - 1
    //     });
    //     this.updateNews();
    // }
    // handleNextClick = async()=>{
    //     if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //         this.setState({
    //             page: this.state.page + 1
    //         });
    //         this.updateNews();
    //     }
    // }
    fetchMoreData= async ()=>{
        this.setState({
            page: this.state.page + 1
        })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center my-3'>Top {this.props.category} Headlines</h1>
                {this.state.loading && <Spinner/>}
                <InfiniteScroll 
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                <div className='container row'>
                    {this.state.articles.map((element) => {
                        return <div className='col-md-3' key={element.url}>
                            <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} name={element.source.name} date={element.publishedAt}/>
                        </div>
                    })}
                </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>
                </div> */}
            </div>
        )
    }
}

export default News