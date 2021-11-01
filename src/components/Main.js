import React from 'react';
import AnimalsList from './Animals/AnimalsList';
import Home from './Home';
import About from './About';
import { Switch,Route } from 'react-router';

const Main = () => {
    return (
        <Switch>
           <Route  path="/" exact component={Home}/>
           <Route  path="/Animals" exact component={AnimalsList}/>
            <Route  path="/about" exact component={About}/>
        </Switch>
    );
};

export default Main;