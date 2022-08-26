import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { HomeIcon, HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import {
  HashtagIcon,
  BellIcon,
  EnvelopeIcon,
  ChatBubbleOvalLeftIcon,
  ArrowPathIcon,
  HeartIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline'

import Button from '../../components/Button'
import { addLike, addReTweet, addTweet, fetchTweets } from '../../api/tweets'
import Loader from '../../components/loader'

import './styles.css'

const Tweets = () => {
  const [tweets, setTweets] = useState([])
  const [tweetBody, setTweetBody] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const getAllTweets = async () => {
    const data = await fetchTweets()
    if (data) {
      setTweets(data)
    } else {
      navigate('/tweets/auth')
    }
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
      tempTweets[index].is_retweet = true
    } else {
      tempTweets[index].retweet_count = tempTweets[index].retweet_count - 1
      tempTweets[index].is_retweet = false
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
        <div className='flex flex-col w-1/4 mt-5'>
          <div className='flex flex-row w-30 m-4 mt-0 p-2 cursor-pointer'>
            <HomeIcon className='h-6 w-6' />
            <h2 className='font-bold text-sky ml-7 items-center text-xl'>Home</h2>
          </div>

          <div className='flex flex-row w-30 m-4 mt-0 p-2 cursor-pointer'>
            <HashtagIcon className='h-6 w-6' />
            <h2 className='font-bold text-sky ml-7 items-center text-xl'>Explore</h2>
          </div>

          <div className='flex flex-row w-30 m-4 mt-0 p-2 cursor-pointer'>
            <BellIcon className='h-6 w-6' />
            <h2 className='font-bold text-sky ml-7 items-center text-xl'>Notifications</h2>
          </div>

          <div className='flex flex-row w-30 m-4 mt-0 p-2 cursor-pointer'>
            <EnvelopeIcon className='h-6 w-6' />
            <h2 className='font-bold text-sky ml-7 items-center text-xl'>Messages</h2>
          </div>
        </div>

        <div className='flex flex-col w-2/4 feed'>
          <div>
            <h2 className='text-[20px] font-extrabold'>Home</h2>
          </div>

          <div className='tweetBox'>
            <div className='flex flex-col'>
              <div className='flex flex-row tweetbox-input'>
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

          {tweets.map((tweet, index) => (
            <div className='bg-white mt-2.5 rounded-sm p-7 border-b border-solid	border-inherit'>
              <div className='flex items-start text-sm'>
                <img
                  src='https://pbs.twimg.com/profile_images/1012717264108318722/9lP-d2yM_400x400.jpg'
                  alt=''
                  className='w-12 mr-3.5 rounded-full'
                />
                <div>
                  <span className='font-bold'>{tweet.user_name}</span>{' '}
                  <span className='font-normal text[#657786] ml-1'>
                    {new Date(tweet.created_at).toDateString()}
                  </span>
                  <p className='mt-1.5'>{tweet.body}</p>
                </div>
              </div>
              <div className='pl-[60px]'>
                <img src='https://pbs.twimg.com/media/Dgti2h0WkAEUPmT.png' alt='' />
              </div>
              <div className='tweet-info-counts flex ml-[60px] mr-[10px] mt-[10px]'>
                <div className='flex mr-[20px]'>
                  <ChatBubbleOvalLeftIcon className='h-6 w-6' />
                  <div className='flex mr-[20px]'>33</div>
                </div>

                <div
                  onClick={() => handleAddReTweet(tweet.id, index)}
                  className='flex mr-[20px] cursor-pointer'
                >
                  <ArrowPathIcon className={`h-6 w-6 ${tweet.is_retweet && 'text-sky'}`} />
                  <div className='flex mr-[23px]'>{tweet.retweet_count}</div>
                </div>

                <div
                  onClick={() => handleAddLikes(tweet.id, index)}
                  className='flex mr-[20px] cursor-pointer'
                >
                  {tweet.is_liked ? (
                    <HeartIconSolid className='h-6 w-6 text-red-700' />
                  ) : (
                    <HeartIcon className='h-6 w-6' />
                  )}
                  <div className='flex mr-[20px]'>{tweet.likes_count}</div>
                </div>

                <div className='flex mr-[20px]'>
                  <ArrowUpTrayIcon className='h-6 w-6' />
                </div>
              </div>
            </div>
          ))}
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
