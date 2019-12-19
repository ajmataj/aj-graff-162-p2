import React from 'react';
import logo from '../starwars.png';

export default function Home() {
    return (
        <div class="text-center">
            <img src={logo} width="400" height="200" alt="Star Wars API"/>
            <h2>Info about your favorite Star Wars characters, planets, and starships!</h2>
        </div>
    )
}
