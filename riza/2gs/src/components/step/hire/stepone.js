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
    TextArea,
    Checkbox
} from 'semantic-ui-react';
import glamorous from 'glamorous'


const mediaQueries = {
    tablet: '@media screen and (max-width: 767px)',
    hp600: '@media screen and (max-width: 600px)',
    hp505: '@media screen and (max-width: 505px)',
}

const GlobalDiv = glamorous.div({
})

class StepOne extends Component {

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
                <p>Kindly tell us what types of service you need for your brand. The details you submit will be used to accurately provide you with an estimate. But if you don’t feel like filling out forms right now, we welcome you to email us anytime at marketing@2gs.co.</p>
                <div className='form-step'>
                    <Form.Field
                        control={Checkbox}
                        label={{ children: 'Exterior' }}
                    />
                    <Form.Field
                        control={Checkbox}
                        label={{ children: 'Interior' }}
                    />
                    <Form.Field
                        control={Checkbox}
                        label={{ children: 'Animation' }}
                    />
                    <Form.Field
                        control={Checkbox}
                        label={{ children: 'Photography' }}
                    />
                </div>
            </div>
            
        )
    }
}

export default StepOne;