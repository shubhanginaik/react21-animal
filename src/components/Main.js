import React from 'react';
import AnimalsList from './Animals/AnimalsList';
import Home from './Home';
import About from './About';
import { Switch,Route } from 'react-router';

const Main = () => {
    return (
        <main>
        <Switch>
           <Route  path="/" exact component={Home}/>
           <Route  path="/Animals" component={AnimalsList}/>
            <Route  path="/about" component={About}/>
        </Switch>
        </main>
    );
};

export default Main;