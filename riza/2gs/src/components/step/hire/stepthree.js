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

const mediaQueries = {
    tablet: '@media screen and (max-width: 767px)',
    hp600: '@media screen and (max-width: 600px)',
    hp505: '@media screen and (max-width: 505px)',
}

const GlobalDiv = glamorous.div({
})

class StepThree extends Component {

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
                <p>You know, for us to keep in touch and get to know you.</p>
                <div className='form-step'>
                    <Form>
                        <Form.Group widths='equal'>
                            <Form.Field id='form-input-control-first-name' control={Input} placeholder='Name' />
                            <Form.Field id='form-input-control-last-name' control={Input} placeholder='Company/Organization' />
                        </Form.Group>
                        <Form.Group widths='equal'>
                            <Form.Field id='form-input-control-first-name' control={Input} placeholder='Email' />
                            <Form.Field id='form-input-control-last-name' control={Input} placeholder='Phone Number' />
                        </Form.Group>
                        <Form.Field id='form-textarea-control-opinion' control={TextArea} placeholder='Address' />
                    </Form>
                </div>
            </div>
            
        )
    }
}

export default StepThree;