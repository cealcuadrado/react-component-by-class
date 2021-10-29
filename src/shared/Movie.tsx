import { Component } from 'react';
import './Movie.scss';

export interface MovieProps {
    title: string,
    year: string,
    director: string
}

class Movie extends Component<MovieProps, {}> {
    render() {
        return (
            <div className="movie">
                <h1>{this.props.title} <small>({this.props.year})</small></h1>
                <p>{this.props.director}</p>
            </div>
        );
    }
}

export default Movie