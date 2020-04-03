import React from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import {Link} from 'gatsby'



import * as S from './styled'

const trackClick = (item) => {
  ReactGA.event({
    category: 'Category',
    action: 'click',
    label: `Category - ${item}`
  })
}

const Category = ({ categories, isLink }) => {
  return (
    <S.Tags>
      <S.TagIcon />
      {categories.map((category, i) => (
        <S.TagHolder key={i}>
          { isLink ? (
            <Link 
              to={`blog?query=` + category}
              cover
              direction="down"
              duration={1}
              onClick={() => trackClick(category)}
              >
                <S.TagItem>{category}</S.TagItem>
            </Link>
            ) : (<S.TagItem>{category}</S.TagItem>)
          }
        </S.TagHolder>
      ))}
    </S.Tags>
  )
}

Category.propTypes = {
  categories: PropTypes.node.isRequired,
  isLink: PropTypes.bool
}

export default Category