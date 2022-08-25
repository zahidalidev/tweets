import React from 'react'

import './styles.css'

const Loader = ({ show }) =>
  !show ? null : (
    <div className='backdrop'>
      <div className='loading-spinner-wrapper'>
        <div className='loading-spinner'>
          <div></div>
        </div>
      </div>
    </div>
  )

export default Loader