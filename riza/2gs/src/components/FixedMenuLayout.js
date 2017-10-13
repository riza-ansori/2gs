import React from 'react'
import glamorous from 'glamorous'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'


const mediaQueries = {
	deksMin: '@media only screen and (min-width: 1200px)',
	deksMin2: '@media only screen and (min-width: 120px)',
	tablet: '@media only screen and (max-width: 980px)',
	tablet2: '@media only screen and (max-width: 767px)',
	phone: '@media only screen and (max-width: 600px)',
}

const DeskDiv = glamorous.div({
    '& .ui.fixed.menu .ui.container a.item': { display: 'none' ,  alignSelf:'center' , padding:'26px 16px',  [mediaQueries.tablet]: {
        display: 'none'
      }
    },
},
    {'& .ui.fixed.menu .ui.item.dropdown': { display: 'inline-block', position: 'relative', top: '-15px', borderBottom: '0', paddingRight:'0', [mediaQueries.tablet]: {
        display: 'block',
        alignSelf:'center'
      }, 
      [mediaQueries.tablet]: {
        
      },
      [mediaQueries.phone]: {
        paddingRight:'0',
        textAlign: 'right',
        top:'-12px',
      }
    },
},
    {'& .ui.fixed.menu .ui.item.dropdown i': { margin: '0', color:'#000', [mediaQueries.phone]: {
        
      }
    },
},
    {'& .ui.inverted.pointing.secondary.top.fixed.menu': { 
        padding: '18px 5%' , backgroundColor: '#fff', border:'none',  
        [mediaQueries.phone]: {
            padding: '10px 6%'
        }
    },
},
    {'& .ui.menu .dropdown.item .menu': { left:'0', backgroundColor: 'rgba(0, 0, 0, 0.95)', position: 'fixed', right: '0', padding: '10px', margin:'0', top:'0 !important',
    borderTop:'0px', borderRadius:'0', width:'100%', height:'100%',   [mediaQueries.tablet]: {
        
      }
    },
},
    {'& .ui.fixed.menu .dropdown.item .menu a.item span.text': { color: '#fff', fontSize: '16px', lineHeight: '26px', textTransform:'uppercase', fontFamily: "'Encode Sans Semi Condensed', sans-serif", transition: 'all 0.6s ease-in-out',
    
        [mediaQueries.phone]: {
            fontSize: '15px', lineHeight: '25px',
      }
    },
},
    {'& .ui.fixed.menu .dropdown.item .menu a.item span.text:hover':{
        color:'#818181',
        transition: 'all 0.6s ease-in-out',
    }
},
    {'& .ui.secondary.pointing.menu .ui.dropdown .item': { borderBottom:'0', display: 'inline-block',   [mediaQueries.tablet]: {
        
      }
    },
},
    {'& .ui.fixed.menu .ui.container': { 
        display:'inline-block', flexDirection: 'column', textAlign: 'center', position: 'relative', left: '0', top: '45vh',
        [mediaQueries.deksMin]: {
            width:'100%'
        },
        [mediaQueries.deksMin2]: {
            width:'100% !important', margin: 'auto !important'
        },
    },    
},
    {'& .logo-text': { 
        width:'100%', fontSize:'40px', fontFamily:"'Encode Sans Semi Expanded', sans-serif", padding:'23px 25px',
        [mediaQueries.tablet2]:{
            padding:'23px 20px',
        },
    },    
},
)


const FixedMenuLayout = () =>
    
        <div>
        <DeskDiv>
            <Menu pointing secondary fixed='top' inverted>
                <Image
                            
                            width='50'
                            height='70'
                            src='/assets/images/Logo-2GS-black.png'
                            href='/'
                        /> 
                <div className='logo-text'>
                    <a href='/' className='text-logo'>
                        <i className="icon-logo-2gs-01"></i>
                    </a>
                    <style jsx>{`                            
                        @media (max-width: 600px) {
                            .logo-text .icon-logo-2gs-01 {font-size:140px; top: -31px;}
                        }
                        @media (max-width: 390px) {
                            .logo-text {visibility:hidden;}
                            .white .logo-text {visibility: visible;}
                        }
                    `}</style>
                </div>
            
                <Dropdown item icon='align justify' >
                    <Dropdown.Menu>
                    <Container>
                        <Dropdown.Item text='Portfolio' href='/portfolio' />
                        <Dropdown.Item text='Blog' href='/blog' />
                        <Dropdown.Item text='About Us' href='/about-us' />
                        <Dropdown.Item text='Contact' href='/contact' />
                    </Container>
                    </Dropdown.Menu>
                </Dropdown>
            </Menu>
        </DeskDiv>
        </div>
    

export default FixedMenuLayout