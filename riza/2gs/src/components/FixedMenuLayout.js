import React, { Component } from 'react'
import glamorous from 'glamorous'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'
import MdMenu from 'react-icons/lib/md/menu'


const mediaQueries = {
    deksMin: '@media only screen and (min-width: 1200px)',
    deksMin2: '@media only screen and (min-width: 120px)',
    tablet: '@media only screen and (max-width: 980px)',
    tablet2: '@media only screen and (max-width: 767px)',
    phone: '@media only screen and (max-width: 600px)',
    hp500: '@media only screen and (max-width: 500px)',
    hp400: '@media only screen and (max-width: 400px)',
}

const DeskDiv = glamorous.div({
    '& .ui.menu .ui.container a.item': {
        display: 'none', alignSelf: 'center', padding: '26px 16px', [mediaQueries.tablet]: {
            display: 'none'
        }
    },
},
    {
        '& .ui.menu .ui.item.dropdown': {
            display: 'inline-block', position: 'absolute', top: '29px', right:'0', borderBottom: '0', paddingRight: '0', [mediaQueries.tablet]: {
                display: 'block',
                alignSelf: 'center'
            },
            [mediaQueries.phone]: {
                paddingRight: '0',
                textAlign: 'right',
                top: '20px',
            },
            [mediaQueries.hp400]:{
                top: '12px',
            }
        },
    },
    {
        '& .ui.menu .ui.item.dropdown i': {
            margin: '0', color: '#000', [mediaQueries.phone]: {

            }
        },
    },
    {
        '& .ui.inverted.pointing.secondary.menu': {
            backgroundColor: '#fff', border: 'none',
            
        },
    },
    {
        '& .wrapper-menu': {
            display: 'block',
            width: '88%',
            margin: 'auto',
            padding: '18px 0',
            height:'100px',
            position:'relative',
            maxWidth:'1280px',
            [mediaQueries.hp400]:{
                width:'90%',
                padding: '10px 0',
                height:'75px',
            },
        }
    },
    {
        '& .ui.menu .dropdown.item .menu': {
            left: '0', backgroundColor: 'rgba(0, 0, 0, 0.95)', position: 'fixed', right: '0', padding: '0', margin: '0', top: '0 !important',
            borderTop: '0px', borderRadius: '0', width: '100%', height: '100%', [mediaQueries.tablet]: {

            }
        },
    },
    {
        '& .ui.menu .dropdown.item .menu a.item span.text': {
            color: '#fff', fontSize: '16px', lineHeight: '26px', textTransform: 'uppercase', fontFamily: "'Encode Sans Semi Condensed', sans-serif", transition: 'all 0.6s ease-in-out',

            [mediaQueries.phone]: {
                fontSize: '15px', lineHeight: '25px',
            }
        },
    },
    {
        '& .ui.menu .dropdown.item .menu a.item span.text:hover': {
            color: '#818181',
            transition: 'all 0.6s ease-in-out',
        }
    },
    {
        '& .ui.secondary.pointing.menu .ui.dropdown .item': {
            borderBottom: '0', display: 'inline-block', [mediaQueries.tablet]: {

            }
        },
    },
    {
        '& .ui.menu .ui.container': {
            display: 'inline-block', flexDirection: 'column', textAlign: 'center', position: 'relative', left: '0', top: '45vh',
            [mediaQueries.deksMin]: {
                width: '100%'
            },
            [mediaQueries.deksMin2]: {
                width: '100% !important', margin: 'auto !important'
            },
        },
    },
    {
        '& .logo-text': {
            fontSize: '140px', fontFamily: "'Encode Sans Semi Expanded', sans-serif", padding: '0 25px', display: 'inline-block', height: '64px', verticalAlign:'middle',
            [mediaQueries.tablet2]: {
                padding: '0 20px',
            },
        },
    },
    {
        '& .text-logo i.icon-logo-2gs-01': {
            position: 'relative',
            top: '-37px',
        }
    },
    {
        '& .ui.image img, & .ui.image svg':{
            [mediaQueries.hp500]:{
                width:'40px',
                height:'auto',
            },
        },
    },

    {
        '& .menu-ico': {
            width: '25px',
            height: '2px',
            backgroundColor: '#000',
            position: 'relative',
            top: '-7px',
            transition: 'all 0.5s',
            right:'0',
        }
    },
    {
        '& .menu-ico:before': {
            width: '25px',
            height: '2px',
            backgroundColor: '#000',
            position: 'absolute',
            top: '-7px',
            content: "''",
            transition: 'all 0.5s',
            right:'0',
        }
    },
    {
        '& .menu-ico:after': {
            width: '25px',
            height: '2px',
            backgroundColor: '#000',
            position: 'absolute',
            top: '7px',
            content: "''",
            transition: 'all 0.5s',
            right:'0',
        }
    },
    {
        '& .wrapper-menu .ui.item.dropdown:hover .menu-ico':{
            transition: 'all 0.5s',
            transform:'rotate(0)',
            right:'-4000%'
        },
        '& .wrapper-menu .ui.item.dropdown:hover .menu-ico:before':{
            transition: 'all 0.5s',
            transform:'rotate(45deg) translateX(0%)',
            right:'4000%',
            width: '21px',
        },
        '& .wrapper-menu .ui.item.dropdown:hover .menu-ico:after':{
            transition: 'all 0.5s',
            transform:'rotate(-45deg) translateX(0%)',
            right:'4000%',
            width: '21px',
        },
        '& .close-btn:before': {
            content: "''",
            width: '42px',
            height: '2px',
            position: 'absolute',
            backgroundColor: '#fff',
            right: '-18px',
            top:'17px',
            transform:'rotate(45deg) translateX(0%)',
            cursor:'pointer'
        },
        '& .close-btn:after': {
            content: "''",
            width: '42px',
            height: '2px',
            position: 'absolute',
            backgroundColor: '#fff',
            right: '-18px',
            top:'17px',
            transform:'rotate(-45deg) translateX(0%)',  
            cursor:'pointer'
        },
        '& .close-btn': {
            top: '31px',
            width: '88%',
            margin: 'auto',
            padding: '0',
            height: '17px',
            position: 'relative',
            maxWidth: '1280px',
        }
    },
)

class FixedMenuLayout extends Component {
    
    render() {
        const tes = <div className='menu-ico'></div>;
        return(
    <div>
        <DeskDiv>
            <Menu pointing secondary inverted>
                <div className='wrapper-menu'>
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
                            
                            @media (max-width: 500px) {
                                .logo-text {display:none;}
                                .white .logo-text {display: none;}
                            }
                        `}</style>
                    </div>

                    <Dropdown item icon={tes} >
                        
                        <Dropdown.Menu>
                        <div className='close-btn'></div>
                            <Container>
                                <Dropdown.Item text='About' href='/about' />
                                <Dropdown.Item text='Services' href='/services' />
                                <Dropdown.Item text='Portfolio' href='/portfolio' />
                                <Dropdown.Item text='Contact' href='/contact' />
                            </Container>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </Menu>
        </DeskDiv>
    </div>
        )
    }
}

export default FixedMenuLayout