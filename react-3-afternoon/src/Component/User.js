import React, { Component } from 'react';
import data from '../data';

export default class User extends Component {
  constructor(){
    super();

    this.state = {
      data: data,
      index: 0,
      // userInformation: {
      //   id: id, 
      //   name: name, 
      //   city: city,
      //   country: country,
      //   employer: employer,
      //   title: title,
      //   favoriteMovies: favoriteMovies,
      // }
    } 
  } 
    next (){
      
      if (this.state.index < this.state.data.length -1){
        this.setState({index: this.state.index +1})
      }
    }

    previous(){
      if (this.state.index > 0){
       this.setState({index: this.state.index -1}) 
      }
    }

    // handleChange(val) {
    //   this.setState({userInformation: val});
    // }

    // filterUser(userInformation){
    //   let data = this.state.data;
    //   let filteredUser = [];

    //   for(let i = 0; i < data.length; i++){
    //     if (data[i].includes(userInformation)){
    //       filteredUser.push(data[i]);
    //     }
    //   }
      
    //   this.setState({filteredUser: filteredUser})

    // }
    render(){
      console.log(this.state)
      return(
        <div> 
          <div className="displayBox"> 
            <h1>
            {this.state.data[this.state.index].name.first} {this.state.data[this.state.index].name.last} 
            </h1>
             <p>
               From: {this.state.data[this.state.index].city}, {this.state.data[this.state.index].country}
              </p> 
              <p>
                Job Title: {this.state.data[this.state.index].title}
              </p>
              <p> 
                Employer: {this.state.data[this.state.index].employer}
              </p>
              <br/>
              <p>
                Favorite Movies: 
              </p>
              <ol>{this.state.data[this.state.index].favoriteMovies.map(e => {
                return <li>{e}</li>
              } )}</ol>
          </div>
       
           <button onClick={() => this.previous()}>Previous</button>
           <button onClick={()=> this.next()}>Next</button>
           
        </div>
      )
    }  
  }
