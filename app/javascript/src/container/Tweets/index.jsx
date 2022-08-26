import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

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
    }else {
      navigate('/tweets/auth')
    }
  }

  const handleAddTweet = async () => {
    setLoading(true)
    const res = await addTweet(tweetBody)
    const tempTweets = [...tweetBody]
    tempTweets.push({

    })
    if (res.status == 200) {
      toast.success('Tweet Posted')
    }else {
      toast.error('Error, Tweet not added')
    }
    setLoading(false)
  }

  const handleAddReTweet = async (id, index) => {
    const res = await addReTweet(id)
    const tempTweets = [...tweets]
    if(res.status == 200){
      tempTweets[index].retweet_count  = tempTweets[index].retweet_count + 1
    }else {
      tempTweets[index].retweet_count  = tempTweets[index].retweet_count - 1
    }
    setTweets(tempTweets)
  }

  const handleAddLikes = async (id) => {
    const res = await addLike(id)
    if(res.status == 200){
      tempTweets[index].likes_count  = tempTweets[index].likes_count + 1
    }else {
      tempTweets[index].likes_count  = tempTweets[index].likes_count - 1
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
          <div className='flex flex-row w-30 m-4 mt-0 p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path d='M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z' />
              <path d='M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z' />
            </svg>

            <h2 className='font-bold text-sky ml-7 items-center text-xl'>Home</h2>
          </div>

          <div className='flex flex-row w-30 m-4 mt-0 p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-6 h-6'
            >
              <path
                fillRule='evenodd'
                d='M11.097 1.515a.75.75 0 01.589.882L10.666 7.5h4.47l1.079-5.397a.75.75 0 111.47.294L16.665 7.5h3.585a.75.75 0 010 1.5h-3.885l-1.2 6h3.585a.75.75 0 010 1.5h-3.885l-1.08 5.397a.75.75 0 11-1.47-.294l1.02-5.103h-4.47l-1.08 5.397a.75.75 0 01-1.47-.294l1.02-5.103H3.75a.75.75 0 110-1.5h3.885l1.2-6H5.25a.75.75 0 010-1.5h3.885l1.08-5.397a.75.75 0 01.882-.588zM10.365 9l-1.2 6h4.47l1.2-6h-4.47z'
                clipRule='evenodd'
              />
            </svg>

            <h2 className='font-bold text-sky ml-7 items-center text-xl'>Explore</h2>
          </div>

          <div className='flex flex-row w-30 m-4 mt-0 p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
              />
            </svg>

            <h2 className='font-bold text-sky ml-7 items-center text-xl'>Notifications</h2>
          </div>

          <div className='flex flex-row w-30 m-4 mt-0 p-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
              />
            </svg>

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
                  <svg
                    className='text-[#657786] mr-[10px]'
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    aria-hidden='true'
                  >
                    <path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'></path>
                  </svg>
                  <div className='flex mr-[20px]'>33</div>
                </div>

                <div onClick={() => handleAddReTweet(tweet.id, index)} className='flex mr-[20px] cursor-pointer'>
                  <svg
                    className='text-[#657786] mr-[10px] feather feather-repeat sc-dnqmqq jxshSx'
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    aria-hidden='true'
                  >
                    <polyline points='17 1 21 5 17 9'></polyline>
                    <path d='M3 11V9a4 4 0 0 1 4-4h14'></path>
                    <polyline points='7 23 3 19 7 15'></polyline>
                    <path d='M21 13v2a4 4 0 0 1-4 4H3'></path>
                  </svg>
                  <div

                    className='flex mr-[23px]'
                  >
                    {tweet.retweet_count}
                  </div>
                </div>

                <div className='flex mr-[20px]'>
                  <svg
                    className='text-[#657786] mr-[10px] feather feather-heart sc-dnqmqq jxshSx'
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    aria-hidden='true'
                  >
                    <path d='M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'></path>
                  </svg>
                  <div
                    onClick={() => handleAddLikes(tweet.id, index)}
                    className='flex mr-[20px] cursor-pointer'
                  >
                    {tweet.likes_count}
                  </div>
                </div>

                <div className='flex mr-[20px]'>
                  <svg
                    className='text-[#657786] mr-[10px] feather feather-send sc-dnqmqq jxshSx'
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    stroke-width='2'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    aria-hidden='true'
                  >
                    <line x1='22' y1='2' x2='11' y2='13'></line>
                    <polygon points='22 2 15 22 11 13 2 9 22 2'></polygon>
                  </svg>
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
