import React, { Component } from 'react'

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

} from 'semantic-ui-react'
import glamorous from 'glamorous'
import Scrollchor from 'react-scrollchor'
import Counter from './counter.js'

const mediaQueries = {
	pc: '@media screen and (max-width: 1024px)',
	t768: '@media screen and (max-width: 768px)',
	tablet: '@media screen and (max-width: 767px)',
	hp_680: '@media screen and (max-width: 680px)',
	hp_600: '@media screen and (max-width: 600px)',
    hp_500: '@media screen and (max-width: 500px)',
}

const MyDiv = glamorous.div(
{
    '& #container-copyright': {
        padding: '50px 0',
        backgroundColor: '#222221',
    },
    '& p.copy-right': {
        width: '88%',
        margin: 'auto',
        color: '#a09ea1',
        maxWidth: '1280px',
        padding: '0 75px',
        [mediaQueries.tablet]:{
            width:'88%',
            padding: '0 50px',
        },
        [mediaQueries.hp_600]:{
            padding:'0',
        }
    },
    '& .last, & .ui.inverted.link.list .item.white-link.desk-list.last':{
        marginTop:'15px',
        color:'#fff',
        fontWeight:'100'
    },
    '& #section-footer':{
        paddingTop:'100px !important',
        paddingBottom:'0',
        [mediaQueries.hp_500]:{
            paddingTop:'50px !important',
        },
    },
    '& #footer-container .four.column.row .column:nth-child(3)': {
        width: '20% !important',
        [mediaQueries.t768]:{
            width: '50% !important',
        },
        [mediaQueries.hp_500]:{
            marginBottom:'0 !important',
        }
    },
    '& #footer-container .four.column.row .column:nth-child(4)': {
        width: '30% !important',
        [mediaQueries.t768]:{
            width: '50% !important',
        },
        [mediaQueries.hp_500]:{
            marginBottom:'0 !important',
        }
    }
}
)
const Footer = () => (
    <MyDiv>
    <Segment inverted vertical style={{ backgroundColor:'#141515', paddingTop:'100px' }} id="section-footer">
        <Container id='footer-container'>
            <Grid>
                <Grid.Row columns={4}>
                    <Grid.Column>
                        <Image
                            
                            height='auto'
                            src='/assets/images/logo_2gs_footer.png'
                            href='/'
                            width= '85px'
                        />
                    </Grid.Column>
                    <Grid.Column>
                        <List link inverted>
                            <List.Item as='a' href='/about'>About</List.Item>
                            <List.Item as='a' href='/services'>Services</List.Item>
                            <List.Item as='a' href='/portfolio'>Portfolio</List.Item>
                            <List.Item as='a' href='/hire-us'>Hire Us</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List link inverted>
                            <List.Item as='a' href='http://www.facebook.com/2gstudio.3D'>Facebook</List.Item>
                            <List.Item as='a' href='https://twitter.com/2GStudio3D'>Instagram</List.Item>
                            <List.Item as='a' href='https://plus.google.com/u/0/b/113998195416960105797/113998195416960105797/posts/p/pub'>Twitter</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column>
                        <List link inverted>
                            <List.Item className='white-link desk-list'>PT Arc La Belle Media Graphindo</List.Item>
                            <List.Item className='grey-link desk-list hidden'><span>Alamanda Bali, 5th Floor</span><span>Jl. Bypass Ngurah Rai No.67,</span><span>Kuta Badung - Bali, Indonesia 80361</span></List.Item>
                            <List.Item className='grey-link desk-list hidden'>+62 361 2003 021</List.Item>
                            <List.Item className='grey-link desk-list hidden'>+628562888585</List.Item>
                            <List.Item className='white-link desk-list last hidden'>marketing@2gs.co</List.Item>
                            <List.Item as='a' href='tel:+62 361 2003 021' className='grey-link mobile-links'>+62 361 2003 021</List.Item>
                            <List.Item as='a' href='tel:+623612003021' className='grey-link mobile-links'>+62 361 2003 021</List.Item>
                            <List.Item as='a' href='mailto:marketing@2gs.co' className ='white-link mobile-links'>marketing@2gs.co</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
        <Menu icon='labeled' vertical className="btn-scroll-to" text>
            
                <Counter/>
        </Menu>
        <Container id='container-copyright'>
            <p className='copy-right'>&copy; {(new Date().getFullYear())}. PT Arc La Belle Media Graphindo. All Rights reserved. </p>
        </Container>
    </Segment>
    </MyDiv>
)

export default Footer;