import React, { Component } from 'react';
import beerAPI from '../api/beerAPI'

class BeerListPage extends Component {
    state = {
        beers: null
    }

    componentDidMount() {
        beerAPI.fetchBeers()
        .then(beers => {

            this.setState({
                beers
            })

        })
        .catch(err => {
            console.error(err);
        })
    }

    render() {
        // deconstructing
        const {beers} = this.state // const beers = this.state.beers
        if(!beers) return <h3>fetching beers ...</h3>

        return <ul>
            {
                beers.map(beer => {
                    return <li key={beer.id}>{beer.name}</li>
                })
            }

        </ul>
    }
}

export default BeerListPage