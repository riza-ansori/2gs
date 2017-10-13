import Layout from '../src/components/Layout'
import glamorous from 'glamorous'
import { SvgHeader } from '../src/components/3d-render.svg'
import { Quality } from '../static/assets/images/svg/quality.svg'
import { Confident } from '../static/assets/images/svg/confident.svg'
import { Lock } from '../static/assets/images/svg/lock.svg'
import { Worry } from '../static/assets/images/svg/worry.svg'
import { Dolar } from '../static/assets/images/svg/dolar.svg'
import { Responsif } from '../static/assets/images/svg/responsif.svg'
import { Render } from '../static/assets/images/svg/render.svg'
import { Img } from '../static/assets/images/svg/img.svg'
import { Animation } from '../static/assets/images/svg/animation.svg'
import { Vr } from '../static/assets/images/svg/vr.svg'
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
    pc: '@media screen and (max-width: 1024px)',
    tablet: '@media screen and (max-width: 767px)',
    hp680: '@media screen and (max-width: 680px)',
    phone: '@media screen and (max-width: 600px)',
    phones:'@media screen and (max-width: 505px)',
    phone1: '@media screen and (max-width: 500px)',
}

const MyDiv = glamorous.div({
    '& .ui.inverted.segment': {
        background: 'transparent',
        padding: '0 !important',
        maxHeight: '711px',
        overflow:'hidden'
    },
    '& .ui.segment':{
        borderRadius:'0',
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
    '& #home .sections':{
        paddingBottom:'100px',
    },
    '& #home .black .ui.inverted.pointing.secondary.top.fixed.menu': {
        background:'transparent',
    },
    '& #home .black .ui.inverted.pointing.secondary.top.fixed.menu img': {
        filter: 'invert(100%)',
    },
    '& #home .black .ui.inverted.pointing.secondary.top.fixed.menu i.icon-logo-2gs-01': {
        color: '#fff',
    },
    '& #home .black .ui.inverted.pointing.secondary.top.ui.fixed.menu .ui.item.dropdown i': {
        color: '#fff',
    },
    '& #section-portfolio': {
        textAlign: 'center',
    },
    '& #section-portfolio .ui.text.menu': {
        display: 'inline-block',
        marginTop: '40px',
        [mediaQueries.tablet]:{
            width:'88%',
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
        color:'#878787',
        textTransform: 'uppercase',
        [mediaQueries.phone]:{
            fontSize: '14px',
            lineHeight: '24px',
        }
    },
    '& #section-portfolio .ui.text.menu a.item.active': {
        borderBottom: '1px solid #bbb',
        transition: 'all 0.4s ease-in-out',
        color:'#333',
    },
    '& #section-portfolio .ui.text.menu a.item:hover': {
        transition: 'all 0.4s ease-in-out',
        color:'#333',
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
    '& .rows .column':{
        marginBottom:'100px',
    },
    '& #home .ui.grid>.row':{
        padding:'0',
    },
    '& #home .ui.grid>.row>.column':{
        marginBottom:'100px',
        [mediaQueries.hp680]:{
            width:'100% !important',
        },
    },
    '& .three.column': {
        marginBottom: '0 !important',
    },
    '& h3.h3':{
        fontSize:'16px',
        letterSpacing: '1.3px',
        fontWeight:'400',
        color:'#424242',
    },
    '& h3.h3.white':{
        color:'#fff'
    },
    '& h1.header-text': {
        color:'#fff !important',
    },
    '& #services-row p':{
        color:'#777',
    },
    '& .section_black p':{
        color:'#bbb',
        lineHeight: '1.56',
    },
    '& .black-icons svg': {
        width:'24px',
    },
    '& .white-icon .column svg': {
        width:'36px',
    },
    '& .white-icon .column svg g': {
        fill: '#fff',
    },
},)

function createRevealAnim({target}) {
    console.log(target)
    return new TimelineMax({ repeat: -1, yoyo:true })
        .staggerFrom('use', .4, { css: { autoAlpha: 0, transformOrigin: "center center", scale:.5 }, ease: Back.easeOut }, 0.06)
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
                            <SvgHeader />
                            <div className="container-header-text">
                                <h1 className='header-text left'>Your works are no good if not rendered properly, in 3D.</h1>
                            </div>
                            <style jsx>{`
                                h1.header-text{
                                    width: 80%;
                                    max-width: none;
                                }
                                @media (max-width: 505px) {
                                    h1.header-text {font-size:40px; line-height:50px}
                                }
                                @media (max-width: 499px) {
                                    h1.header-text {font-size:35px; line-height:45px}
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
                    <Segment className='sections section_light_grey section_item_center'>
                        <div className='rows'>
                            <h1 className="black-h1 last" id='color-black'>But, do it professionally, with professionals.</h1>
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
                                <p>CGI specialist</p>
                            </div>
                        </div>
                    </Segment>
                    <Segment id="next-section1" className='sections section_item_center'>
                        <div className='rows'>
                            <h1 className='black-h1 last' id='color-black'>Who know exactly how to do things good, if not great.</h1>
                        </div>
                        <div className='rows' id='services-row'>
                            <Grid columns={3} className='grid-wrapper-icon'>
                                <Grid.Row>
                                    <Grid.Column>
                                        <div className='black-icons'><Quality/></div>
                                        <h3 className='h3'>QUALITY ASSURANCE</h3>
                                        <p>Sleep tight, we’ll make sure you only receive best-in-class renders.</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <div className='black-icons'><Lock/></div>
                                        <h3 className='h3'>CONFIDENTIALITY</h3>
                                        <p>You get to choose who knows what. Privacy means business.</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <div className='black-icons'><Worry/></div>
                                        <h3 className='h3'>WORRY-FREE</h3>
                                        <p>Relax, you can count on us. Besides, being on-time is in our DNA.</p>
                                    </Grid.Column>
                                </Grid.Row>

                                <Grid.Row>
                                    <Grid.Column>
                                        <div className='black-icons'><Dolar/></div>
                                        <h3 className='h3'>SAVE COST</h3>
                                        <p>Never again mind the high cost of industry standard equipments.</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <div className='black-icons'><Responsif/></div>
                                        <h3 className='h3'>RESPONSIVE</h3>
                                        <p>We are here, in standby mode, whenever you need a hand.</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <div className='black-icons'><Render/></div>
                                        <h3 className='h3'>OWN RENDER FARMS</h3>
                                        <p>Plant your work in our farm, it will grow into a 3D masterpiece.</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                    </Segment>
                    <Segment id="next-section2" className='sections section_black section_item_center'>
                        <div className='rows'>
                            <h1 className='black-h1 last'>To make your works look good, if not amazing.</h1>
                        </div>
                        <div className='rows white-icon'>
                            <Grid>
                                <Grid.Row columns={3}>
                                    <Grid.Column>
                                        <Img />
                                        <h3 className='h3 white'>STILL</h3>
                                        <p>We got you covered with highest quality stills for both 3D interior and 3D exterior.</p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Animation />
                                        <h3 className='h3 white'>ANIMATIONS</h3>
                                        <p>Everybody loves 3D animations. Make 3D. Animate it. You’ll get love. </p>
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Vr />
                                        <h3 className='h3 white' >VR</h3>
                                        <p>You can’t get any more realistic experience with 360 panoramic images and Virtual Reality gadgets, virtually.</p>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                        <div className='rows' style={{paddingTop:'0'}}>
                            <Button size='big' className='white-btn' href='/services' style={{marginTop:'0'}}>
                                FIND OUT MORE
                            </Button>
                        </div>
                    </Segment>
                    <Segment id="next-section3" className='sections section_item_center'>
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
                    <Segment id="next-section4" className='sections section_black section_item_center'>
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