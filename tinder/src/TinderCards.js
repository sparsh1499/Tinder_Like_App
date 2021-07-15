import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import "./TinderCards.css"

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "MS Dhoni",
            url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTvxvZd_CuQlKwgMgmMmpF7P1kI_wy-vr6KIWI7isIjx825yR5SNOEdWyLVluuXxGRJG4&usqp=CAU.jpg",
        },
        {
            name: "Shane Watson",
            url: "https://wallpapercave.com/wp/wp2690268.jpg"
        },
    ]);

    const swiped = (direction, nameToDelete) => {
        console.log("removing " + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + " left of the screen")
    };

    return (
        <div className="tinderCards">
            <div className="tinderCard-Container">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div 
                            style={{ backgroundImage: `url(${person.url})` }} 
                            className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards
