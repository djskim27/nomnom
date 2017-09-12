import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import RestaurantList from './RestaurantList'

class HomePage extends Component {

    render() {
        return (
            <div>
                <h1>NomNom</h1>
                <form onSubmit={this._fetchRestaurantData}>
                    <div>
                        <label htmlFor="city">Which city are you in?</label>
                        <input onChange={this.props._handleChange} type="text" name="city" value={this.props.city} />
                        <br />
                        <label htmlFor="foodType">What to eat?</label>
                        <input onChange={this.props._handleChange} type="text" name="foodType" value={this.props.foodType} />
                    </div>
                    <button>EAT</button>
                </form>

                <RestaurantList restaurants={this.props.restaurants}/>     
            </div>
        );
    }
}

export default HomePage;