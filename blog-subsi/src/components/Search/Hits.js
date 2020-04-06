import React from 'react'
import PropTypes from 'prop-types'

import PostItem from '../PostItem'

const Hit = (props) => {
    const { hit } = props

    return(
        <PostItem
            slug={hit.fields.slug}
            background={hit.background}
            title={hit.title}
            date={hit.date}
            description={hit.description}
            tags={hit.tags}
    />
    )
}

Hit.propTypes = {
    hit: PropTypes.object.isRequired
  }

export default Hit
