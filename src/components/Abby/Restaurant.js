import React from 'react';
import {useEffect, useState} from 'react';
import RestaurantTitle from './RestaurantTitle';
import './RestaurantTitle.css';



const Restaurant = ({pos}) => {
    const api_key = 'a34d947b7d1b3e3355e1f41b0bd18e9a';
    const [restaurant, setRestaurant] = useState([]);

    const restaurantData = async () => {
        let url = `https://developers.zomato.com/api/v2.1/geocode?lat=${pos.lat}&lon=${pos.long}`;
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'user-key': api_key,
                'Accept': 'application/json'

            }
        });
        const restaurants = await response.json();
        const restaurantInfo = restaurants.nearby_restaurants;
        setRestaurant(restaurantInfo);

    }

    useEffect(() => {
        restaurantData();
    }, [pos.lat, pos.long]);


    return (
        <div className="container">
            <img className ="food" src="https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80"></img>
            <h1 className= "title">Restaurants Nearby:</h1>
            {restaurant.map(name => <RestaurantTitle name={name.restaurant.name} id={name.restaurant.id}/>)}
        </div>
    );
};

export default Restaurant;