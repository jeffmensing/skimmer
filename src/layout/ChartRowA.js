import React from 'react';
import CustServicedChart from '../components/CustServicedChart';
import ItemsInstalledChart from '../components/ItemsInstalledChart';
import RouteStopsMadeChart from '../components/RouteStopsMadeChart';

function ChartRowA () {
  return (
    <div className='chartRow'>
      <CustServicedChart />
      <RouteStopsMadeChart />
      <ItemsInstalledChart />
    </div>
  );
}

export default ChartRowA;