import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button'
import { addLike, addReTweet, addTweet, fetchTweets } from '../../api/tweets'
import Loader from '../../components/loader'

import './styles.css'
import SideBar from '../../components/SideBar'
import TweetCard from '../../components/TweetCard'

const Tweets = () => {
  const [tweets, setTweets] = useState([])
  const [tweetBody, setTweetBody] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const getAllTweets = async () => {
    setLoading(true)
    const data = await fetchTweets()
    if (data) {
      setTweets(data)
    } else {
      navigate('/tweets/auth')
    }
    setLoading(false)
  }

  const handleAddTweet = async () => {
    setLoading(true)
    const res = await addTweet(tweetBody)
    if (res.status == 200) {
      toast.success('Tweet Posted')
      await getAllTweets()
    } else {
      toast.error('Error, Tweet not added')
    }
    setLoading(false)
  }

  const handleAddReTweet = async (id, index) => {
    const res = await addReTweet(id)
    const tempTweets = [...tweets]
    if (res.data == 'Retweeted successfully') {
      tempTweets[index].retweet_count = tempTweets[index].retweet_count + 1
      tempTweets[index].is_retweet_by_user = true
    } else {
      if (tempTweets[index].retweet_count > 0)
        tempTweets[index].retweet_count = tempTweets[index].retweet_count - 1
      tempTweets[index].is_retweet_by_user = false
    }
    setTweets(tempTweets)
  }

  const handleAddLikes = async (id, index) => {
    const res = await addLike(id)
    const tempTweets = [...tweets]
    if (res.data == 'Tweet liked') {
      tempTweets[index].likes_count = tempTweets[index].likes_count + 1
      tempTweets[index].is_liked = true
    } else {
      if (tempTweets[index].likes_count > 0)
        tempTweets[index].likes_count = tempTweets[index].likes_count - 1
      tempTweets[index].is_liked = false
    }
    setTweets(tempTweets)
  }

  useEffect(() => {
    getAllTweets()
  }, [])

  return (
    <div className='flex justify-center w-screen'>
      <Loader show={loading} />
      <div className='flex flex-row justify-center w-9/12	mt-10'>
        <SideBar />

        <div className='flex flex-col w-2/4 feed'>
          <div>
            <h2 className='text-[20px] font-extrabold'>Home</h2>
          </div>
          <div className='tweetBox'>
            <div className='flex flex-col'>
              <div className='tweetbox-input'>
                <img
                  src='https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'
                  alt=''
                />
                <textarea
                  value={tweetBody}
                  onChange={(e) => setTweetBody(e.target.value)}
                  placeholder="What's happening?"
                  type='text'
                  className='w-4/5 h-14 ml-4 outline-0 border-0 border-transparent focus:border-transparent focus:ring-0 rounded-lg p-2'
                />
              </div>
              <div className='flex w-full justify-end pr-10 border-b-8 border-inherit pb-5'>
                <Button
                  textColor='text-white'
                  width='w-20'
                  background='bg-sky'
                  name='Tweet'
                  onSubmit={handleAddTweet}
                />
              </div>
            </div>
          </div>

          <TweetCard
            tweets={tweets}
            handleAddReTweet={handleAddReTweet}
            handleAddLikes={handleAddLikes}
          />
        </div>

        <div className='flex flex-col w-1/4'>
          <div className='widgetContainer'>
            <h2>What's happening?</h2>
            <blockquote>
              <p lang='en' dir='ltr'>
                Sunsets don&#39;t get much better than this one over
              </p>
            </blockquote>
            <script async src='https://platform.twitter.com/widgets.js' charset='utf-8'></script>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tweets
