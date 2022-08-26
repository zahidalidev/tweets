import instance from './index'

export const fetchTweets = (email, password) =>
  instance
    .get('/api/v1/tweets')
    .then(({ data }) => {
      return data
    })
    .catch(() => '')

export const addTweet = (body) =>
  instance
    .post('/api/v1/tweets', {
      body,
    })
    .then((data) => {
      return data
    })
    .catch(() => '')


export const addReTweet = (id) =>
  instance
    .post(`/api/v1/tweets/${id}/retweet`)
    .then((data) => {
      return data
    })
    .catch(() => '')

export const addLike = (id) =>
  instance
    .post(`/api/v1/likes?likeable_id=${id}&likeable_type=Tweet`,)
    .then((data) => {
      return data
    })
    .catch(() => '')
