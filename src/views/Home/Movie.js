import React from 'react';

export const Movie = (movie) => {
    return (
        <section className="movie">
            <div className="movie__title">
                {movie.title}
            </div>
            <div className="movie__description">
                {movie.description}
            </div>
            <div className="movie__director">
                {movie.director}
            </div>
            <div className="movie__review">
                {movie.rt_score}
            </div>
        </section>
    )
}