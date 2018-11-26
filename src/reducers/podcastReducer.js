import { SAVE_TOP } from '../actions/podcastActions'

const defaultState = {
  topPodcasts: []
}

export default function podcast(state = defaultState, action) {
  switch (action.type) {
    case SAVE_TOP:
      return {...state, topPodcasts: action.podcasts}
    default:
      return state
  }
}
