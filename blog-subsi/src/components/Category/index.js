import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'

import {Link} from 'gatsby'

import * as S from './styled'

const trackClick = (item) => {
  ReactGA.event({
    category: 'Tag',
    action: 'click',
    label: `Tag - ${item}`
  })
}

const Category = ({ tags, isLink }) => {
  return (
    <S.Tags>
 
      {tags.map((tag, i) => (
        <S.TagHolder key={i}>
          { isLink ? (
            <Link 
              to={`blog?query=` + tag}
              cover
              direction="down"
              duration={1}
              onClick={() => trackClick(tag)}>
                <S.TagItem>{tag}</S.TagItem>
            </Link>
            ) : (<S.TagItem>{tag}</S.TagItem>)
          }
        </S.TagHolder>
      ))}
    </S.Tags>
  )
}

Category.propTypes = {
  tags: PropTypes.node.isRequired,
  isLink: PropTypes.bool
}

export default Category