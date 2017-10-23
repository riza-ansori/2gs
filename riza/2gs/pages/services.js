import glamorous from 'glamorous';
import Layout from '../src/components/Layout';
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Form, Input, TextArea, } from 'semantic-ui-react'
import { BigImg } from '../static/assets/images/svg/big-img.svg'
import { Bigmotion } from '../static/assets/images/svg/big-motion.svg'
import { BigVr } from '../static/assets/images/svg/big-vr.svg'
import GSAP from 'react-gsap-enhancer';
import Waypoint from 'react-waypoint';

const mediaQueries = {
    pc: '@media screen and (max-width: 1024px)',
    tablet: '@media screen and (max-width: 767px)',
    phone680: '@media screen and (max-width: 680px)',
    phone: '@media screen and (max-width: 600px)',
    phones: '@media screen and (max-width: 505px)',
    phone1: '@media screen and (max-width: 500px)',
}

const MyDiv = glamorous.div(
    {
        '& .header': {
            padding: '230px 0 130px',
            background: '#eeeeee',
        },
        '& i.icon-vr.icon-size-big': {
            color: '#000',
        },
        '& .section_item_center svg': {
            width: '40%',
        },
        '& .header-text': {
            marginBottom: '0',
        },
        '& h1, & p': {
            marginBottom: '40px',
        },
        '& .ui.big.button.white-btn': {
            marginTop: '30px',
        },
        '& p':{
            lineHeight:'1.5',
        },
    })

function _animationBigImg({ target }) {
    return new TimelineMax({})
        .staggerFromTo('svg#BigImg', .5, { css: { opacity: 0, transformOrigin: "center center", scale:.5 }, ease: Back.easeOut }, { css: { opacity: 1, transformOrigin: "center center", scale:1 } })
}

function _animationBigMotion({ target }) {
    return new TimelineMax({})
    .staggerFromTo('svg#BigMotion', .5, { css: { opacity: 0, transformOrigin: "center center", scale:.5 }, ease: Back.easeOut }, { css: { opacity: 1, transformOrigin: "center center", scale:1 } })
}

class Services extends React.Component {

    componentDidMount() {

    }

    _handleWaypointEnter({ element }, ...props) {

        switch (element) {
            case "BigImg":
                this.addAnimation(_animationBigImg)

            case "BigMotion":
                this.addAnimation(_animationBigMotion)
        }
        console.log(props)
    }

    render() {
        return (<MyDiv>
            <div id="services" className='white-menu' >
                <Layout>
                    <Segment className="header">
                        <div className='rows row_1'>
                            <h1 style={{ textAlign: 'center' }} className='header-text'>Let your audience get the</h1>
                            <h1 style={{ textAlign: 'center' }} className='header-text'>best experience out of your</h1>
                            <h1 style={{ textAlign: 'center' }} className='header-text'>works.</h1>
                        </div>
                    </Segment>

                    <Segment className='sections section_black section-still'>
                        <div className='rows'>
                            <div className='collumn_40 column_left'>
                                <Waypoint
                                    onEnter={this._handleWaypointEnter.bind(this, { element: 'BigImg' })}
                                />
                                <BigImg id="BigImg" />
                            </div>
                            <div className='collumn_60 column_right'>
                                <h1 className="black-h1">Still, you can’t beat stills.</h1>
                                <p>Sure, current technology allows us to make much more sophisticated interactive 3D visualizations. But still images/photos are still
                        the most effective, practical and widely used media for people to get a glimpse of what your works will look like in real world.
                        And from marketing perspective: realistic stills sell.
                    </p>
                                <p>
                                    We can help you deliver this must-have media for both 3D interior and 3D exterior.
                    </p>
                                <Button className="ui big button white-btn" role="button" href='/portfolio'>VIEW STILL PORTFOLIO</Button>
                            </div>
                        </div>
                    </Segment>
                    <Segment className='sections section_dark_grey'>
                        <div className='rows'>
                            <div className='collumn_70 column_left'>
                                <h1 className="black-h1" style={{marginBottom:0}}>But if you can’t stay still,</h1>
                                <h1 className="black-h1" style={{marginTop:0}}>move.</h1>
                                <p>Give an impression of movement to your stills with our 3D animation service. Everybody knows animation will let your works have more stories
                        to tell, more angles to view, and certainly more entertaining to watch. So, what’s keeping you from making it?
                    </p>
                                <p>
                                    Paragraf ini masing kosong karena belum tahu jenis animasi seperti apa saja yang disediakan oleh 2G Studio.
                    </p>
                                <Button className="ui big button white-btn" role="button" href='/portfolio'>VIEW ANIMATIONS</Button>
                            </div>
                            <div className='collumn_30 column_right'>
                            <Waypoint
                                    onEnter={this._handleWaypointEnter.bind(this, { element: 'BigMotion' })}
                                />
                                <Bigmotion id="BigMotion" />
                            </div>
                        </div>
                    </Segment>
                    <Segment className='sections section_item_center'>
                        <div className='rows'>
                            <div className='collumn_100'>
                                <h1 className="black-h1" id='color-black'>Take control, make it real.</h1>
                                <Waypoint
                                    onEnter={this._handleWaypointEnter.bind(this)}
                                />
                                <BigVr />
                                <p style={{ color: '#777', maxWidth: '530px', margin: 'auto' }}>Yes, this is the real deal. Let your audience having a sense of control in viewing your works. Make them visualize a true-to-life experience
                        over your works with 360 panoramic images and Virtual Reality gadgets.
                    </p>
                                <Button className='ui big button white-btn this-black' role="button" href='/portfolio' >VIEW VR PORTFOLIO</Button>
                            </div>
                        </div>
                    </Segment>
                </Layout>
            </div>
        </MyDiv>)
    }
}

export default GSAP()(Services);
