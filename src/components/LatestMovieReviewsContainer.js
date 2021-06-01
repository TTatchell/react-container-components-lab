import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

export default class LatestMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = ({
            reviews: []
        })
    }

    componentDidMount = () => {
        const NYT_API_KEY = 'SJQQhvpGhGIy3FRzK8IchbIrJMArI27M';
        const URL = `https://api.nytimes.com/svc/movies/v2/reviews/all.json?`
            + `api-key=${NYT_API_KEY}`;
        fetch(URL)
            .then(data => data.json())
            .then(resp => {
                //console.log(resp.results)
                this.setState({
                    reviews: resp.results
                })
            })

    }


    render() {
        return (
            <div className='latest-movie-reviews'>
                <MovieReviews movReview={this.state.reviews}/>
            </div>
        )
    }
}