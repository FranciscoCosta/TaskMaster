import React from 'react'
import Image from 'next/image'

import './AiResume.scss'

const AiResume = () => {
  return (
    <div className='AiResume'>
      <div className="AiResume__container">
        <div className='AiResume__icon'>
          <Image src="/ai.png" alt="ai" fill />
        </div>
          <p className='AiResume__description'>
            Hoje foi desenvolvido o front-end do site da empresa X com a tecnologia Y.
          </p>
      </div>
    </div>
  )
}

export default AiResume