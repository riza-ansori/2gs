import React from 'react';
import { render } from 'react-dom';
import FixedMenuLayout from './FixedMenuLayout.js';
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'

const mediaQueries = {
	deksMin: '@media only screen and (min-width: 1200px)',
	deksMin2: '@media only screen and (min-width: 120px)',
	tablet: '@media only screen and (max-width: 980px)',
	tablet2: '@media only screen and (max-width: 767px)',
}

const DeskDiv = glamorous.div(

)

const Scrollings = {
    top: <div className="black" key="black"><FixedMenuLayout/></div>,
    bottom: <div className="white" key="white"><FixedMenuLayout/></div>
}
class BlogsDown extends React.Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY < 100 })
    });
  }
  
  render() {
    return (
        <div id='josss'>
                <div style={{ position:'fixed', width: '100%', zIndex:'99' }} className="wrap-toogle-menu">
                    <div style={{ position: 'fixed', top: 0, width:'100%' }}>{this.state.isTop ? [Scrollings.top] : [Scrollings.bottom]}</div>
                </div>
        </div>
    );
  }
} 

export default BlogsDown;