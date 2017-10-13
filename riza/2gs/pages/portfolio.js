import glamorous from 'glamorous'
import Layout from '../src/components/Layout'
import { Button, Container, Divider, Grid, Header, Icon, Image, List, Menu, Segment, Form, Input, TextArea, } from 'semantic-ui-react'
import TabExampleText from '../src/components/tab/tabPortfolio.js'

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
    },
    '& #portfolio .sections.section_item_center': {
        padding: '0',
        display:'inline-block',
        width:'100%',
    },
    '& #portfolio .sections.section_item_center .wrapper-tabmenu': {
        display: 'inline-block',
        width: '100%',
    },
    '& #portfolio .sections.section_item_center .wrapper-tabmenu .ui.text.menu': {
        display:'inline-block',
        margin: '0px',
        padding: '5px 0 20px',
        width: '100%',
        backgroundColor: '#000',
    },
    '& #portfolio .sections.section_item_center .wrapper-tabmenu .ui.text.menu .item': {
        display:'inline-block',
        color:'#fff',
        transition: 'all 0.4s ease-in-out',
        padding:'10px',
    },
    '& #portfolio .sections.section_item_center .wrapper-tabmenu .ui.text.menu .item:hover':{
        color:'#555',
        transition: 'all 0.4s ease-in-out',
    },
    '& #portfolio .sections.section_item_center .wrapper-tabmenu .ui.segment.active.tab': {
        padding: '70px 0',
        margin: '0',
    },
    '& #portfolio .section_item_center .wrapper-tabmenu .ui.segment.active.tab .container > div > div > div:first-child .grid-item.gallery-2gs': {
        paddingLeft:'0',
    },
    '& #portfolio .section_item_center .wrapper-tabmenu .ui.segment.active.tab .container > div > div > div:last-child .grid-item.gallery-2gs': {
        paddingRight:'0',
    },
    '& #portfolio a.active.item:after': {
        content: "''",
        width: '100%',
        height: '1px',
        left: '0',
        position: 'absolute',
        bottom: '0',
        backgroundColor: '#bbbbbb',
    }
},)
export default () => (
<MyDiv>
    <div id="portfolio" className='white-menu'>
    <Layout>
        <div className="header section_black">
            <div className='rows row_1'>
                <h1 className="black-h1 header-text" style={{textAlign:'center', marginBottom:'0'}}>
                    Would it be great to see your works being rendered like these…
                </h1>
                <i className="icon-television-fill" ></i>
            </div>
        </div>
        <div className='sections section_item_center'>
                <TabExampleText />    
        </div>
    </Layout>
    </div>
</MyDiv>
) 