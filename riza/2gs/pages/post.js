import React from 'react'
import SinglePage from '../src/components/post/SinglePage'
import PagePreview from '../src/components/post/PagePreview'
import { formatDate } from '../src/utils/date'

import CONFIG from '../content/config-blog.json'
import SUMMARY_JSON from '../content/summary.json'

function Index(props) {
  let pageJson
  if (props.url.query) {
    pageJson = require(`../content${props.url.query.fullUrl}.json`)
  }
  return (
    <div>
      <style jsx global>{`
        .content a {
          color: #0365A5;
          text-decoration: none;
          border-bottom: 1px solid #DFDFDF;
          transition: all 300ms ease;
        }
        a:hover, a:focus {
          border-bottom-color: currentColor;
        }
        code {
          background-color: #EEE;
          line-height: 1;
          border-radius:2px;
          padding: 1px;
        }
        code:not(.hljs) {
          border: 1px solid #DDD;
        }
      `}</style>
      <SinglePage
        siteTitle={CONFIG.siteTitle}
        description={CONFIG.description}
        stylesheets={CONFIG.stylesheets}
        topLinks={CONFIG.topLinks}
        backgroundClass={CONFIG.backgroundClass}
        pageJson={pageJson}
        body={Body(pageJson)}
        copyright={CONFIG.copyright}
        siteId={CONFIG.siteId}
      />
    </div>
  )
}

function Body(props) {
  return (
    <div className="content center mw7 pa3 pa4-ns">
      <div dangerouslySetInnerHTML={{ __html: props.bodyHtml }}></div>
    </div>
  )
}

export default Index