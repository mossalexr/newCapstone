import React, { Component } from 'react'; 
import axios from 'axios';

const Attraction = props => (
    <div>
      <h3>{props.attraction.name}</h3>
      <h4>{props.attraction.location}</h4>
      <div>{props.attraction.imageURL}</div>
    </div>
  )

export default class AttractionsList extends Component {
    constructor(props) {  
        super(props); 
        
        this.deleteAttraction = this.deleteAttraction.bind(this); 
        
        this.state = {attractions: []};  
      }
      componentDidMount() {
        axios.get('http://localhost:5000/attractions/')
         .then(response => {
           this.setState({ attractions: response.data });
         })
         .catch((error) => {
            console.log(error);
         })
      }
    
attractionList() {
    return this.state.attractions.map(currentattraction => {
      return <Attraction attraction={currentattraction} deleteAttraction={this.deleteAttraction} key={currentattraction._id}/>;
    })
  }
  render() {
    return (
        <div>
        <h3>Logged Attractions</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.attractionList() }
          </tbody>
        </table>
      </div>
    )
  }
}