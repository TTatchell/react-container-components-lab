import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'



export default class SearchableMovieReviewsContainer extends Component {

    constructor() {
        super()
        this.state = ({
            reviews: [],
            searchTerm: ''
        })
    }

    handleClick = (e) => {
        e.preventDefault()
        const NYT_API_KEY = 'SJQQhvpGhGIy3FRzK8IchbIrJMArI27M';
        const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`
            + `&api-key=${NYT_API_KEY}`;
        fetch(URL)
            .then(data => data.json())
            .then(resp => {
                console.log(resp.results)
                this.setState({
                    reviews: resp.results
                })
            })

    }

    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }




    render() {
        return (
            <div>
                <form>

                    <input
                        placeholder='Type Here'
                        onChange={event => this.handleChange(event)} />
                    <button
                        onClick={this.handleClick}>
                        Search
                </button>

                </form>
                <MovieReviews movReview={this.state.reviews}/>
                
            </div>
        )
    }
}