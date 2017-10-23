import React from 'react'
import glamorous from 'glamorous'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'

const mediaQueries = {
    phone: '@media only screen and (max-width: 768px)',
    phone1: '@media only screen and (max-width: 500px)',
}

const MenuDiv = glamorous.div({
    '& .menu-wrapper': {
        padding: '30px 0', position: 'relative', width: '100%', backgroundColor: '#000', zIndex: '1', [mediaQueries.phone]: {

        },
        [mediaQueries.phone1]: {

        }
    },
    '& .menu-wrapper .ui.inverted.pointing.secondary.top.fixed.menu': {
        position: 'relative', [mediaQueries.phone]: {

        },
        [mediaQueries.phone1]: {

        }
    },
    '& .menu-wrapper .ui.inverted.pointing.secondary.top.fixed.menu .ui.container': {
        display: 'inline-block', textAlign: 'center', [mediaQueries.phone]: {

        },
        [mediaQueries.phone1]: {

        }
    },
    '& .menu-wrapper .ui.inverted.pointing.secondary.top.fixed.menu .ui.container a.item': {
        display: 'inline-block', [mediaQueries.phone]: {

        },
        [mediaQueries.phone1]: {

        }
    },
    '& .wrapper-center-logo': {
        textAlign: 'center', marginBottom: '20px', [mediaQueries.phone]: {

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
                        width='50'
                        height='60'
                        src='/assets/images/Logo_2GS.png'
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
                </div>

                <Menu pointing secondary fixed='top' inverted>
                    <Container>
                        <Menu.Item name='about' href='/about'>About</Menu.Item>
                        <Menu.Item as='a' href='/services'>Services</Menu.Item>
                        <Menu.Item as='a' href='/portfolio' header>Portfolio</Menu.Item>
                        <Menu.Item name='contact' href='/contact'>Contact</Menu.Item>
                    </Container>
                </Menu>

            </div>
        </MenuDiv>
    </div>


export default MenuWorks