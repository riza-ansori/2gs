import React from 'react'
import Layout from '..//Layout'
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
    Tab,
} from 'semantic-ui-react';

import App from '../masonry/App.js'
import Exterior from '../masonry/exterior.js'
import Interior from '../masonry/interior.js'
import Photography from '../masonry/photography.js'
import Animation from '../masonry/animation.js'
import Virtual from '../masonry/Virtual.js'

const panes = [
  { menuItem: 'ALL', render: () => <Tab.Pane attached={false}><App/></Tab.Pane> },
  { menuItem: 'EXTERIOR', render: () => <Tab.Pane attached={false}><Exterior/></Tab.Pane> },
  { menuItem: 'INTERIOR', render: () => <Tab.Pane attached={false}><Interior/></Tab.Pane> },
  { menuItem: 'PHOTOGRAPHY', render: () => <Tab.Pane attached={false}><Photography/></Tab.Pane> },
  { menuItem: 'ANIMATION', render: () => <Tab.Pane attached={false}><Animation/></Tab.Pane> },
  { menuItem: 'VR', render: () => <Tab.Pane attached={false}><Virtual/></Tab.Pane> },
]

const tabPortfolio = () => (
  <div className='wrapper-tabmenu'>
    <Tab menu={{ text: true }} panes={panes} />
  </div>
)

export default tabPortfolio