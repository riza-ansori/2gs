import React, { Component } from 'react'
import Scrollchor from 'react-scrollchor';
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
} from 'semantic-ui-react';


class Counter extends React.Component {
  constructor(props) {
      super(props);
      this.state = this.getState(); // set state from getState result
      this.onButtonClick = this.onButtonClick.bind(this);
      this.onReset = this.onReset.bind(this);
  }

  getState() {
      return {
          number: 1
      }
  }
  
  onReset() {
      this.setState(this.getState()) // set state from getState result
  }
  
  onButtonClick () {
      this.setState({
          number: this.state.number + 1
      });
  }
  
  render () {
    const jos = "next-section" + this.state.number;
      return (
      <div>  
        
        <Scrollchor to={jos} className="nav-link next" ><Icon name='angle down' onClick={this.onButtonClick} /></Scrollchor>
      </div>
      );
    }
};

  
  export default class ResponsiveGallery extends Component {
    render () {
        return (
            <Counter />
        );
    }
  }

