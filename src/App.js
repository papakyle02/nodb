import React, { Component } from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      realm: '',
      class: '',
      level: '',
      image: '',
      favorites: [],
    }
  }

componentDidMount() {
  axios.get('/favorites').then( res => {
    console.log('favorites', res.data)
    this.setState({
      favorites: res.data
    })
  })
}

getName (val) {
  this.setState({
    name: val
  })
}
getRealm (val) {
  this.setState({
    realm: val
  })
}

addChar () {
  axios.post('/addcharacter', {
    name: this.state.name,
    realm: this.state.realm,
    level: this.state.level
  }).then(res => {
    this.setState({
      favorites: res.data
    })
  })
}

retrieveChar () {
  axios.get(`https://us.api.battle.net/wow/character/${this.state.realm}/${this.state.name}?locale=en_US&apikey=3jmvxjvenkhqra94zsywa8gtfwrg6fqm`).then(res => {
  // axios.get('/favorites').then(res => { 
  console.log('res.data',res.data)
  this.setState({
      class: res.data.class,
      level: res.data.level,
      image: `https://render-us.worldofwarcraft.com/character/${res.data.thumbnail}?alt=/forums/static/images/avatars/wow/1-0.jpg`
    })
    console.log('this.state.level',this.state.level)
  })
}


render() {
const favs = this.state.favorites.map(e => {
  return <div className="favorites">
    <div>{e.name}</div>
    <div>{e.realm}</div>
    <div>{e.level}</div>
  </div>
})
    return (
      <div className="App">
      <div className="query">
      <input placeholder="Character Name" onChange={e => this.getName(e.target.value)}/>
      <input placeholder="Realm" onChange={e => this.getRealm(e.target.value)}/>
      <button onClick={() => this.retrieveChar()}>Submit</button>
      <button onClick={() => this.addChar()}>Add Favorite</button>
      </div>
      <div className="character-render">
      <img src={this.state.image}/>
      </div>
      <div className="character-info">
      {this.state.name}{this.state.realm}{this.state.class}{this.state.level}
      </div>
      <h1>Favorites</h1>
      <div>
        {favs}
      </div>
      </div>
    );
  }
}
export default App;
