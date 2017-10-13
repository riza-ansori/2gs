import React from 'react'
import Page from '../src/components/work/Page'
import PagePreview from '../src/components/work/PagePreview'
import { formatDate } from '../src/utils/date'
import { makeUrl, filterWorks } from '../src/utils/content'

import CONFIG from '../content/config-works.json'
import SUMMARY_JSON from '../content/summary.json'

function Index(props) {
  return (
    <div>
      <Page
        siteTitle={CONFIG.siteTitle}
        description={CONFIG.description}
        stylesheets={CONFIG.stylesheets}
        topLinks={CONFIG.topLinks}
        backgroundClass={CONFIG.backgroundClass}
        body={Body({ summaryJson: SUMMARY_JSON })}
        copyright={CONFIG.copyright}
        siteId={CONFIG.siteId}
      />
    </div>
  )
}

function Body(props) {
  const postList = filterWorks(props.summaryJson)
  console.log(props)
  console.log(postList)
  
  return (
    <div className="center mw7 pa3 pa4-ns">
      {postList.map((article, i) => {
        const href = makeUrl(article)
        const date = formatDate(article.date)
        return (
          <PagePreview
            title={article.title}
            preview={article.preview}
            href={href}
            key={i}
            date={date}
          />
        )
      })}
    </div>
  )
}

export default Index