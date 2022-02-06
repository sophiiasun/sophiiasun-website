import React, { Component } from 'react'
import '../../components/Components.css'
import ReactCardFlip from 'react-card-flip';


class FlipCard extends React.Component {
    constructor() {
      super();
        this.state = {
        isFlipped: false
      };
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(e) {
      e.preventDefault();
      this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
  
    render() {
      return (
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">
          <div id='flipCard' className='cardFront'>
            <img src={this.props.img1} onClick={this.handleClick} className='flipCardImage'></img>
          </div>
  
          <div id='flipCard' className='cardFront'>
            <img src={this.props.img2} onClick={this.handleClick} className='flipCardImage'></img>
          </div>
        </ReactCardFlip>
      )
    }
}

export default FlipCard