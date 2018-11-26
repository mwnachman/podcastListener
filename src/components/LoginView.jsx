import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getTopPodcasts } from '../actions/podcastActions'
import TopPodcasts from './TopPodcasts.jsx'

class LoginView extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getTopPodcasts()
  }

  render() {
    return (
      <TopPodcasts podcasts={this.props.topPodcasts}/>
    )
  }
}

LoginView.propTypes = {
  topPodcasts: PropTypes.array,
  getTopPodcasts: PropTypes.func
}

const ConnectedLoginView = connect(
  state => ({
    topPodcasts: state.podcast.topPodcasts
  }),
  dispatch => ({
    getTopPodcasts: () => dispatch(getTopPodcasts())
  })
)(LoginView)

export default ConnectedLoginView
