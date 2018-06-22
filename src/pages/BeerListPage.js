import React, { Component } from 'react';
import beerAPI from '../api/beerAPI'

class BeerListPage extends Component {
    state = {
        beers: null
    }

    render() {
        // deconstructing
        const {beers} = this.state // const beers = this.state.beers

        return <ul>

        </ul>
    }
}