import React from 'react';
import Activity from '../components/Activity';
import Invoicing from '../components/Invoicing';

function ContainerRowA () {
  return (
    <div className='rowA'>
      <Activity />
      <Invoicing />
    </div>

  );
}

export default ContainerRowA;