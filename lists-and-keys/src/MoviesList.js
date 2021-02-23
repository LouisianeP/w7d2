import React from 'react'

export default function MoviesList(props) {
    console.log(props.movies);

    const list = props.movies.map(movie => {
        // let oscarMessage = '';
        // if (movie.hasOscars) {
        //     oscarMessage = 'Oscar winning movie'
        // } else {
        //     oscarMessage = 'No Oscar'
        // }
        return (
            <div key={movie.id}>
                <h2>{movie.title}</h2>
                <p>{movie.director}</p>
                {/* <p>{movie.rate}</p> */}
                {/* <p>{oscarMessage}</p> */}
                {/* // if the movie rate is > 9.1 then display it */}

                {movie.rate > 9.1 && <p>{movie.rate}</p>}

                {/* isItTrue ? doThis : ohterwiseDoThat */}
                {movie.hasOscars ? <p>Oscar winning movie ⭐️</p> : <p>No Oscar 😔</p>}
            </div>
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}
