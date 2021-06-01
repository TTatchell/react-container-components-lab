import React, { Component } from 'react'

const MovieReviews = (props) => {
    return (
        <div>
            {props.movReview.map(review => 
                <div>
                    <h3>{review.display_title}</h3>
                    {/* <small>{review.byline}</small> */}
                </div>

            )}
        </div>
    )
}

export default MovieReviews