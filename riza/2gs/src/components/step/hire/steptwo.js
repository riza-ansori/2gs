import React, { Component } from 'react'
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
    Loader,
    Dimmer,
    Form,
    Input,
    TextArea
} from 'semantic-ui-react';
import glamorous from 'glamorous'
import DropFile from './dropfile.js'

const mediaQueries = {
    tablet: '@media screen and (max-width: 767px)',
    hp600: '@media screen and (max-width: 600px)',
    hp505: '@media screen and (max-width: 505px)',
}

const GlobalDiv = glamorous.div({
})

class StepTwo extends Component {

    constructor() {
        super();
        this.state = {
            loading: true
        };
    }

    componentDidMount() {
        const { loading } = this.state
        setTimeout(() => this.setState({ loading: false }), 0);
    }

    render() {
        const {  loading } = this.state

        return (
            <div className='wrapper-steps'>
                <p>Keep it simple. That’s how we like to do things. So, it would be great if you’ll do the same</p>
                <div className='form-step'>
                    <Form>
                        <Form.Field id='form-textarea-control-opinion' control={TextArea} placeholder='Please describe briefly the details of your brand and what you require from us.' />
                    </Form>
                    <DropFile/>
                </div>
            </div>
        )
    }
}

export default StepTwo;