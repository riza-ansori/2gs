import Layout from '../src/components/Layout'
import glamorous from 'glamorous'
import { SvgHeader } from '../src/components/3d-render.svg'
import { Quality } from '../src/components/img/quality.svg'
import { Tes } from '../src/components/img/quality.svg'
import { Lock } from '../src/components/img/lock.svg'
import { Worry } from '../src/components/img/worry.svg'
import { Dolar } from '../src/components/img/dolars.svg'
import { Responsif } from '../src/components/img/responsive.svg'
import { Render } from '../src/components/img/render.svg'
import { Img } from '../static/assets/images/svg/img.svg'
import { Animation } from '../static/assets/images/svg/animation.svg'
import { Vr } from '../static/assets/images/svg/VR.svg'
import GSAP from 'react-gsap-enhancer';

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

import TabExampleText from '../src/components/tab/tabPortfolio.js'
import Scrollchor from 'react-scrollchor';
import Counter from '../src/components/counter.js'

const mediaQueries = {
    pc1366: '@media screen and (max-width: 1366px)',
    pc1300: '@media screen and (max-width: 1300px)',
    pc1280: '@media screen and (max-width: 1280px)',
    pc1050: '@media screen and (max-width: 1050px)',
    pc: '@media screen and (max-width: 1024px)',
    tablet: '@media screen and (max-width: 767px)',
    hp680: '@media screen and (max-width: 680px)',
    hp600: '@media screen and (max-width: 600px)',
    hp505: '@media screen and (max-width: 505px)',
    hp500: '@media screen and (max-width: 500px)',
}

const MyDiv = glamorous.div(
    {'& .black .ui.inverted.pointing.secondary.menu':{
            backgroundColor:'transparent',
        }
    },
    { '& .ui.inverted.segment': {
        background: 'transparent',
        padding: '0 !important',
        maxHeight: '1024px',
        overflow: 'hidden'
    },
    '& .ui.segment': {
        borderRadius: '0',
    },
    '& .ui.inverted.aligned.segment .ui.container#header-wrapper:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.66)',
        left: '0',
        top: '0',
        zIndex: '0',
    },
    '& #home .sections': {
        paddingBottom: '100px',
        [mediaQueries.hp500]:{
            paddingBottom: '50px',
        },
    },
    '& #home .black .ui.inverted.pointing.secondary.menu': {
        background: 'transparent',
    },
    '& #home .black .ui.inverted.pointing.secondary.menu img': {
        filter: 'invert(100%)',
    },
    '& #home .black .ui.inverted.pointing.secondary.menu i.icon-logo-2gs-01': {
        color: '#fff',
    },
    '& #home .black .ui.inverted.pointing.secondary.ui.menu .ui.item.dropdown i': {
        color: '#fff',
    },
    '& #section-portfolio': {
        textAlign: 'center',
    },
    '& #section-portfolio .ui.text.menu': {
        display: 'inline-block',
        marginTop: '40px',
        [mediaQueries.tablet]: {
            width: '88%',
        },
    },
    '& #section-portfolio .ui.text.menu a.item': {
        display: 'inline-block',
        padding: '10px',
        transition: 'all 0.4s ease-in-out',
        fontFamily: "'Roboto', sans-serif",
        fontSize: '12px',
        lineHeight: '2',
        letterSpacing: '2px',
        color: '#878787',
        textTransform: 'uppercase',
        [mediaQueries.hp600]: {
            fontSize: '14px',
            lineHeight: '24px',
        }
    },
    '& #section-portfolio .ui.text.menu a.item.active': {
        borderBottom: '1px solid #bbb',
        transition: 'all 0.4s ease-in-out',
        color: '#333',
    },
    '& #section-portfolio .ui.text.menu a.item:hover': {
        transition: 'all 0.4s ease-in-out',
        color: '#333',
    },
    '& #section-portfolio .ui.segment.active.tab': {
        padding: '0',
    },
    '& #section-portfolio .ui.segment.active.tab .content > div > div > div:first-child .grid-item.gallery-2gs': {
        paddingLeft: '0',
    },
    '& #section-portfolio .ui.segment.active.tab .content > div > div > div:last-child .grid-item.gallery-2gs': {
        paddingRight: '0',
    },
    '& .rows .column': {
        marginBottom: '100px',
        [mediaQueries.hp500]:{
            marginBottom: '70px',
        },
    },
    '& #home .ui.grid>.row': {
        padding: '0',
    },
    '& #home .ui.grid>.row>.column': {
        marginBottom: '100px',
        [mediaQueries.hp500]:{
            marginBottom: '70px',
        },
    },
    '& .three.column': {
        marginBottom: '0 !important',
    },
    '& h3.h3': {
        fontSize: '16px',
        letterSpacing: '1.3px',
        fontWeight: '400',
        color: '#424242',
    },
    '& h3.h3.white': {
        color: '#fff'
    },
    '& h1.header-text': {
        color: '#fff !important',
    },
    '& #services-row p': {
        color: '#777',
    },
    '& .section_black p': {
        color: '#bbb',
        lineHeight: '1.56',
        wordSpacing:'6px',
        letterSpacing:'1px',
        [mediaQueries.pc1366]:{
            wordSpacing:'2px',
        },
    },
    '& .section_black .rows.white-icon .three.column.row .column:last-child p': {
        wordSpacing:'0',
        letterSpacing:'0',
        [mediaQueries.pc1300]:{
        },
    },
    '& .black-icons svg': {
        width: '32px',
    },
    '& .white-icon .column svg': {
        width: '36px',
    },
    '& .white-icon .column svg g': {
        fill: '#fff',
    },
    '& .white .text-logo i.icon-logo-2gs-01':{
        top: '-40px',
    },
    '& a.grid-images':{
        overflow:'hidden',
    },
    '& #home .black .menu-ico, & #home .black .menu-ico:before, & #home .black .menu-ico:after': {
        backgroundColor:'#fff'
    },
}, )

function createRevealAnim({ target }) {
    let svgmatches = document.body.querySelectorAll('#SvgHeader image:not(.background)');

    let randomSvgMatchers = Object.keys(svgmatches).map((k) => svgmatches[k]).sort(() => Math.random() * 2 - 1);

    return new TimelineMax({ repeat: -1, yoyo: true, delay:2, repeatDelay:2 })
        .staggerFrom(randomSvgMatchers, .4, { css: { autoAlpha: 0, transformOrigin: "center center", scale: .9 }, ease: Back.easeOut }, 0.05)
}

class Index extends React.Component {

    componentDidMount() {
        setTimeout(() =>
            this.addAnimation(createRevealAnim), 1000);
    }

    render() {
        return (
            <MyDiv>
                <div id="home">
                    <Layout>
                        <Segment
                            inverted
                            textAlign='center'
                            style={{ padding: '0' }}
                            vertical
                            id="top-section"
                        >
                            <Container id='header-wrapper' >
                                <SvgHeader id="SvgHeader" />
                                <div className="container-header-text">
                                    <h1 className='header-text left'>Your works are no good if</h1>
                                    <h1 className='header-text left'>not rendered properly, in</h1>
                                    <h1 className='header-text left'>3D.</h1>
                                </div>
                                <style jsx>{`
                                h1.header-text{
                                    width: 88%;
                                    max-width: 1280px;
                                    padding: 0px 75px;
                                }
                                @media (max-width:1050px) {
                                    .container-header-text{top:33%}
                                }
                                @media (max-width: 768px) {
                                    h1.header-text{
                                        margin: auto;
                                        padding: 0px 70px;
                                    }
                                }
                                @media (max-width: 600px) {
                                    h1.header-text{
                                        margin: auto;
                                        padding: 0px;
                                    }
                                }
                                @media (max-width: 505px) {
                                    h1.header-text {font-size:40px; line-height:50px}
                                }
                                @media (max-width: 499px) {
                                    h1.header-text {font-size:35px; line-height:45px}
                                }
                                @media (max-width: 400px) {
                                    h1.header-text { 
                                        width: 90%;
                                        padding: 0;
                                        margin: auto;
                                        letter-spacing: -1px;
                                    }
                                }
                                @media (max-width: 393px) {
                                    h1.header-text {font-size:30px; line-height:40px}
                                }
                                @media (max-width: 337px) {
                                    h1.header-text {font-size:28px; line-height:38px}
                                }
                            `}</style>
                            </Container>
                        </Segment>
                        <Segment className='sections section_light_grey section_item_center' style={{marginTop:'-5px'}}>
                            <div className='rows'>
                                <h1 className="black-h1" id='color-black'>But, do it professionally,</h1>
                                <h1 className="black-h1 last" id='color-black'>with professionals.</h1>
                            </div>
                            <div className='rows'>
                                <div className='column collumn_33'>
                                    <h1>1K<span>+</span></h1>
                                    <p>rendering projects</p>
                                </div>
                                <div className='column collumn_33'>
                                    <h1>6<span>+</span></h1>
                                    <p>years in the industry</p>
                                </div>
                                <div className='column collumn_33'>
                                    <h1>30<span>+</span></h1>
                                    <p>CGI specialists</p>
                                </div>
                            </div>
                        </Segment>
                        <Segment id="next" className='sections section_item_center'>
                            <div className='rows'>
                                <h1 className='black-h1' id='color-black'>Who know exactly</h1>
                                <h1 className='black-h1 last' id='color-black'>how to do things good, if not great.</h1>
                            </div>
                            <div className='rows' id='services-row'>
                                <Grid columns={3} className='grid-wrapper-icon'>
                                    <Grid.Row>
                                        <Grid.Column>
                                            <div className='black-icons'><Quality /></div>
                                            <h3 className='h3'>QUALITY ASSURANCE</h3>
                                            <p>Sleep tight, we’ll make sure you only receive best-in-class renders.</p>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <div className='black-icons'><Lock /></div>
                                            <h3 className='h3'>CONFIDENTIALITY</h3>
                                            <p>You get to choose who knows what. Privacy means business.</p>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <div className='black-icons'><Worry /></div>
                                            <h3 className='h3'>WORRY-FREE</h3>
                                            <p>Relax, you can count on us. Besides, being on-time is in our DNA.</p>
                                        </Grid.Column>
                                    </Grid.Row>

                                    <Grid.Row>
                                        <Grid.Column>
                                            <div className='black-icons'><Dolar /></div>
                                            <h3 className='h3'>SAVE COST</h3>
                                            <p>Never again mind the high cost of industry standard equipments.</p>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <div className='black-icons'><Responsif /></div>
                                            <h3 className='h3'>RESPONSIVE</h3>
                                            <p>We are here, in standby mode, whenever you need a hand.</p>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <div className='black-icons'><Render /></div>
                                            <h3 className='h3'>OWN RENDER FARMS</h3>
                                            <p>Plant your work in our farm, it will grow into a 3D masterpiece.</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>
                        </Segment>
                        <Segment id="next" className='sections section_black section_item_center'>
                            <div className='rows'>
                                <h1 className='black-h1'>To make your works</h1>
                                <h1 className='black-h1 last'>look good, if not amazing.</h1>
                            </div>
                            <div className='rows white-icon'>
                                <Grid>
                                    <Grid.Row columns={3}>
                                        <Grid.Column>
                                            <Img />
                                            <h3 className='h3 white'>STILL</h3>
                                            <p>We got you covered with highest 
                                                quality stills for both 
                                                3D interior and 3D exterior.</p>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Animation />
                                            <h3 className='h3 white'>ANIMATIONS</h3>
                                            <p>Everybody loves 3D animations. 
                                                Make 3D. 
                                                Animate it. You’ll get love. </p>
                                        </Grid.Column>
                                        <Grid.Column>
                                            <Vr />
                                            <h3 className='h3 white' >VR</h3>
                                            <p>You can’t get any more realistic experience with 360 panoramic images and Virtual Reality gadgets, virtually.</p>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </div>
                            <div className='rows' style={{ paddingTop: '0' }}>
                                <Button size='big' className='white-btn' href='/services' style={{ marginTop: '0' }}>
                                    FIND OUT MORE
                            </Button>
                            </div>
                        </Segment>
                        <Segment id="next" className='sections section_item_center'>
                            <div className='rows'>
                                <h1 className='black-h1 last' id='color-black'>Like these...</h1>
                            </div>
                            <div id='section-portfolio'>
                                <TabExampleText />
                            </div>
                            <div className='rows'>
                                <Button size='big' className='white-btn this-black' href='/portfolio'>
                                    VIEW ALL
                            </Button>
                            </div>
                        </Segment>
                        <Segment id="next" className='sections section_black section_item_center'>
                            <div className='rows'>
                                <h1 className='black-h1 last'>Feel the gravity?</h1>
                            </div>
                            <div className='rows'>
                                <Button size='big' className='ui big button white-btn' href="/contact">
                                    HIRE US
                        </Button>
                            </div>
                        </Segment>
                    </Layout>
                </div>
            </MyDiv>
        )
    }
}
export default GSAP()(Index);