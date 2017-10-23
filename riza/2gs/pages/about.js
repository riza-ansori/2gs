import Layout from '../src/components/Layout'
import glamorous from 'glamorous'
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
import GMaps from '../src/components/gmaps.js'
import FaUser from 'react-icons/lib/fa/user'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'

const thumbnail=  '/assets/images/about.jpg';
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
        minHeight:'400px',
        overflow:'hidden',
        backgroundImage: "url(" + thumbnail + ")",
        backgroundRepeat:'no-repeat',
        backgroundSize:'cover',
        padding:'200px 0 100px'
    },
    '& .header:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0, 0.84)',
        zIndex: '1',
        top: '0',
        left: '0',
    },
    '& .header .black-h1.header-text.last, & .header p':{
        color:'#fff',
        zIndex:'1',
        position:'relative',
    },
    '& .header p':{
        maxWidth: '1024px',
        margin: '0 auto',
        textAlign:'center',
        fontFamily: "'Lato', sans-serif",
        fontSize: '18px',
        lineHeight: '1.5',
        color: '#999',
        fontWeight: '400',
    },
    '& .ui.segment.section-wrapper':{
        padding:'70px 0 0',
        width:'80%',
        margin:'auto',
        maxWidth:'1024px',
    },
    '& #about .ui.segment.full-width':{
        width:'100%',
        padding:'120px 0 0',
    },
    '& .section-wrapper .rows':{
        padding:'50px 0 0',
        width:'100%',
    },
    '& .section-wrapper .rows p':{
        maxWidth:'700px',
        margin:'auto'
    },
    '& .wrapper-icon':{
        fontSize: '50px',
        padding: '50px',
        display: 'inline-block',
        margin: '30px 0',
        borderRadius: '100%',
        color: '#fff',
        backgroundColor: '#000',
    },
    '& .sosmed': {
        marginTop:'30px',
    },
    '& .sosmed a': {
        margin: '10px',
        fontSize: '25px',
        color: '#000',
        transition: 'all 0.4s ease-in-out',
    },
    '& .sosmed a:hover': {
        color:'#555',
        transition: 'all 0.4s ease-in-out',
    },
    '& .black-h1':{
        marginBottom:'40px',
    },
    '& #profile-leader .two.column.row .column':{
        paddingRight: '8%',
        paddingLeft: '0',
    },
    '& #profile-leader .two.column.row .column:nth-child(2n)':{
        paddingRight: '0',
        paddingLeft: '8%',
    },
    '& .section-wrapper .rows.row_3, & .section-wrapper .rows.row_4':{
        paddingTop:'70px',
    },
    '& .rows.row_3 .wrapper-icon, & .rows.row_4 .wrapper-icon':{
        backgroundColor: '#e4e5e7',
    },
    '& .section-wrapper .rows.row_3 svg, & .section-wrapper .rows.row_4 svg':{
        fill:'#adb3b6',
    },
    '& p':{
        color:'#777',
        lineHeight: '1.69',
    },
    '& #profile-leader h3':{
        fontFamily: "'Libre Franklin', sans-serif",
        fontSize: '24px',
        fontWeight: '300',
        color:'#000',
        marginTop:'0'
    },
    '& .job-desk':{
        fontSize: '12px',
        letterSpacing: '2px',
        fontFamily: "'Roboto', sans-serif",
    },
    '& #profile-leader .job-desk':{
        display:'inline-block',
        marginBottom:'30px',
    },
    '& #about h1.black-h1.last:after':{
        backgroundColor: '#fff',
    },
    '& #about .wrapper-img-person':{
        textAlign:'center',
        marginBottom:'30px',
    },
    '& #about .wrapper-img-person img':{
        margin:'auto',
        width:'200px',
        height:'200px',
    },
    '& #about h3': {
        fontWeight: '300',
        fontSize: '20px',
    }
})
export default () => (
    <MyDiv>
        <div id="about" className='white-menu' >
        <Layout>
            <Segment className="header">
                <h1 className="black-h1 header-text last" style={{textAlign:'center'}}>It’s not about us.</h1>
                <p>It’s about giving you the best possible solutions related to our services.</p>
                <p>But if you need to know our background, please scroll below.</p>
            </Segment>
            <Segment className='section-wrapper'>
                <div className='rows row_1' style={{textAlign:'center'}}>
                    <h1 className="black-h1" id='color-black'>How it all began</h1>
                    <p>2G Studio is a professional 3D Visualization studio founded in 2011 in Surabaya, Indonesia by Reinaldo Handaya and Evan Mandala. 
                        It’s consisted in bringing together their skills, styles and criticism of 3D that complement each other.</p>
                    <p>The uniting of their crucial abilities results in developing themselves as better illustration artists offering the best quality of 
                        professional visuals with punctuality for their clients.</p>
                </div>
            </Segment>
            <Segment className='section-wrapper'>
                <div className='rows row_2' style={{textAlign:'center'}}>
                    <Grid divided='vertically' id='profile-leader'>
                        <Grid.Row columns={2}>
                        <Grid.Column>
                            <div className='wrapper-img-person'>
                                <Image                
                                    height='auto'
                                    src='/assets/images/reynaldo.png'
                                />
                            </div>
                            <h3>Reinaldo Handaya</h3>
                            <span className='job-desk'>FOUNDER</span>
                            
                            <p>Reinaldo graduated from Petra Christian University</p>
                            <p>majoring in Civil Engineering in 2002, Surabaya,</p>
                            <p>Indonesia. He started his career in a furniture</p>
                            <p>workshop and interior designing from 2004 – 2009. In</p>
                            <p>2009 he started working as a 3d freelancer.</p>
                        </Grid.Column>

                        <Grid.Column>
                            <div className='wrapper-img-person'>
                                <Image                
                                    height='auto'
                                    src='/assets/images/evan.png'
                                />
                            </div>
                            <h3>Evan Mandala</h3>
                            <span className='job-desk'>CO-FOUNDER</span>
                            
                            <p>Evan loves 3d since he was in Architecture College. He</p>
                            <p>graduated from Atma Jaya University in Yogyakarta</p>
                            <p>majoring in Architectural Engineering in 2009. He</p>
                            <p>began his architecture career and became a 3d</p>
                            <p>freelancer since 2007.</p>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </Segment>
            <Segment className='section-wrapper'>
                <div className='rows row_3' style={{textAlign:'center'}}>
                    <h1 className="black-h1" id='color-black'>Our comrades</h1>
                    <p>Quid ad utilitatem tantae pecuniae? Quid est, quod ab ea absolvi et perfici debeat? Sed ad haec, nisi molestum est, habeo quae 
                        velim. Vide ne ista sint Manliana vestra aut maiora etiam, si imperes quod facere non possim. Ita relinquet duas, de quibus etiam 
                        atque etiam consideret.</p>
                </div>
                <div className='rows row_3' style={{textAlign:'center'}}>
                    <div className='collumn_25'>
                        <i className='wrapper-icon'><FaUser /></i>
                        <h3>Lorem Ipsum</h3>
                        <span className='job-desk'>CGI ARTIST</span>
                    </div>

                    <div className='collumn_25'>
                        <i className='wrapper-icon'><FaUser /></i>
                        <h3>Lorem Ipsum</h3>
                        <span className='job-desk'>CGI ARTIST</span>
                    </div>

                    <div className='collumn_25'>
                        <i className='wrapper-icon'><FaUser /></i>
                        <h3>Lorem Ipsum</h3>
                        <span className='job-desk'>CGI ARTIST</span>
                    </div>

                    <div className='collumn_25'>
                        <i className='wrapper-icon'><FaUser /></i>
                        <h3>Lorem Ipsum</h3>
                        <span className='job-desk'>CGI ARTIST</span>
                    </div>
                </div>

                <div className='rows row_4' style={{textAlign:'center'}}>
                    <div className='collumn_25'>
                        <i className='wrapper-icon'><FaUser /></i>
                        <h3>Lorem Ipsum</h3>
                        <span className='job-desk'>CGI ARTIST</span>
                    </div>

                    <div className='collumn_25'>
                        <i className='wrapper-icon'><FaUser /></i>
                        <h3>Lorem Ipsum</h3>
                        <span className='job-desk'>CGI ARTIST</span>
                    </div>

                    <div className='collumn_25'>
                        <i className='wrapper-icon'><FaUser /></i>
                        <h3>Lorem Ipsum</h3>
                        <span className='job-desk'>CGI ARTIST</span>
                    </div>

                    <div className='collumn_25'>
                        <i className='wrapper-icon'><FaUser /></i>
                        <h3>Lorem Ipsum</h3>
                        <span className='job-desk'>CGI ARTIST</span>
                    </div>
                </div>
            </Segment>
            <Segment className='full-width'>
                <Image                
                    height='auto'
                    src='/assets/images/image_dummy.png'
                    style={{width:'100%'}}
                />
            </Segment>
        </Layout>
        </div>
    </MyDiv>
) 