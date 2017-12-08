import axios from 'axios'
import setAuthorizationToken from '../api/setAuth'
import jwt from 'jsonwebtoken'
import { setCurrentUser } from './login.js'

export function signup(data) {
  return dispatch => {
    return axios.post('http://localhost:4000/api/signup', data) // Tries to add to DB
    .then(res => {
      const token = res.data.token
      localStorage.setItem('jwtToken', token)
      setAuthorizationToken(token)
      dispatch(setCurrentUser(jwt.decode(token)))
    })
  }
}