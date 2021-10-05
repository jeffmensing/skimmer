import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

function Header() {
  return (
    <header style={headerStyle}>
      <div>
        <div style={nameDivStyle}>
          <h1 style={nameStyle}>SKIMMER</h1>
        </div>
        <div style={headerMenuDiv}>
          <div>
            <FontAwesomeIcon icon={solid('star')} style={headerItemStyle} />
            <>Earn $100  </>
            <FontAwesomeIcon icon={solid('circle-play')} style={headerItemStyle} />
            <>Videos  </>
            <FontAwesomeIcon icon={solid('circle-question')} style={headerItemStyle} />
            <>Support  </>
            <FontAwesomeIcon icon={solid('right-from-bracket')} style={headerItemStyle} />
            <>Log Out  </>
          </div>
        </div>
      </div>
    </header>
  )
}


  const headerItemStyle = {
    paddingLeft: '5px',
  }

  const headerMenuDiv = {
    position: 'relative',
    float: 'right',
    width: '370px',
    paddingTop: '12px',
    
  }

  const nameStyle = {
    marginLeft: '15px',
    height: '60px',
  }

  const nameDivStyle = {
    position: 'relative',
    float: 'left',
    width: '170px',
    background: '#2196F3',
  }

  const headerStyle = {
    background: '#42A5F5',
    color: '#fff',
    height: '50px',
  }

export default Header;