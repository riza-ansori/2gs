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