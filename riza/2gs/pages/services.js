import glamorous from 'glamorous'
import Layout from '../src/components/Layout'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Form, Input, TextArea, } from 'semantic-ui-react'
import { BigImg } from '../static/assets/images/svg/big-img.svg'
import { Bigmotion } from '../static/assets/images/svg/big-motion.svg'
import { BigVr } from '../static/assets/images/svg/big-vr.svg'

import GSAP from 'react-gsap-enhancer';

const mediaQueries = {
    pc: '@media screen and (max-width: 1024px)',
    tablet: '@media screen and (max-width: 767px)',
    phone680: '@media screen and (max-width: 680px)',
    phone: '@media screen and (max-width: 600px)',
    phones:'@media screen and (max-width: 505px)',
    phone1: '@media screen and (max-width: 500px)',
}

const MyDiv = glamorous.div(
{
    '& .header':{
        padding: '230px 0 130px',
        background:'#eeeeee',
    },
    '& i.icon-vr.icon-size-big': {
        color: '#000',
    },
    '& .section_item_center svg':{
        width:'40%',
        [mediaQueries.phone680]:{
            width:'80%',
            margin:'0 10%',
        },
    },
    '& .header-text': {
        marginBottom:'0',
    },
    '& h1, & p':{
        marginBottom:'40px',
    },
    '& .ui.big.button.white-btn':{
        marginTop:'30px',
    },
    '& .svg-wrapper':{
        [mediaQueries.phone680]:{
            textAlign:'center',
        },
    },
    '& svg':{
        [mediaQueries.phone680]:{
            width:'80%',
        },
    },
},)

function createRevealAnim({target}) {
    console.log(target)
    return new TimelineMax({ repeat: -1, yoyo:true })
        .staggerFrom('.svg', 5, {scale:0, left:200, ease: SteppedEase.config(12), clearProps:"scale,left" })
        .staggerFrom('.use svg g path', 5, {scale:0, left:200, clearProps:"scale,left", transformOrigin:"left 50%",  })
}

class Index extends React.Component {

    componentDidMount() { 
        setTimeout(() => 
        this.addAnimation(createRevealAnim), 1000);
    }

    render() {       
        return (
<MyDiv>
    <div id="services" className='white-menu' >
    <Layout>
        <Segment className="header">
            <div className='rows row_1'>
                <h1 style={{textAlign:'center'}} className='header-text'>Let your audience get the best experience out of your works.</h1>
            </div>
        </Segment>
        <Segment className='sections section_black'>
            <div className='rows'>
                <div className='collumn_40 column_left'>
                    <div className='svg svg-wrapper'><BigImg /></div>
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
                    <button className="ui big button white-btn" role="button">VIEW STILL PORTFOLIO</button>
                </div>
            </div>
        </Segment>
        <Segment className='sections section_dark_grey'>
            <div className='rows'>
                <div className='collumn_70 column_left'>
                <h1 className="black-h1">But if you can’t stay still, move.</h1>
                    <p>Give an impression of movement to your stills with our 3D animation service. Everybody knows animation will let your works have more stories 
                        to tell, more angles to view, and certainly more entertaining to watch. So, what’s keeping you from making it?
                    </p>
                    <p>
                        Paragraf ini masing kosong karena belum tahu jenis animasi seperti apa saja yang disediakan oleh 2G Studio.
                    </p>
                    <button className="ui big button white-btn" role="button">VIEW ANIMATIONS</button>
                </div>
                <div className='collumn_30 column_right'>
                <div className='use svg-wrapper'><Bigmotion /></div>
                </div>
            </div>
        </Segment>
        <Segment className='sections section_item_center'>
            <div className='rows'>
                <div className='collumn_100'>
                    <h1 className="black-h1" id='color-black'>Take control, make it real.</h1>
                    <BigVr />
                    <p style={{color:'#777'}}>Yes, this is the real deal. Let your audience having a sense of control in viewing your works. Make them visualize a true-to-life experience 
                        over your works with 360 panoramic images and Virtual Reality gadgets.
                    </p>
                    <button className='ui big button white-btn this-black' role="button">VIEW VR PORTFOLIO</button>
                </div>
            </div>
        </Segment>
    </Layout>
    </div>
</MyDiv>
        )
    }
}
export default GSAP()(Index);