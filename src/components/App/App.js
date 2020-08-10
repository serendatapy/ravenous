import React from "react";
import "./App.css";
import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import Yelp from "/home/serendatapy/Documents/react-playground/ravenous/src/util/Yelp"

/*
const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Flavortown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
]*/

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      businesses: [],
    };
    this.searchYelp = this.searchYelp.bind(this);
  }

  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location} ${sortBy}`);

    Yelp.search(term,location,sortBy)
    .then( businesses => {
      this.setState({businesses: businesses})
    })
    .catch(error => console.log('Gracefully Handle ERRORS:',error));
  }

  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses ={this.state.businesses}/>
      </div>
    );
  }
}



//export default App;
