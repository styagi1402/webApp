import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';

class App extends Component {
  constructor() { 
    super()
    this.state={
      cityName: "",
      id:"",
      weatherInfo: {}
    }
     this.handleChange=this.handleChange.bind(this)
     this.componentDidMount=this.componentDidMount.bind(this)
  }
  componentDidMount(){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=87cc383ecd8741c9f9b374889345888b")
    .then(response => response.json())
            .then(data => {
              this.setState({
                weatherInfo: data
            });
            })
  } 
  handleChange (event) {
    this.setState({
      cityName: event.target.value
      
    });
  }

  render() {
    console.log(this.state.weatherInfo)
    return (
      <div className="container">
        <Header/> <br/> <br/>
        <form>
          <label>
            City Name: <br/>
          <input name="city" value={this.state.cityName} placeholder="city" onChange={this.handleChange} type="text"/>
          </label>
          
        </form>
        <p>{this.state.cityName}</p>
      </div>
    )
  }
}

export default App;
