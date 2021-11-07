import React, { Component } from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";

import { Switch, Route,withRouter } from "react-router-dom";
import AnimalSingle from "./AnimalSingle";

class AnimalsList extends Component {
  state = {
    searchInput: "",
  };
  searchInputHandler = (e) => {
    this.setState({
      searchInput: e.target.value,
    });
  };

  render() {
    const animalFilter = animals.filter((animal) => {
      return animal.name
        .toLowerCase()
        .includes(this.state.searchInput.toLowerCase());
    });

    const animalslisting = animalFilter.map((item) => (
      <AnimalsCard key={item.name} name={item.name} />
    ));

    return (
      <div className="animalsList">
        <Switch>
          <Route exact path={this.props.match.path}>
            <div className="inputWrapper">
            <input
             type="text"
              placeholder="search animal"
              onChange={this.searchInputHandler} 
              />
            </div>
            {animalslisting}
          </Route>
          <Route path={`${this.props.match.path}/:animal`}>
              <AnimalSingle />
          </Route>
        </Switch>
      </div>
    );
  }
}
export default  withRouter (AnimalsList);
