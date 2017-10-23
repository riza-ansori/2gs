import glamorous from 'glamorous'
import Layout from '../src/components/Layout'
import Animation from '../src/components/masonry/animation.js'
import GMaps from '../src/components/gmaps.js'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Input, TextArea, } from 'semantic-ui-react'
import Form from '../src/components/step/form.js'

const thumbnail=  'http://2gs.co/wp-content/uploads/2013/02/starbuck-final-cam-5_1600px.jpg';
const title= 'Table for Restaurant';
const cat= 'INTERIOR';
const img_1= 'http://2gs.co/wp-content/uploads/2013/02/starbuck-final-cam-6_1600px.jpg';
const img_2= 'http://2gs.co/wp-content/uploads/2013/02/starbuck-final-cam-4_1600px.jpg';

const mediaQueries = {
    pc: '@media screen and (max-width: 1024px)',
    tablet: '@media screen and (max-width: 767px)',
    phone: '@media screen and (max-width: 600px)',
    phones:'@media screen and (max-width: 505px)',
    phone1: '@media screen and (max-width: 500px)',
}

const MyDiv = glamorous.div(
{
    '& .header' :{
        position: 'relative',
        padding: '230px 0 130px',
        minHeight:'400px',
        overflow:'hidden',
        backgroundImage: "url(" + thumbnail + ")",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
    },
    '& .black-h1':{
        marginBottom:'50px',
    },
    '& p':{
        color:'#777'
    },
    '& .header:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0, 0.51)',
        zIndex: '0',
        top: '0',
        left: '0',
    },
    '& .header .rows':{
        position:'relative',
    },
    '& .cat-img':{
        color:'#bbb',
        fontFamily: 'proxima-nova, sans-serif',
        fontSize: '12px',
        fontWeight: '300',
        lineHeight: '1.67',
        letterSpacing:'3.7px',
    },
    '& .rows img':{
        width:'100%',
    },
    '& .rows.row-img': {
        padding: '0px 64px 70px',
    }
})
export default () => (
    <MyDiv>
        <div id="contact" className='white-menu'>
            <Layout>
                <div className="header section_black">
                    <div className='rows row_1'>
                        <h1 className="black-h1 header-text last center" >
                            Starbucks Amsterdam
                        </h1>
                        <p className='cat-img center'>INTERIOR</p>
                    </div>
                </div>
                <div className='sections form_section'>
                    <div className='rows row_2'>
                        <h1 className="black-h1 center" id='color-black'>Lorem Ipsum Dolor Sit Amet</h1>
                        <p className='center'>Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Quod quidem iam fit etiam in Academia. Quodcumque 
                            in mentem incideret, et quodcumque tamquam occurreret. Quo modo autem optimum, si bonum praeterea nullum est? Itaque vides, quo modo 
                            loquantur, nova verba fingunt, deserunt usitata.
                        </p>
                    </div>
                    <div className='rows row_3 row-img'>
                        <img src={img_1} />
                    </div>
                    <div className='rows row_4 row-img'>
                        <img src={img_2} />
                    </div>
                </div>
            </Layout>
        </div>
    </MyDiv>
    )