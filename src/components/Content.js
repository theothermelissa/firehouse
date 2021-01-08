import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import remarkHTML from 'remark-html'

const toHTML = value => remark()
  .use(remarkHTML)
  .processSync(value)
  .toString()

  console.log("toHTML: ", toHTML("###something else"))

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: toHTML(content) }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
