import React from 'react'
import PropTypes from 'prop-types'

const Episode = ({ episode }) => {
  const name = episode.name.length >= 20 ?
                `${episode.name.substring(0, 20)}...` :
                episode.name
  return (
    <div className="card">
      <img className="artwork" src={episode.artworkUrl100}/>
      <span className="title">{name}</span>
    </div>
  )
}

Episode.propTypes = {
  episode: PropTypes.object
}

const TopPodcasts = ({ podcasts }) => {
  return (
    <div className="login-list">
      {podcasts.map((episode, i) => <Episode key={i} episode={episode}/>)}
    </div>
  )
}

TopPodcasts.propTypes = {
  podcasts: PropTypes.array
}

export default TopPodcasts
