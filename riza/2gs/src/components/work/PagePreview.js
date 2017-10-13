import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import glamorous from 'glamorous'
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment, Icon } from 'semantic-ui-react'

const mediaQueries = {
	phone: '@media only screen and (max-width: 768px)',
    phone1: '@media only screen and (max-width: 500px)',
}

const MenuDiv = glamorous.div({
    '& a.b.black': { fontFamily:"'Saira', sans-serif",   [mediaQueries.phone]: {
        
      },
    [mediaQueries.phone1]: {
        
    }
    },
    '& p': { fontFamily:"'Encode Sans', sans-serif",   [mediaQueries.phone]: {
        
      },
    [mediaQueries.phone1]: {
        
    }
    },
    '& small': { fontFamily:"'Encode Sans', sans-serif",   [mediaQueries.phone]: {
        
      },
    [mediaQueries.phone1]: {
        
    }
    },
})
function PageLink(props) {
  return (
    <Link href={`work?fullUrl=${props.href}`} as={props.href}>
      <a className={`b black o-80 glow no-underline lh-solid ${props.className}`}>
        { props.children }
      </a>
    </Link>
  )
}

function PagePreview(props) {
  return (
    <div className="mb4 pb2 bb b--light-gray">
      <MenuDiv>
      <PageLink href={props.href} className="f3">
        { props.title }
      </PageLink>
      {props.preview && (
        <p className="mv1 o-60">
          { props.preview }
          <PageLink href={props.href}>
            <span> »</span>
          </PageLink>
        </p>
      )}
      {props.date && (
        <small className="db ttu o-40">
          <time key={ props.date }>
            { props.date }
          </time>
        </small>
      )}
    </MenuDiv>
    </div>
  )
}

PagePreview.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  preview: PropTypes.string,
  date: PropTypes.string,
}

export default PagePreview
