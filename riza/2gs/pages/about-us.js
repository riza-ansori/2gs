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
import FaUser from 'react-icons/lib/fa/user'
import FaFacebook from 'react-icons/lib/fa/facebook'
import FaTwitter from 'react-icons/lib/fa/twitter'

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
        height: '50vh',
        minHeight:'400px',
        overflow:'hidden',
    },
    '& .header:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0, 0.7)',
        zIndex: '1',
        top: '0',
        left: '0',
    },
    '& .section-wrapper':{
        padding:'70px 0',
        width:'80%',
        margin:'auto',
        maxWidth:'1024px',
    },
    '& .rows':{
        padding:'30px 0',
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
    '& .collumn_50.column_right': {
        paddingLeft: '35px',
        verticalAlign:'top',
    },
    '& .collumn_50.column_left': {
        paddingRight: '35px',
        verticalAlign:'top',
    },
})
export default () => (
    <MyDiv>
        <Layout>
            <div className="header">
            <Image                
                height='auto'
                src='/assets/images/about.jpg'
                style={{width:'100%'}}
            />
            </div>
            <div className='section-wrapper'>
                <div className='rows row_1' style={{textAlign:'center'}}>
                    <h2 style={{marginBottom:'30px'}}>About Us</h2>
                    <p>2G Studio is a professional 3D Visualization studio founded in 2011 in Surabaya, Indonesia by ReinaldoHandaya and Evan Mandala. It’s consisted in 
                        bringing together their skills, styles and criticism of 3D that complement each other. The uniting of their crucial abilities results in developing 
                        themselves as better illustration artists offering the best quality of professional visuals with punctuality for their clients.</p>
                </div>
                <div className='rows row_2' style={{textAlign:'center'}}>
                    <h2 style={{marginBottom:'30px'}}>Meet Our Team</h2>
                    <div className='collumn_50 column_left'>
                            <h3>REINALDO HANDAYA</h3>
                            <i className='wrapper-icon'><FaUser /></i>
                            <p>Reinaldo graduated from Petra Christian University majoring in Civil Engineering in 2002, Surabaya, Indonesia. He started his career in a 
                                furniture workshop and interior designing from 2004 – 2009. In 2009 he started working as a 3d freelancer. He is the founder of 2G Studio 
                                and 2G Academy. In his spare time he enjoys photography and travelling.</p>
                            <div className='sosmed'>
                                <a href='http://www.facebook.com/reinaldo.handaya'><FaFacebook /></a>
                                <a href='https://twitter.com/mutsu80'><FaTwitter /></a>
                            </div>
                    </div>
                        
                    <div className='collumn_50 column_right'>
                            <h3>EVAN MANDALA</h3>
                            <i className='wrapper-icon'><FaUser /></i>
                            <p>Evan loves 3d since he was in Architecture College. He graduated from Atma Jaya University in Yogyakarta majoring in Architectural 
                                Engineering in 2009. He began his architecture career and became a 3d freelancer since 2007. Besides 3d, he loves sketching and 
                                photography. His love for photography, nature and architecture adds to his desire to travel around the world to learn about the cultures 
                                and beauty both on land and under water. He is the co-founder of 2G Studio and 2G Academy.</p>
                            <div className='sosmed'>
                                <a href='http://www.facebook.com/koyamenz'><FaFacebook /></a>
                                <a href='https://twitter.com/evanmandala'><FaTwitter /></a>
                            </div>
                    </div>
                </div>
            </div>
        </Layout>
    </MyDiv>
) 