import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Home = ({name}) => {
  return (
    <div>
      <div>
        Hi {name || 'there'}!
      </div>
    </div>
  )
}

Home.propTypes = {
  name: PropTypes.string
}

const ConnectedHome = connect(
  state => ({
    top12: state.podcast.top12,
    name: state.user.name
  })
)(Home)

export default ConnectedHome
