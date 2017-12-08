import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import mapStateToProps from '../utils/redux'

import Navbar from './Navbar.jsx';

import '../css/Profile.css';

class Profile extends Component {

  state = {
    hasPicture: false,
    profilePicture: '',
    posts: [],
    fullName: ''
  }

  componentWillMount = () => {
    const userId = this.props.match.params[0]
    if(userId){
      axios.get(`http://localhost:4000/api/user/${userId}`)
      .then(res => {
        const { profile_picture } = res.data
        const fullName = `${res.data.firstName} ${res.data.lastName}`

        if(profile_picture.length > 2 ) {
          this.setState({ hasPicture: true, profile_picture })
        }

        axios.get(`http://localhost:4000/api/user/${userId}`)
        .then(res => {
          this.setState({ fullName })
        })
      })
    } else {
      axios.get(`http://localhost:4000/api/user/${this.props.user.info.id}`)
      .then(res => {
        const { profile_picture } = res.data
        const fullName = `${res.data.firstName} ${res.data.lastName}`
  
        if(profile_picture.length > 2 ) {
          this.setState({ hasPicture: true, profile_picture })
        }
  
        axios.get(`http://localhost:4000/api/user/${this.props.user.info.id}`)
        .then(res => {
          this.setState({ fullName })
        })
      })
    }
  }
  
  render() {
    return (
      <div className='profileContainer'>
        <Navbar />
        <br/><br/><br/>
        <div className='profileContent'>
          <span className='profileBubble'>
            {this.props.user.info.firstName[0]}
          </span>
          <br/><br/>
          <h3>{this.state.fullName}</h3>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(Profile)