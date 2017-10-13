import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import MenuWorks from '../MenuWorks'
import glamorous from 'glamorous'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'

const mediaQueries = {
	phone: '@media only screen and (max-width: 768px)',
    phone1: '@media only screen and (max-width: 500px)',
}

const HeroDiv = glamorous.div({
  '& h1':{
      fontFamily:"'Saira', sans-serif"
  },
  '& h4':{
      fontFamily:"'Encode Sans', sans-serif"
  },
  '& div':{
      fontFamily:"'Encode Sans', sans-serif"
  },
})

function Hero(props) {
  return (
    <div>
      <HeroDiv>
      <MenuWorks />
    <div className={`relative tc ${props.backgroundClass}`}>
      <div className="mw7 center white pv4">
        <div className="pv4">
          <h1 className="f1 normal lh-title ma0 pa0">
            <Link prefetch href="/">
              <a className="white no-underline" href="/">
                {props.siteTitle}
              </a>
            </Link>
          </h1>
          <h4 className="normal o-70 ma0 pt2 pb3 ph1">
            {props.subtitle}
          </h4>
          <div>
            {props.topLinks && props.topLinks.length > 0 && (
              props.topLinks.map((link, i) => {
                return (
                  <Link href={link.href} key={i}>
                    <a className="dib f6 white no-underline pa1 ma1" key={i}>
                      {link.text}
                    </a>
                  </Link>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
    </HeroDiv>
    </div>
  )
}

Hero.propTypes = {
  backgroundClass: PropTypes.string,
  topLinks: PropTypes.array,
  siteTitle: PropTypes.string,
  subtitle: PropTypes.string,
}

Hero.defaultProps = {
  backgroundClass: 'bg-mid-gray',
  topLinks: [],
  siteTitle: '',
  subtitle: '',
}

export default Hero
