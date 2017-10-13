import glamorous from 'glamorous'
import Layout from '../src/components/Layout'
import Animation from '../src/components/masonry/animation.js'
import GMaps from '../src/components/gmaps.js'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Input, TextArea, } from 'semantic-ui-react'
import Registration from '../src/components/step/hire/Registration.js'

const mediaQueries = {
    pc: '@media screen and (max-width: 1024px)',
    tablet: '@media screen and (max-width: 767px)',
    phone: '@media screen and (max-width: 600px)',
    phones:'@media screen and (max-width: 505px)',
    phone1: '@media screen and (max-width: 500px)',
}

const MyDiv = glamorous.div(
{
    '& .header':{
        padding: '200px 0 70px',
        background:'#000',
    },
    '& .header .rows':{
        padding:'0',
        textAlign:'center',
    },
    '& #contact .header h1.black-h1': {
        marginBottom: '50px',
    },
    '& #contact .header p': {
        marginBottom: '0',
        fontSize:'18px',
        lineHeight:'26px',
    },
    '& .sections.form_section main': {
        width: '40%',
        margin: 'auto',
        maxWidth: '600px',
        padding:'30px 0',
        [mediaQueries.tablet]:{
            width:'88%',
        },
    },
    '& .wrapper-steps .form-step ul.form-fields': {
        listStyleType: 'none',
        display: 'inline-block',
        padding: '0',
        margin: '0',
        width: '100%',
    },
    '& .wrapper-steps .form-step ul.form-fields li': {
        display:'inline-block',
        width:'100%',
        marginBottom:'30px',
    },
    '& #contact .wrapper-steps .form-step ul.form-fields li input': {
        display:'inline-block',
        width:'100%',
        padding:'16px 0',
        border:'none',
        borderBottom:'1px solid #373a39',
        fontFamily: 'proxima-nova, sans-serif',
        lineHeight: '1.67',
        letterSpacing: '3.7px',
        fontSize: '12px',
    },
    '& .wrapper-steps .form-step ul.form-fields li textarea': {
        display:'inline-block',
        width:'100%',
        padding:'10px 0',
        minHeight:'250px',
        border:'none',
        borderBottom:'1px solid #373a39',
        fontFamily: 'proxima-nova, sans-serif',
        lineHeight: '1.67',
        letterSpacing: '3.7px',
        fontSize: '12px',
        marginBottom: '16px',
    },
    '& button.ui.big.button.white-btn.this-black.pull-right':{
        boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.3)',
        marginTop:'0',
    },
    '& h1.black-h1.last':{
        paddingBottom:'15px',
    },
    '& textarea:hover, & input:hover, & textarea:active, & input:active, & textarea:focus, & input:focus, & button:focus, & button:active, & button:hover, & label:focus, & .btn:active, & .btn.active': {
        outline: '0px !important',
    }
},)
export default () => (
<MyDiv>
    <div id="Hire" className='white-menu'>
        <Layout>
            <div className="header section_black">
                <div className='rows row_1'>
                    <h1 className="black-h1 header-text last" style={{textAlign:'center'}}>
                        Hire Us.
                    </h1>
                    <p>Hire us or ask us questions about our services. We also welcome you with coconut water in case you’re travelling in Bali.</p>
                </div>
            </div>
            <div className='sections form_section'>
                <Registration />
            </div>
        </Layout>
    </div>
</MyDiv>
) 