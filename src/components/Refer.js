import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Refer() {
  return (
    <div className='halfCard'>
      <div className='containerText'>
        <FontAwesomeIcon icon={solid('comments')} size='2x' className='faIcon' ></FontAwesomeIcon>
        Refer Skimmer earn $100!
      </div>
    </div>
  )
}

export default Refer;