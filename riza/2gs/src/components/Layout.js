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
    w_1366: '@media screen and (max-width: 1366px)',
    w1051: '@media screen and (max-width: 1051px)',
    w1050: '@media screen and (max-width: 1050px)',
    w_981: '@media screen and (max-width: 981px)',
    w_980: '@media screen and (max-width: 980px)',
    w_920: '@media screen and (max-width: 920px)',
    h_900: '@media screen and (max-height: 900px)',
    h_800: '@media screen and (max-height: 800px)',
    h_768: '@media screen and (max-height: 768px)',
    w_768: '@media screen and (max-width: 768px)',
    hp680: '@media screen and (max-width: 680px)',
    hp600: '@media screen and (max-width: 600px)',
    hp505: '@media screen and (max-width: 505px)',
    hp500: '@media screen and (max-width: 500px)',
    hp400: '@media screen and (max-width: 400px)',
    hp337: '@media screen and (max-width: 337px)',
}

const GlobalDiv = glamorous.div({
    color: '#999',
    
    '& .white .menu-ico': {
        top: '-4px',
        width:'22px',
    },
    '& .white .menu-ico:before, & .white .menu-ico:after': {
        width:'22px',
    },
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
        fontFamily: "'Libre Franklin', sans-serif",
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
        [mediaQueries.w1050]:{
            fontSize: '65px',
            letterSpacing: '0px',
        },
        [mediaQueries.w_981]:{
            fontSize: '60px',
        },
        [mediaQueries.w_920]:{
            fontSize: '50px',
        },
        [mediaQueries.w_768]: {
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
        [mediaQueries.w_980]:{
            fontSize: '45px',
        },
        [mediaQueries.w_920]:{
            fontSize: '37px',
        },
        [mediaQueries.hp500]: {
            fontSize: '29px',
            lineHeight: '1.5',
            margin:'0',
        },
        [mediaQueries.hp337]:{
            fontSize:'26px',
            lineHeight:'36px',
            margin:'0',
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
        fontFamily: "'Libre Franklin', sans-serif",
        fontSize: '16px',
        fontWeight: '300',
        lineHeight: '2',
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
        [mediaQueries.w1500]:{
            top:'33%'
        },
        [mediaQueries.w_1366]:{
            top: '30%',
        },
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
    
    '& .ui.segment': {
        boxShadow: 'none',
        border: 'none',
        margin:'0',
    },
    '& .ui.segment.full-width':{
        width:'100%',
        padding:'0',
    },
    '& h1.black-h1.last': {
        position: 'relative',
        marginBottom: '50px',
        paddingBottom: '40px',
        [mediaQueries.hp500]:{
            marginBottom: '0',
        },
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
        [mediaQueries.w_768]: {
            left: '45%',
        },
        [mediaQueries.hp600]:{
            width:'20%',
            left: '40%',
        },
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
        fontSize:'18px',
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
        width: '88%',
        margin: 'auto',
        padding: '50px 75px',
        maxWidth:'1280px !important',
        [mediaQueries.w_768]: {
            width: '100% !Important',
            margin: '0 auto !important',
            display: 'inline-block',
        },
        [mediaQueries.hp600]:{
            padding: '50px 6%',
        }
    },
    '& div#footer-container .ui.grid': {
        [mediaQueries.w_768]:{
            width: '100%',
            margin: 'auto',
            padding: '0 20px',
        },
        [mediaQueries.hp600]:{
            padding: '0',
        },
    },
    '& #footer-container .four.column.row .column': {
        marginBottom: '60px !important',
        [mediaQueries.w_768]: {
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
        fontFamily: "'Libre Franklin', sans-serif",
        fontWeight: '100',
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
        color: '#adadad',
        fontFamily: '"Libre Franklin", sans-serif;',
        transition: 'all 0.6s ease-in-out',
        fontWeight:'200',
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
        [mediaQueries.w_768]:{
            padding: '5px',
            marginBottom: '-5px',
        },
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
        [mediaQueries.w_768]: {
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
    '& .three.column.row .column':{
        [mediaQueries.hp600]: {
            width: '100% !important',
        },
        [mediaQueries.hp400]:{
            padding: '0',
            display: 'inline-block',
            margin: 'auto',
        },
    },
    '& .rows .ui.grid': {
        [mediaQueries.hp600]:{
            display: 'inline-block',
            width: '100%',
        },
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
        bottom: '70px',
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
        fontSize: '16px',
        lineHeight: '28px',
        padding: '0px',
        color: '#adadad',
        fontFamily:'"Libre Franklin", sans-serif',
        fontWeight: '200',
    },
    '& .ui.inverted.link.list .item.desk-list.hidden':{
        [mediaQueries.w_768]:{
            display:'none',
        }
    },
    '& .ui.inverted.link.list .item.white-link.desk-list':{
        fontSize: '16px',
        lineHeight: '28px',
        fontFamily:'"Libre Franklin", sans-serif',
        fontWeight: '500',
        padding: '0px',
        color: '#adadad',
        marginBottom: '0',
    },
    '& .ui.inverted.link.list .item.grey-link.mobile-links':{
        display:'none',
        [mediaQueries.w_768]:{
            display:'block',
        }
    },
    '& .ui.inverted.link.list .item.mobile-links':{
        display:'none',
        [mediaQueries.w_768]:{
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
    '& .white-menu .black .ui.menu .ui.item.dropdown i': {
        color:'#000',
    },
    '& .white-menu .black .ui.inverted.pointing.secondary.menu':{
        backgroundColor:'#fff',
    },
    '& .white .wrapper-menu':{
        height:'80px',
        [mediaQueries.hp500]:{
            height:'75px',
        },
    },
    '& .white .logo-text': { 
        height:'44px',
        fontSize: '124px',  
    },
    
    '& .white .ui.image img, & .white .ui.image svg':{
        height:'44px',
        width:'auto',
    },
    '& .white .wrapper-menu i.icon-menu':{
        fontSize: '21px',
    },
    '& .white .ui.menu .ui.item.dropdown': {
        top:'17px',
        [mediaQueries.hp400]:{
            top:'9px',
        },
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
    '& .wrapper-menu i.icon-menu':{
        fontSize: '25px',
        [mediaQueries.hp500]:{
            fontSize:'26px',
        },
        [mediaQueries.hp400]:{
            fontSize:'25px',
        },
    },
    '& .rows':{
        width: '88%',
        margin: 'auto',
        padding:'50px 75px',
        maxWidth:'1280px',
        [mediaQueries.h_768]:{
            padding:'50px 30px',
        },
        [mediaQueries.hp500]:{
            padding:'50px 0 !important',
        },
        [mediaQueries.hp400]:{
            width: '90%',
        },
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
        color:'#000',
        display:'inline-block',
        height:'64px',
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
    '& .collumn_25' :{
        width: '25%',
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
        [mediaQueries.w_768]:{
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
        backgroundColor:'transparent',
        opacity:'0',
        transition: 'all 0.4s ease-in-out',
    },
    '& .wrapper-text-hover p': {
        position: 'absolute',
        width: '100%',
        top: '40%',
        zIndex:'1'
    },
    '& a.grid-images': {
        position: 'relative',
        display: 'inline-grid',
        overflow:'hidden'
    },
    '& .title-img': {
        color: '#fff',
        fontFamily: "'Libre Franklin', sans-serif",
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
        borderRadius : '0px'
    },
    '& .section_dark_grey svg g': {
        fill: '#fff',
    },


    '& a.ui.big.button.white-btn': {
        position:'relative',
    },
    '& a.ui.big.button.white-btn:hover': {
        paddingRight:'50px',
        paddingLeft:'20px'
    },
    '& a.ui.big.button.white-btn:before': {
        content: "''",
        position: 'absolute',
        width: '15px',
        height: '2px',
        backgroundColor: '#fff',
        right: '20px',
        top: '39.25%',
        transform: 'rotate(45deg) translate(-300%)',
        transition: 'all 0.4s ease',
        opacity:'0',
    },
    '& a.ui.big.button.white-btn:after': {
        content: "''",
        position: 'absolute',
        width: '15px',
        height: '2px',
        backgroundColor: '#fff',
        right: '20px',
        bottom: '39.25%',
        transform: 'rotate(-45deg) translate(-300%)',
        transition: 'all 0.4s ease',
        opacity:'0',
    },
    '& a.ui.big.button.white-btn:hover:before': {
        transform: 'rotate(45deg) translate(0%)',
        transition: 'all 0.6s ease',
        opacity:'1',
    },
    '& a.ui.big.button.white-btn:hover:after': {
        transform: 'rotate(-45deg) translate(0%)',
        transition: 'all 0.4s ease',
        opacity:'1',
    },
    '& a.ui.big.button.ui.big.button.white-btn.hire:hover': {
        paddingRight: '60px',
        paddingLeft: '27px',
    },
    '& a.ui.big.button.ui.big.button.white-btn.hire:before': {
        transform: 'rotate(45deg) translate(-400%)',
        transition: 'all 0.4s ease',
        opacity: '0',
        backgroundColor: '#fff',
        top: '45%',
        right: '35px',
        width: '12px',
    },
    '& a.ui.big.button.ui.big.button.white-btn.hire:after': {
        transform: 'rotate(-45deg) translate(400%)',
        transition: 'all 0.4s ease',
        opacity: '0',
        backgroundColor: '#fff',
        top: '45%',
        right: '27px',
        width: '12px',
    },
    '& a.ui.big.button.ui.big.button.white-btn.hire:hover:before':{
        transform: 'rotate(45deg) translate(0%)',
        transition: 'all 0.3s ease',
        opacity: '1',
    },
    '& a.ui.big.button.ui.big.button.white-btn.hire:hover:after':{
        transform: 'rotate(-45deg) translate(0%)',
        transition: 'all 0.4s ease',
        opacity: '1',
    },
    '& .wrapper-text-hover:after': {
        boxSizing: 'border-box',
        transition: 'all 1.3s ease',
        backgroundColor: '#080808',
        position: 'absolute',
        height: '50%',
        width: '50%',
        content: "''",
        bottom: '0',
        right: '0',
        transform: 'translate(100%, 100%)',
        opacity:'0',
        zIndex:'0'
    },
    '& .wrapper-text-hover:before': {
        boxSizing: 'border-box',
        transition: 'all 1.0s ease',
        backgroundColor: '#080808',
        position: 'absolute',
        height: '50%',
        width: '50%',
        content: "''",
        top: '0',
        left: '0',
        transform: 'translate(-100%, -100%)',
        opacity:'0',
        zIndex:'0'
    },
    '& .overlay-left-top': {
        width: '50%',
        height: '50%',
        position: 'absolute',
        backgroundColor: '#080808',
        content: "''",
        right: '0',
        top: '0',
        transform: 'translate(100%, -100%)',
        transition: 'all 0.7s ease',
        opacity:'0',
        zIndex:'0'
    },
    '& .overlay-left-bottom': {
        width: '50%',
        height: '50%',
        position: 'absolute',
        backgroundColor: '#080808',
        content: "''",
        left: '0',
        bottom: '0',
        transform: 'translate(-100%, 100%)',
        transition: 'all 0.5s ease',
        opacity:'0',
        zIndex:'0'
    },
    '& a.grid-images:hover .overlay-left-top, & a.grid-images:hover .overlay-left-bottom, & a.grid-images:hover .wrapper-text-hover:before, & a.grid-images:hover .wrapper-text-hover:after':{
        transform: 'translate(0, 0)',
        opacity: '0.8',
        zIndex:'0'
    },
    
    '& a.grid-images:hover .overlay-left-top':{
        transition: 'all 0.5s ease',
    },
    '& a.grid-images:hover .overlay-left-bottom':{
        transition: 'all 1.0s ease',
    },
    '& a.grid-images:hover .wrapper-text-hover:before':{
        transition: 'all 0.7s ease',
    },
    '& a.grid-images:hover .wrapper-text-hover:after':{
        transition: 'all 1.1s ease',
    },
    '& .gm-style-iw':{
        padding: '14px 8px',
    },
    '& .gm-style > div:nth-child(1) > div:nth-child(4) div:nth-child(4) > div div:nth-child(3)': {
        top: '21px !important',
        right: '21px !important',
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

                    <Head>
                        <title>2gs</title>
                        <meta charSet='utf-8' />
                        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
                        <meta name="theme-color" content="#000" />
                        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css"></link>
                        <script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/1.20.2/TweenMax.min.js" />
                        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/1.19.1/plugins/CSSPlugin.min.js?ver=2.6.4.2"></script>
                        <link href="https://fonts.googleapis.com/css?family=Montserrat:100,300|Encode+Sans+Semi+Expanded:200,300,400|Roboto:100,300,400,500,700|Libre+Franklin:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i|Lato:100,100i,300,300i,400,400i,700,700i" rel="stylesheet"></link>
                        <link href="https://file.myfontastic.com/ryv3z2TSMXqbmwZg2WiNpe/icons.css" rel="stylesheet"></link>
                        <link rel="stylesheet" href="animate.min.css"></link>
                    </Head>


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