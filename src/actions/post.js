import axios from 'axios'

export function createPost(data) {
  return dispatch => {
    const formData = new FormData()
    data.photos.forEach((photo, index) => [
      formData.append('photos', photo, `photo${index}.png`)
    ])
    formData.append('body', data.body)
    formData.append('user', data.user)
    return axios.post('http://54.146.216.128:4000/api/post', formData)
  }
}

export function getRecentPosts(pivot) {
  return dispatch => {
    return axios.get(`http://54.146.216.128:4000/api/post/recents/paginate/${pivot}`)
  }
}

export function getRecentPostsSecure(id, pivot) {
  return dispatch => {
    return axios.get(`http://54.146.216.128:4000/api/post/recents/paginate/${id}/${pivot}`)
  }
}

export function getBestPosts(pivot) {
  return dispatch => {
    return axios.get(`http://54.146.216.128:4000/api/post/best/paginate/${pivot}`)
  }
}

export function getBestPostsSecure(id, pivot) {
  return dispatch => {
    return axios.get(`http://54.146.216.128:4000/api/post/best/paginate/${id}/${pivot}`)
  }
}


// takes user id, and posts
export function upvote(data) {
  return dispatch => {
    return axios.post('http://54.146.216.128:4000/api/upvotes', data)
  }
}

export function deleteUpvote(data) {
  return dispatch => {
    return axios.delete(`http://54.146.216.128:4000/api/upvotes/${data.user}/${data.post}`)
  }
}

// takes user id, and posts
export function downvote(data) {
  return dispatch => {
    return axios.post('http://54.146.216.128:4000/api/downvotes', data)
  }
}

export function deleteDownvote(data) {
  return dispatch => {
    return axios.delete(`http://54.146.216.128:4000/api/downvotes/${data.user}/${data.post}`)
  }
}



