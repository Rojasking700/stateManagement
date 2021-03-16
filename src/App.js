import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';

export default class App extends Component {
  constructor() { // like __init__ but in javascript
    super(); 
    
    this.state= {
      name: "Gabriel Rojas",
      racers:[],
      contact: {
        // firstName: "Gabriel",
        // lastName: "rojas",
        // address: "123 main st",
        // phoneNum: "0123456789",
        // email: "email@domain.com"
      }
    }
  }
  // this.setState({
  //   conyact: {
  //   firstName: "Gabriel",
  //   lastName: "rojas",
  //   address: "123 main st",
  //   phoneNum: "0123456789",
  //   email: "email@domain.com"
  //   }
  // })

  handleSubmit = (e) => {
    e.preventDefault();
    let year = e.target.year.value;
    let season = e.target.season.value;
      fetch(`https://ergast.com/api/f1/${year}/${season}/driverStandings.json`)
      .then(res => res.json())
      .then(data => {
          console.log(data);
          this.setState({
              racers: data.MRData.StandingsTable.StandingsLists[0].DriverStandings
          })
      })
      .catch(error => console.log(error));
  }
  

  render() {
    console.log(this.state.racers);
    return (
      <div>
        <Navbar />
       
      <main className="container">
        <Switch>
          <Route exact path="/" render={() => <Home name ={this.state.name} racers={this.state.racers} handleSubmit={this.handleSubmit}/>} /> {/* //path tells the route which one to use. its simillar to the routes in flask*/} 
          <Route path="/about" render={() => <About name ={this.state.name} contact={this.state.contact}/> } />
          <Route path="/contact" render={() => <Contact name ={this.state.name}/>} />
        </Switch>

      </main>
      </div>
    )
  }
}
