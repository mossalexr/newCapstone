import React, { Component } from 'react';
import axios from 'axios';

const Attraction = (props) => (
  <div className='text-center mt-4 mx-2 border rounded bg-light'>
    <h5>{props.attraction.name}</h5>
    <p>{props.attraction.location}</p>
    <img className='attractionsImg' src={props.attraction.imageURL} alt='otr' />
  </div>
)

export default class AttractionsList extends Component {
  constructor(props) {
    super(props);


    this.state = { attractions: [] };
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
      return <Attraction attraction={currentattraction} key={currentattraction._id} />;
    })
  }
  render() {
    return (
      <div>
        <h2 className='center mt-3'>Attractions</h2>
        <div className="container-fluid">
          <div className='d-flex flex-wrap'>
            {this.attractionList()}
          </div>
        </div>
      </div>
    )
  }
}