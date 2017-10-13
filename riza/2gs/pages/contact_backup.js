import glamorous from 'glamorous'
import Layout from '../src/components/Layout'
import Animation from '../src/components/masonry/animation.js'
import GMaps from '../src/components/gmaps.js'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Form, Input, TextArea, } from 'semantic-ui-react'
import Registration from '../src/components/step/Registration.js'

const mediaQueries = {
    pc: '@media screen and (max-width: 1024px)',
    tablet: '@media screen and (max-width: 767px)',
    phone: '@media screen and (max-width: 600px)',
    phones:'@media screen and (max-width: 505px)',
    phone1: '@media screen and (max-width: 500px)',
}

const MyDiv = glamorous.div(
{
    '& ul.form-fields': {
        margin: '0',
        padding: '0',
        listStyleType: 'none',
    },
    '& .wrapper-steps': {
        maxWidth: '1024px',
        margin: 'auto',
        padding: '70px 0',
        width: '80%',
        [mediaQueries.tablet]:{
            width: '88%',
        },
    },
    '& .form-step': {
        marginTop: '30px',
    },
    '& .form-fields .checkbox label': {
        display: 'block',
        fontSize: '30px',
        lineHeight: '30px',
        margin: '30px 0',
    },
    '& .form-footer': {
        paddingTop: '30px',
        minHeight: '86px',
    },
    '& .form-fields .checkbox label input[type="checkbox"]' :{
        width: '27px',
        height: '27px',
        verticalAlign: 'bottom',
    },
    '& .form-fields .checkbox label span': {
        position: 'relative',
        top: '1px',
    },
    '& .form-footer button.btn': {
        borderRadius: '3px',
        fontFamily: "'Encode Sans Semi Condensed', sans-serif",
        fontWeight: '100',
        color: '#fff',
        padding: '20px 40px',
        transition: 'all 0.4s ease-in-out',
        backgroundColor: '#fff',
        transition: 'all 0.4s ease-in-out',
        border: 'none',
        background: '#000',
        fontSize: '14px',
        textTransform: 'uppercase',
        letterSpacing: '4px',
        cursor:'pointer',
        [mediaQueries.phone1]:{
            width:'100%',
            marginBottom:'30px'
        },
    },
    '& .form-footer button.btn.-primary.pull-right': {
        float:'right',
        [mediaQueries.phone1]:{
            float:'none',
            marginBottom:'0',
        },
    },
    '& .form-footer button.btn:hover': {
        backgroundColor:'#555',
        transition: 'all 0.4s ease-in-out',
    },
    '& .form-footer button.btn.-primary.pull-right:hover': {
        backgroundColor:'#555',
        transition: 'all 0.4s ease-in-out',
    },
    '& .form-fields textarea': {
        width: '100%',
        minHeight: '300px',
        borderRadius: '3px',
        padding: '20px 26px',
        borderColor: '#9b9b9b',
        fontSize: '16px',
        fontFamily: "'Encode Sans Semi Condensed', sans-serif",
        [mediaQueries.phone1]:{
            padding:'20px 20px',
        },
    },
    '& section.drop-file': {
        marginTop: '30px',
    },
    '& .drop-file .dropzone': {
        width: '80px',
        height: '80px',
        borderRadius: '100%',
        border: '1px solid #000',
        cursor:'pointer',
        transition: 'all 0.4s ease-in-out',
    },
    '& aside ul': {
        marginTop: '15px',
    },
    '& aside ul li' :{
        fontSize: '16px',
        lineHeight: '26px',
        fontFamily: "'Encode Sans Semi Condensed', sans-serif",
    },
    '& .drop-file .dropzone .no-border': {
        fontSize: '30px',
        width: '82px',
        lineHeight: '77px',
        textAlign: 'center',
        color:'#000',
        transition: 'all 0.4s ease-in-out',
    },
    '& .drop-file .dropzone:hover': {
        color:'#fff',
        border:'1px solid #555',
        backgroundColor:'#555',
        transition: 'all 0.4s ease-in-out',
    },
    '& .drop-file .dropzone:hover .no-border': {
        color:'#fff',
        transition: 'all 0.4s ease-in-out',
    },
    '& ul.form-fields .left-field': {
        display: 'inline-block',
        width: '50%',
        paddingRight: '2.5%',
        marginBottom: '30px',
        [mediaQueries.phone1]:{
            width:'100%',
            paddingRight:'0'
        }
    },
    '& ul.form-fields  li.right-field': {
        marginBottom: '30px',
        display: 'inline-block',
        paddingLeft: '2.5%',
        width: '50%',
        [mediaQueries.phone1]:{
            width:'100%',
            paddingLeft:'0'
        }
    },
    '& input#form-input-control-first-name': {
        borderRadius: '3px',
        padding: '20px 26px',
        width: '100%',
        border: '1px solid #9b9b9b',
        fontSize: '16px',
        fontFamily: "'Encode Sans Semi Condensed', sans-serif",
    },
    '& div#step-four .form-fields span': {
        marginLeft: '15px',
    },
    '& div#step-five': {
        textAlign: 'center',
    },
    '& #step-five .form-step p': {
        marginTop: '30px',
    },
    '& i#end-steps': {
        display: 'inline-block',
        margin: '30px 0 0',
        border: '1px solid #cccccc',
        borderRadius: '100%',
        padding: '50px',
        fontSize:'30px',
    },
},)
export default () => (
    <MyDiv>
    <Layout>
        <div className="header">
            <GMaps/>
        </div>
        <Registration/>
    </Layout>
    </MyDiv>
) 