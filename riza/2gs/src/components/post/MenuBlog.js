import React from 'react';
import { render } from 'react-dom';
import MenuWorks from '../MenuWorks.js';
import BlogsDown from '../BlogsDown.js';
import * as glamor from 'glamor'
import glamorous from 'glamorous'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'

const animationStyles = props => {
	const bounce = glamor.css.keyframes({
		'0%': { transform: `scale(1.01)` },
		'100%': { transform: `scale(0.99)` }
	})
	return {animation: `${bounce} 0.2s ease-in-out alternate`}
}

const AnimatedDiv = glamorous.div(animationStyles)

const mediaQueries = {
	phone: '@media only screen and (max-width: 768px)',
    phone1: '@media only screen and (max-width: 500px)',
}

const MenuDiv = glamorous.div({
    '& .wrap-toogle-menu .menu-wrapper': { backgroundColor:'transparent',   [mediaQueries.phone]: {
        
      },
    [mediaQueries.phone1]: {
        
    }
    },
    '& .ui.inverted.pointing.secondary.top.fixed.menu': { textAlign: 'center', [mediaQueries.phone]: {
        
    },
    [mediaQueries.phone1]: {
        
    }
    },
    '& .ui.inverted.pointing.secondary.top.fixed.menu a': { color: '#fff', textDecoration:'none', padding:'0 20px', [mediaQueries.phone]: {
        
    },
    [mediaQueries.phone1]: {
        
    }
    },
})

const Scrollings = {
    top: <MenuWorks/>,
    bottom: <BlogsDown/>
}
class MenuBlog extends React.Component {
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      this.setState({ isTop: window.scrollY < 200 })
    });
  }
  render() {
    return (
        <div>
            <MenuDiv>
                <div style={{ height: '200px', position:'fixed', width: '100%', zIndex:'1' }} className="wrap-toogle-menu">
                <AnimatedDiv>
                    <div style={{ position: 'fixed', top: 0, width:'100%' }}>{this.state.isTop ? [Scrollings.top] : [Scrollings.bottom]}</div>
                </AnimatedDiv>
                </div>
            </MenuDiv>
        </div>
    );
  }
} 

export default MenuBlog;