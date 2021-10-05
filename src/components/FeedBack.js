import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function FeedBack() {
  return (
    <div className='halfCard'>
      <div className='containerText'>
        <FontAwesomeIcon icon={solid('comments')} size='2x' className='faIcon'></FontAwesomeIcon>
        We want your feedback
      </div>
    </div>
  )
}

export default FeedBack;