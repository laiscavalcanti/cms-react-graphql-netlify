import React from 'react'
import PropTypes from 'prop-types'



const BoxHandler = ({ children }) => {
  return (
    {children}
  )
}

BoxHandler.propTypes = {
  children: PropTypes.node.isRequired
}

export default BoxHandler