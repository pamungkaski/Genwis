/**
 * Created by iampamungkas on 7/24/17.
 */
import Axios from 'axios'

export const REQUEST_ITINERARY = 'REQUEST_ITINERARY'
export const RECEIVE_ITINERARY = 'RECEIVE_ITINERARY'
export const FAIL_ITINERARY = 'FAIL_ITINERARY'
export const REQUEST_TOP_ITINERARY = 'REQUEST_TOP_ITINERARY'
export const RECEIVE_TOP_ITINERARY = 'RECEIVE_TOP_ITINERARY'
export const REQUEST_REGISTER = 'REQUEST_REGISTER'
export const RECEIVE_REGISTER = 'RECEIVE_REGISTER'
export const REQUEST_LOGIN = 'REQUEST_LOGIN'
export const RECEIVE_LOGIN = 'RECEIVE_LOGIN'
export const SELECT_DETAIL = 'SELECT_DETAIL'
export const SEARCH_DETAIL = 'SEARCH_DETAIL'


export function selectDetail(detail) {
  // console.log(detail)
  return {
    type: SELECT_DETAIL,
    detail,
  }
}

// export function searchDetail(detail) {
//   console.log(detail)
//   return {
//     type: SEARCH_DETAIL,
//     detail,
//   }
// }

function requestItinerary(detail) {
  return {
    type: REQUEST_ITINERARY,
    detail,
  }
}

function receiveItinerary(detail, data) {
  return {
    type: RECEIVE_ITINERARY,
    response: {
      detail,
      itinerary: data,
    },
  }
}
function failItinerary() {
  return {
    type: FAIL_ITINERARY,
  }
}

export function fetchItineray(detail) {
  const headers = {
    Authentication: 'WshVVPQWJjdjOZckJvsdOiVGwp3KkMNQvPNCjXehlMVEt4s7EYN3lvybTs8TWwPPZvwLvensenLo6cOHVR01inbulpZgXcaQCwpenKU6CgVW53YiZt34mdBY',
    'Content-Type': 'text/plain',
  }
  // console.log(detail)
  return (dispatch) => {
    dispatch(requestItinerary(detail))
    // console.log('getting detail',detail)
    // delete detail.cityName;
    // delete detail.chooseStartDate;
    // console.log(typeof(detail.budget))
    // console.log('tosend',JSON.stringify(detail))
    const httpClient = Axios.create()
    const seconds = 10
    httpClient.defaults.timeout = seconds * 1000 //timed out 10 seconds, if not receiving yet, show error
    return httpClient.post('http://api.generatorwisata.com/api/itinerary', JSON.stringify(detail), { headers })
      .then(response => dispatch(receiveItinerary(detail, response.data)))
      .catch(err => {
          // console.log('masukerror',err)
      dispatch(failItinerary())
  })
  }
}

function requestRegister(detail) {
  return {
    type: RECEIVE_REGISTER,
    detail,
  }
}

function receiveRegister(detail, data) {
  return {
    type: RECEIVE_REGISTER,
    detail,
    data,
  }
}

export function register(detail) {
  return (dispatch) => {
    dispatch(requestRegister(detail))
    return Axios.post('http://api.generatorwisata.com/api/user', JSON.stringify(detail))
      .then(response => dispatch(receiveRegister(detail, response.data)))
  }
}

function requestLogin(detail) {
  return {
    type: REQUEST_LOGIN,
    detail,
  }
}

function receiveLogin(detail, data) {
  return {
    type: RECEIVE_LOGIN,
    detail,
    data,
  }
}

export function login(detail) {
  return (dispatch) => {
    dispatch(requestLogin(detail))
    return Axios.post('http://api.generatorwisata.com/api/users/login', JSON.stringify(detail))
      .then(response => dispatch(receiveLogin(detail, response.data)))
      .catch((err) => {
        console.log(err)
      })
  }
}

export const SHOWN_ITINERARY = 'SHOWN_ITINERARY'
export const showItinerary = number => ((dispatch) => {
  dispatch({
    type: SHOWN_ITINERARY,
    number,
  })
})

export const DELETE_ITINERARY = 'DELETE_ITINERARY'
export const deleteItinerary = number => ((dispatch) => {
  dispatch({
    type: DELETE_ITINERARY,
    number,
  })
})

export const IS_PREVIEW = 'IS_PREVIEW'
export const isPreview = ans => ((dispatch) => {
  dispatch({
    type: IS_PREVIEW,
    ans,
  })
})

export const DELETE = 'DELETE'
export const ngeDelete = () => ((dispatch) => {
  dispatch({
    type: DELETE,
  })
})

export const NOT_NEW = 'NOT_NEW'
export const notNew = () => ((dispatch) => {
  dispatch({
    type: NOT_NEW,
  })
})

//export const SEARCH_DETAIL = 'SEARCH_DETAIL'
export const idS = (detail) => ((dispatch) => {
  dispatch({
    type: SEARCH_DETAIL,
    detail,
  })
})

export const SELECTED_KOOR = 'SELECTED_KOOR'
export const koorToMapa = (detail) => ((dispatch) => {
  dispatch({
    type: SELECTED_KOOR,
    detail,
  })
})

// function receiveTopItinerary(detail, data) {
//   return {
//     type: RECEIVE_TOP_ITINERARY,
//     response: {
//       detail,
//       itinerary: data,
//     },
//   }
// }
//
// function requestTopItinerary(detail) {
//   return {
//     type: REQUEST_TOP_ITINERARY,
//     detail,
//   }
// }
//
// export function fetchTopItineray(detail) {
//   const headers = {
//     Authentication: 'WshVVPQWJjdjOZckJvsdOiVGwp3KkMNQvPNCjXehlMVEt4s7EYN3lvybTs8TWwPPZvwLvensenLo6cOHVR01inbulpZgXcaQCwpenKU6CgVW53YiZt34mdBY',
//     'Content-Type': 'text/plain',
//   }
//   //console.log(detail)
//   return (dispatch) => {
//     dispatch(requestTopItinerary(detail))
//     return Axios.post('http://api.generatorwisata.com/api/attractions/top', JSON.stringify(detail), { headers })
//       .then(response => dispatch(receiveTopItinerary(detail, response.data)))
//       .catch(err => console.log(err))
//   }
// }
