/* global process */
import allConfig from '../config.json'
const config = allConfig[process.env.NODE_ENV || 'development']

/* Action types */
export const SAVE_TOP = 'GET_TOP'

/* Action creators */
export const savePodcasts = podcasts => {
  return {
    type: SAVE_TOP,
    podcasts
  }
}


/* Async action creators */
export const getTopPodcasts = (num=15) => dispatch => {
  const url = config.apiUrl + `/podcasts/top/${num}`
  return fetch(url, {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(podcasts => dispatch(savePodcasts(podcasts)))
}

