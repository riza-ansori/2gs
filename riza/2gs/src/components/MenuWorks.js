import React from 'react'
import glamorous from 'glamorous'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'

const mediaQueries = {
	phone: '@media only screen and (max-width: 768px)',
    phone1: '@media only screen and (max-width: 500px)',
}

const MenuDiv = glamorous.div({
    '& .menu-wrapper': { padding:'30px 0', position:'relative', width:'100%', backgroundColor:'#000', zIndex:'1',   [mediaQueries.phone]: {
        
      },
    [mediaQueries.phone1]: {
        
    }
    },
    '& .menu-wrapper .ui.inverted.pointing.secondary.top.fixed.menu': { position:'relative',   [mediaQueries.phone]: {
        
      },
    [mediaQueries.phone1]: {
        
    }
    },
    '& .menu-wrapper .ui.inverted.pointing.secondary.top.fixed.menu .ui.container': { display:'inline-block', textAlign:'center', [mediaQueries.phone]: {
        
      },
    [mediaQueries.phone1]: {
        
    }
    },
    '& .menu-wrapper .ui.inverted.pointing.secondary.top.fixed.menu .ui.container a.item': { display:'inline-block',   [mediaQueries.phone]: {
        
      },
    [mediaQueries.phone1]: {
        
    }
    },
    '& .wrapper-center-logo': { textAlign:'center', marginBottom:'20px', [mediaQueries.phone]: {
        
      },
    [mediaQueries.phone1]: {
        
    }
    },
})

const MenuWorks = () =>
    
        <div>
        <MenuDiv>
            <div className='menu-wrapper'>
                <div className='wrapper-center-logo'>
                <Image
                    bordered
                    
                    width='50'
                    height='70'
                    src='/assets/images/logo_2gs.jpg'
                    href='/'
                />
                </div>
            
                <Menu pointing secondary fixed='top' inverted> 
                    <Container>
                        <Menu.Item as='a' href='/works' header>Works</Menu.Item>
                        <Menu.Item as='a' href='/blog'>Blog</Menu.Item>
                        <Menu.Item name='about us' href='/about-us'>About Us</Menu.Item>
                        <Menu.Item name='contact' href='/contact'>Contact</Menu.Item>
                    </Container>
                </Menu>
                
            </div>
        </MenuDiv>
        </div>
    

export default MenuWorks