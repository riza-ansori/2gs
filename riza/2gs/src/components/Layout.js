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
    Loader,
    Dimmer
} from 'semantic-ui-react';
import BlogsDown from './BlogsDown'
import Footer from './Footer'
import glamorous from 'glamorous'

import Head from 'next/head'


const mediaQueries = {
    h_900: '@media screen and (max-height: 900px)',
    h_800: '@media screen and (max-height: 800px)',
    h_768: '@media screen and (max-height: 768px)',
    tablet: '@media screen and (max-width: 767px)',
    hp680: '@media screen and (max-width: 680px)',
    hp600: '@media screen and (max-width: 600px)',
    hp505: '@media screen and (max-width: 505px)',
}

const GlobalDiv = glamorous.div({
    color: '#999',
    '& .ui.huge.primary.button':
    {
        color: 'red', fontSize: '2em',
        [mediaQueries.phone]: {
            fontSize: '30px',
            backgroundColor: '#CC3A4B',
            color: 'white'
        }
    },
    '& .ui.segment':{
        borderRadius:'0',
    },
    '& p': {
        fontFamily: 'proxima-nova, sans-serif',
    },
    '& h1.header-text': {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: '100',
        fontSize: '69px',
        color: '#000',
        letterSpacing: '0.4px',
        
        maxWidth:'1024px',
        marginLeft:'auto',
        marginRight:'auto',
        [mediaQueries.tablet]: {
            fontSize: '45px',
            margin: '0',
            lineHeight: '55px',
        },
        
    },
    '& h1': {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: '100',
        fontSize: '48px',
        lineHeight: '1.31',
        color: '#575757',
        [mediaQueries.hp505]:{
            fontSize:'37px',
        },
    },
    '& h2': {
        fontFamily: "'Roboto', sans-serif",
        fontWeight: '100',
        fontSize: '30px',
        color: '#575757',
    },
    '& h3': {
        fontFamily: "'Roboto', sans-serif",
        
        color: '#575757',
        [mediaQueries.hp505]:{
            fontSize:'20px',
        },
    },
    '& p': {
        fontFamily: 'proxima-nova, sans-serif',
        fontSize: '18px',
        fontWeight: '300',
        lineHeight: '1.56',
        [mediaQueries.hp505]:{
            fontSize:'14px',
        },
    },
    '& .center':{
        textAlign:'center',
    },
    '& .left':{
        textAlign:'left',
    },
    '& .right':{
        textAlign:'right',
    },
    '& .container-header-text': {
        position: 'absolute',
        top: '40%',
        width: '100%',
        padding: '0',
        [mediaQueries.tablet]: {
            padding: '0 6%',
        }
    },
    '& .btn-scroll-to.menu .item a.nav-link': {
        display: 'inline-block',
        width: '70px',
        height: '70px',
        background: '#fff',
        borderRadius: '100%',
        color: '#000',
        position: 'relative',
        boxShadow: '0px 2px 1px #ddd',
        transition: 'all 0.4s ease-in-out',
    },
    '& .ui.text.vertical.labeled.icon.btn-scroll-to.menu': {
        marginTop: '0',
        position: 'relative',
        right: '0',
        bottom: '0',
        zIndex: '1',
        width: '100%',
    },
    '& .btn-scroll-to.menu .item a.nav-link i': {
        position: 'absolute',
        top: '17px',
        left: '17px',
        fontSize: '30px',
        color: '#666',
        transition: 'all 0.4s ease-in-out',
    },
    '& .logo-text .icon-logo-2gs-01': {
        fontSize: '150px',
        position: 'absolute',
        top: '-27px',
        transition: 'all 0.5s ease-in-out',
    },
    '& .white .logo-text .icon-logo-2gs-01':{
        fontSize: '145px',
        top: '-27px',
        transition: 'all 0.5s ease-in-out',
    },
    '& .ui.segment': {
        boxShadow: 'none',
        border: 'none',
        margin:'0',
    },
    '& h1.black-h1.last': {
        position: 'relative',
        marginBottom: '50px',
        paddingBottom: '40px',
    },
    '& h1.black-h1#color-black': {
        color:'#000',

    },
    '& h1.black-h1.last:after': {
        position: 'absolute',
        content: "''",
        width: '60px',
        height: '2px',
        backgroundColor: '#999',
        bottom: '0',
        left: '47%',
        [mediaQueries.tablet]: {
            left: '45%',
        }
    },
    '& .black-section h1.black-h1.last:after': {
        backgroundColor: '#fff',
    },
    '& .grey-section': {
        backgroundColor: '#000'
    },
    '& .grey-section h1.black-h1.last': {
        color: '#ccc'
    },
    '& .black-icons': {
        fontSize: '25px',
        width: '70px',
        height: '70px',
        margin: 'auto',
        background: 'transparent',
        color: '#000',
        position: 'relative',
        borderRadius: '100%',
    },
    '& .black-section': {
        display: 'block',
        backgroundColor: '#000',
        padding: '50px 0',
    },
    '& .black-section .section-home': {
        background: 'transparent',
    },
    '& .section_black .black-h1': {
        color: '#fff',
    },
    '& .black-h1': {
        color: '#ccc',
    },
    '& .ui.big.button.white-btn': {
        margin: '40px 0 50px',
        borderRadius: '0',
        fontFamily: "'Roboto', sans-serif",
        fontWeight: '300',
        color: '#000',
        padding: '20px 40px',
        transition: 'all 0.4s ease-in-out',
        backgroundColor: '#fff',
        fontSize:'16px',
        letterSpacing: '0.5px',
        [mediaQueries.hp505]:{
            fontSize:'15px',
        },
    },
    '& .ui.big.button.white-btn:hover': {
        color: '#fff',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        transition: 'all 0.4s ease-in-out',
    },
    '& .ui.big.button.white-btn.this-black': {
        backgroundColor: '#000',
        color: '#fff',
    },
    '& .ui.big.button.white-btn.this-black:hover': {
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        transition: 'all 0.4s ease-in-out',
    },
    '& .grey-section': {
        padding: '50px 0',
        background: '#000',
    },
    '& .grey-section .ui.segment.section-home': {
        backgroundColor: 'transparent',
    },
    '& div#footer-container': {
        width: '80%',
        margin: 'auto',
        padding: '50px 0',
        [mediaQueries.tablet]: {
            width: '100% !Important',
            margin: '0 auto !important',
            display: 'inline-block',
        }
    },
    '& div#footer-container .ui.grid': {
        [mediaQueries.tablet]:{
            width: '88%',
            margin: 'auto',
        },
    },
    '& #footer-container .four.column.row .column': {
        marginBottom: '60px !important',
        [mediaQueries.tablet]: {
            width: '50% !important',
            padding: '15px 0',
        },
        [mediaQueries.hp505]:{
            width: '100% !important',
        }
    },
    '& #footer-container a.ui.image': {
        width: '100%',
        textAlign: 'left',
        opacity:'0.4',
        display:'block'
    },
    '& #footer-container a.ui.image img': {
        width:'auto',
        height:'90px',

    },
    '& #footer-container .logo-footer-text': {
        display: 'inline-block',
        fontFamily: "'Encode Sans Semi Expanded', sans-serif",
        opacity: '0.4',
        width: '100px',
        textAlign: 'center'
    },
    '& #footer-container a.item': {
        color: '#fff',
        fontSize: '16px',
        lineHeight: '1.56',
        padding: '0',
        fontFamily: 'proxima-nova, sans-serif',
        fontWeight: '300',
        transition: 'all 0.6s ease-in-out',
        [mediaQueries.hp505]:{
            fontSize:'15px',
        }
    },
    '& #footer-container a.item:hover': {
        color: '#555',
        transition: 'all 0.6s ease-in-out'
    },
    '& #footer-container a.item.grey-link': {
        color: '#555',
        transition: 'all 0.6s ease-in-out'
    },
    '& #footer-container a.item.grey-link:hover': {
        color: '#fff',
        transition: 'all 0.6s ease-in-out'
    },
    '& #footer-container span': {
        display: 'block',
    },
    '& .grid-item.gallery-2gs img.gallery-img': {
        width: '100%',
        maxWidth: 'none !important',
    },
    '& .content.container .grid-item.gallery-2gs': {
        padding: '15px',
    },
    '& .btn-scroll-to.menu a.nav-link.next:hover': {
        background: '#353434',
        color: '#000',
        transition: 'all 0.4s ease-in-out',
    },
    '& .btn-scroll-to.menu a.nav-link.next:hover i': {
        color: 'rgb(0,0,0)',
        transition: 'all 0.4s ease-in-out',
    },
    '& .grid-item.gallery-2gs': {
        cursor: 'pointer',
    },
    '& #section-footer': {
        height: 'auto',
        [mediaQueries.tablet]: {
            marginTop: '-1px',
            padding:'0',
        }
    },
    '& .ui.three.grid-wrapper-icon .row': {
        [mediaQueries.hp600]: {
            padding: '0',
        }
    },
    '& .ui.three.grid-wrapper-icon .row .column': {
        [mediaQueries.hp600]: {
            width: '100%',
            paddingBottom: '15px',
        }
    },
    '& .ui.grid.grid-wrapper-icon .row:last-child .column:last-child': {
        [mediaQueries.hp600]: {
            paddingBottom: '0',
        }
    },
    '& a.nav-link i': {
        margin: '0',
    },
    '& a.nav-link.next': {
        width: '50px',
        height: '50px',
        background: '#ddd',
        borderRadius: '100%',
        position: 'fixed',
        top: '63%',
        right: '5%',
        padding: '15px 10px',
        fontSize: '23px',
        color: '#000',
        [mediaQueries.h_900]:{
            top:'76%'
        },
        [mediaQueries.h_800]:{
            top:'85%'
        },
        [mediaQueries.h_768]:{
            top:'89%'
        },
    },
    '& .ui.inverted.link.list .item.desk-list':{
        fontSize: '18px',
        lineHeight: '28px',
        padding: '0px',
        color: '#555',
        [mediaQueries.tablet]:{
            display:'none',
        }
    },
    '& .ui.inverted.link.list .item.white-link.desk-list':{
        fontSize: '18px',
        lineHeight: '28px',
        padding: '0px',
        color: '#adadad',
        marginBottom: '0',
    },
    '& .ui.inverted.link.list .item.grey-link.mobile-links':{
        display:'none',
        [mediaQueries.tablet]:{
            display:'block',
        }
    },
    '& .ui.inverted.link.list .item.mobile-links':{
        display:'none',
        [mediaQueries.tablet]:{
            display:'block',
        }
    },
    '& .ui.segment.section-home.black-section .ui.grid .three.column.row .column': {
        [mediaQueries.hp600]: {
            width: '100% !important',
            marginBottom: '60px'
        }
    },
    '& .ui.segment.section-home.black-section .ui.grid .three.column.row .column:last-child': {
        [mediaQueries.hp600]: {
            marginBottom: '0'
        }
    },
    '& .gm-style .gmnoprint':{
        opacity:'0',
    },
    '& p.gmaps-info': {
        fontSize: '14px',
        lineHeight: '20px',
        margin: '0',
    },
    '& p.gmaps-info.first': {
        margin: '0 0 10px',
    },
    '& .gmaps-info i': {
        marginRight: '12px',
    },
    '& .white .logo-text a': { 
        color:'#000'
    },
    '& .white-menu .black .ui.image img': {
        filter: 'invert(0)',
    },
    '& .white-menu .black .logo-text a': {
        color:'#000',
    },
    '& .white-menu .black .ui.fixed.menu .ui.item.dropdown i': {
        color:'#000',
    },
    '& .white-menu .black .ui.inverted.pointing.secondary.top.fixed.menu':{
        backgroundColor:'#fff',
    },
    '& .gm-style img.gm-fullscreen-control': {
        display:'none',
    },
    '& .gm-style .gm-style-cc': {
        display:'none',
    },
    '& .section-form ul.steps-navigator':{
        display:'none',
    },
    '& .sections':{
        padding:'70px 0',
    },
    '& .rows':{
        width: '80%',
        margin: 'auto',
        padding:'50px 0',
        maxWidth:'1024px',
    },
    '& .column_left' :{
        paddingRight:'70px',
        verticalAlign:'middle',
        [mediaQueries.hp680]:{
            paddingRight:'0',
            marginBottom:'50px',
        },
    },
    '& .column_right' :{
        paddingLeft:'2.5%',
        verticalAlign:'middle',
        [mediaQueries.hp680]:{
            paddingRight:'0',
        },
    },
    '& .section_black':{
        backgroundColor:'#000',
    },
    '& .text-logo':{
        color:'#000'
    },
    '& .section_dark_grey': {
        backgroundColor: '#333',
    },
    '& .section_light_grey':{
        backgroundColor:'#eeeeee',
    },
    '& .section_item_center':{
        textAlign:'center',
    },
    '& .collumn_10' :{
        width: '10%',
        display: 'inline-block',
        [mediaQueries.hp680]:{
            width:'100%',
        },
    },
    '& .collumn_20' :{
        width: '20%',
        display: 'inline-block',
        [mediaQueries.hp680]:{
            width:'100%',
        },
    },
    '& .collumn_30' :{
        width: '30%',
        display: 'inline-block',
        [mediaQueries.hp680]:{
            width:'100%',
        },
    },
    '& .collumn_33' :{
        width: '33.33%',
        display: 'inline-block',
        [mediaQueries.hp680]:{
            width:'100%',
        },
    },
    '& .collumn_40' :{
        width: '40%',
        display: 'inline-block',
        [mediaQueries.hp680]:{
            width:'100%',
        },
    },
    '& .collumn_50' :{
        width: '50%',
        display: 'inline-block',
        [mediaQueries.hp680]:{
            width:'100%',
        },
    },
    '& .collumn_60' :{
        width: '60%',
        display: 'inline-block',
        [mediaQueries.hp680]:{
            width:'100%',
        },
    },
    '& .collumn_70' :{
        width: '70%',
        display: 'inline-block',
        [mediaQueries.hp680]:{
            width:'100%',
        },
    },
    '& .collumn_80' :{
        width: '80%',
        display: 'inline-block',
        [mediaQueries.hp680]:{
            width:'100%',
        },
    },
    '& .ui.container': {
        width:'100%',
        [mediaQueries.tablet]:{
            width:'100% !important',
            margin:'auto !important'
        }
    },
    '& .icon-size-medium':{
        fontSize:'50px',
        color:'#fff',
    },
    '& .icon-size-big':{
        fontSize:'280px',
        color:'#fff',
    },
    '& a.grid-images:hover .wrapper-text-hover':{
        opacity:'1',
        transition: 'all 0.4s ease-in-out',
    },
    '& .wrapper-text-hover': {
        position: 'absolute',
        left: '0',
        top: '0',
        width: '100%',
        height:'100%',
        backgroundColor:'rgba(0,0,0,0.8)',
        opacity:'0',
        transition: 'all 0.4s ease-in-out',
    },
    '& .wrapper-text-hover p': {
        position: 'absolute',
        width: '100%',
        top: '40%',
    },
    '& a.grid-images': {
        position: 'relative',
        display: 'inline-grid',
    },
    '& .title-img': {
        color: '#fff',
        fontFamily: 'proxima-nova, sans-serif',
        fontSize: '24px',
        lineHeight: '0.58',
        fontWeight:'300',
    },
    '& .wrapper-text-hover span': {
        color: '#fff',
        textTransform: 'uppercase',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '12px',
        letterSpacing: '2px',
    },
    '& .wrapper-tabmenu .ui.text.menu .item': {
        letterSpacing: '1px',
    },
    '& .section_black svg g': {
        fill: '#fff',
    },
    '& .section_dark_grey svg g': {
        fill: '#fff',
    },

})


class Layout extends Component {

    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        const { loading } = this.state
        setTimeout(() => this.setState({ loading: false }), 500);
    }

    render() {
        const {  loading } = this.state

        return (

            <GlobalDiv className="GlobalDiv">

                <div>
                    <Head>
                        <title>2gs</title>
                        <meta charSet='utf-8' />
                        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                        <meta name="theme-color" content="#000" />
                        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
                        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TimelineMax.min.js" />
                        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js" />
                        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/plugins/CSSPlugin.min.js?ver=2.6.4.2"></script>
                        
                        <link href="https://fonts.googleapis.com/css?family=Droid+Sans|Open+Sans:300,400,600,700,800|Encode+Sans+Semi+Expanded:200,300,400|Roboto:100,300,400,500,700" rel="stylesheet"></link>
                        <link href="https://file.myfontastic.com/ryv3z2TSMXqbmwZg2WiNpe/icons.css" rel="stylesheet"></link>
                    </Head>
                </div>


                {loading &&
                    <Grid
                        textAlign='center'
                        verticalAlign='middle'
                    >
                        <Grid.Column style={{ maxWidth: 450, marginTop:'20%' }}>
                            <Loader active size="big" inline='centered'  />
                        </Grid.Column>
                    </Grid>
                }

                {!loading &&
                    <div>
                        <BlogsDown />
                        {this.props.children}
                        <Footer />
                    </div>
                }

            </GlobalDiv>
            
        )
    }
}

export default Layout;