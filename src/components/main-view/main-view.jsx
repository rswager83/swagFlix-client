import React from 'react';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

export class MainView extends React.Component {

    constructor(){
        super();
        this.state = {
            movies: [
                { 
                    _id: '629701898197e52e1bfb4e30', 
                    Title: 'Predator', 
                    Description: 'It stars Arnold Schwarzenegger as the leader of an elite paramilitary rescue team on a mission to save hostages in guerrilla-held territory in a Central American rainforest, who encounter the deadly Predator (Kevin Peter Hall), a skilled, technologically advanced alien who stalks and hunts them down.', 
                    Director: {
                        Name: 'John McTiernan',
                        Bio: 'John McTiernan is an American filmmaker. He is best known for his action films, especially Predator (1987), Die Hard (1988), and The Hunt for Red October (1990).',
                        Birth: 'January 8, 1951'
                    },
                    Genre: {
                        Name: 'Science Fiction Action',
                        Description: 'This is a genre of film and television that deals with futuristic concepts or technology such as advanced science, the exploration of outer space, time travel, parallel dimensions, and alien life.'
                    },
                    ImagePath: 'https://upload.wikimedia.org/wikipedia/en/9/95/Predator_Movie.jpg?20171217065006',
                    Featured: true 
                },
                { 
                    _id: '629714138197e52e1bfb4e35', 
                    Title: 'Lethal Weapon', 
                    Description: 'It stars Mel Gibson and Danny Glover alongside Gary Busey, Tom Atkins, Darlene Love, and Mitchell Ryan. In Lethal Weapon, a pair of mismatched LAPD detectives – Martin Riggs (Gibson), a former Green Beret who has become suicidal following the death of his wife, and veteran officer Roger Murtaugh (Glover) – work together as partners.', 
                    Director: {
                        Name: 'Richard Donner',
                        Bio: "Richard Donner was an American filmmaker whose notable works included some of the most financially-successful films during the New Hollywood era. According to film historian Michael Barson, Donner was \"one of Hollywood's most reliable makers of action blockbusters\". His career spanned over 50 years, crossing multiple genres and filmmaking trends.",
                        Birth: 'April 24, 1930',
                        Death: 'July 5, 2021'
                    },
                    Genre: {
                        Name: 'Buddy Cop Action',
                        Description: 'A film and television genre with plots involving two people of very different and conflicting personalities who are forced to work together to solve a crime and/or defeat criminals, sometimes learning from each other in the process.'
                    },
                    ImagePath: 'https://upload.wikimedia.org/wikipedia/en/d/d9/Lethal_weapon1.jpg',
                    Featured: false 
                },
                { 
                    _id: '629745bbfc707b133057e3ce', 
                    Title: 'Trading Places', 
                    Description: 'The film tells the story of an upper-class commodities broker (Aykroyd) and a poor street hustler (Murphy) whose lives cross when they are unwittingly made the subject of an elaborate bet to test how each man will perform when their life circumstances are swapped.', 
                    Director: {
                        Name: 'John David Landis',
                        Bio: "John David Landis is an American comedy filmmaker and actor. He is best known for the comedy films that he has directed, such as The Kentucky Fried Movie (1977), National Lampoon's Animal House (1978), The Blues Brothers (1980), An American Werewolf in London (1981), Trading Places (1983), Three Amigos (1986), Coming to America (1988) and Beverly Hills Cop III (1994).",
                        Birth: 'August 3, 1950'
                    },
                    Genre: {
                        Name: 'Comedy',
                        Description: 'A comedy film is a category of film which emphasizes humor. These films are designed to make the audience laugh through amusement.'
                    },
                    ImagePath: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Trading_Places.jpg?20180106001729',
                    Featured: false
                },
            ],
            selectedMovie: null
        };
    }

    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }

    render() {
        const { movies, selectedMovie } = this.state;

        if (selectedMovie) return <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }}/>;

        if (movies.length ===0) return <div className='main-view'>The list is empty!</div>;

        return (
            <div className='main-view'>
                {movies.map(movie => <MovieCard key={movie._id} movie={movie} onMovieClick={newSelectedMovie => {this.setState({ selectedMovie: newSelectedMovie }); }} />)}
            </div>
        );
    }
}

