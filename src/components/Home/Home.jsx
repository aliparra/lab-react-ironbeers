import React from 'react';
import {Link} from "react-router-dom"
import "./Home.css"
import BeersImage from "../../assets/beers.png"
import RandomImage from "../../assets/random-beer.png"
import NewBeerImage from "../../assets/new-beer.png"



const Home = () => {
    return (
        
        <div className='Home'>
           
            <Link to="/beers" className='card__wrapper'>
               <div className='Card '>
                    <div class="card" style={{ width: "18rem;"}}>
                        <img src={BeersImage} class="card-img-top" alt="..."/>
                        <div class="card-body d-flex align-items-start flex-column card__text__wrapper">
                            <h2 class="card-title">All Beers</h2>
                            <p class="col-12 col-md-6 card-text text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque nesciunt aut asperiores quam. Dicta temporibus possimus obcaecati minus pariatur nisi, ipsum maiores dolor, tempore nostrum tenetur earum dolores deserunt!</p>
                        </div>
                    </div> 
                </div>
            </Link>

            
            <Link to="/random" className='card__wrapper'>
               <div className='Card '>
                    <div class="card" style={{ width: "18rem;"}}>
                        <img src={RandomImage} class="card-img-top" alt="..."/>
                        <div class="card-body d-flex align-items-start flex-column card__text__wrapper">
                            <h2 class="card-title">Random Beer</h2>
                            <p class="col-12 col-md-6 card-text text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque nesciunt aut asperiores quam. Dicta temporibus possimus obcaecati minus pariatur nisi, ipsum maiores dolor, tempore nostrum tenetur earum dolores deserunt!</p>
                        </div>
                    </div> 
                </div>
            </Link>
           

            <Link to="/new" className='card__wrapper'>
                <div className='Card '>
                    <div class="card" style={{ width: "18rem;"}}>
                        <img src={NewBeerImage} class="card-img-top" alt="..."/>
                        <div class="card-body d-flex align-items-start flex-column card__text__wrapper">
                            <h2 class="card-title">New Beer</h2>
                            <p class="col-12 col-md-6 card-text text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eaque nesciunt aut asperiores quam. Dicta temporibus possimus obcaecati minus pariatur nisi, ipsum maiores dolor, tempore nostrum tenetur earum dolores deserunt!</p>
                        </div>
                    </div> 
                </div>
            </Link>
        </div>
    );
};

export default Home;