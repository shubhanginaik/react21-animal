import React from 'react';
import AnimalCard from './AnimalCard';
import { animals } from './animals';

const AnimalsList = () => {
    return (
        <div className="animalList">
            {animals.map((item)=>(
                <div>
                <AnimalCard key={item.name} 
                name={item.name} 
                />
                </div>
            ))}
        </div>
    );
};

export default AnimalsList;