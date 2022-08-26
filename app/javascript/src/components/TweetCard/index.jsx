import React from 'react'
import { HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid'
import {
  ChatBubbleOvalLeftIcon,
  ArrowPathIcon,
  HeartIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline'

const TweetCard = ({ tweets, handleAddReTweet, handleAddLikes }) =>
  tweets.map((tweet, index) => (
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
        <img src='https://pbs.twimg.com/media/Dgti2h0WkAEUPmT.png' alt='' className='mt-3'  />
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
          <ArrowPathIcon className={`h-6 w-6 ${tweet.is_retweet_by_user && 'text-sky'}`} />
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
  ))

export default TweetCard
