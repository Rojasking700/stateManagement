import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Contact from './views/Contact';
import Shop from './views/Shop';
import Cart from './views/Cart';
import ProductDetail from './views/ProductDetail';
import Blog from './views/Blog';
import BlogDetail from './views/BlogDetail';

export default class App extends Component {
  constructor() { // like __init__ but in javascript
    super(); 
    
    this.state= {
      name: "Gabriel Rojas",
      racers:[],
      contact: {},
      cart: [],
      posts: []
    }
  }

  addToCart = (product) =>{
    this.setState({
      cart:this.state.cart.concat(product)
    })

  }

  removeFromCart = (product) => {
    let newCart = [...this.state.cart]

    for (let i=0; i<newCart.length; i++){
      if (product.id === newCart[i].id){
        newCart.splice(i,1)
        break;
      }
    }
    this.setState({
      cart: newCart
    })
  }

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
  
  sumCartProducts =  aList => {
      let total = 0;
      for (let i=0; i<aList.length;i++){
          total += aList[i].price;

      }
      return total.toFixed(2);
  }

  render() {
    console.log(this.state.racers);
    return (
      <div>
        <Navbar cart={this.state.cart} sumCartProducts={this.sumCartProducts} />
       
      <main className="container">
        <Switch>
          <Route exact path="/" render={() => <Home name ={this.state.name} racers={this.state.racers} handleSubmit={this.handleSubmit}/>} /> {/* //path tells the route which one to use. its simillar to the routes in flask*/} 
          <Route exact path="/about" render={() => <About name ={this.state.name} contact={this.state.contact}/> } />
          <Route exact path="/contact" render={() => <Contact name ={this.state.name}/>} />
          <Route exact path="/shop" render={() => <Shop addToCart={this.addToCart} /> }/>
          <Route exact path='/cart' render={() => <Cart cart={this.state.cart} sumCartProducts={this.sumCartProducts} removeFromCart={this.removeFromCart} /> } />
          <Route exact path="/shop/:id" render={({ match }) => <ProductDetail match={match} addToCart={this.addToCart}/> } />
          <Route exact path="/blog" render={() => <Blog blog ={this.blog} />} />
          <Route exact path="/blog/:id" render={({ match }) => <BlogDetail match={match} /> } />
        </Switch>

      </main>
      </div>
    )
  }
}
