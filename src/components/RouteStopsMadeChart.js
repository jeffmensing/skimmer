import React from 'react';

import { Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export } from 'devextreme-react/chart';

import { RouteStopData } from './data.js';

class RouteStopsMadeChart extends React.Component {
  render() {
    return (
      <Chart className='chart' id="chart" 
        title="Route Stops Made"
        dataSource={RouteStopData}
        onPointClick={this.onPointClick}
      >
        <CommonSeriesSettings
          argumentField="Stops"
          type="bar"
          hoverMode="allArgumentPoints"
          selectionMode="allArgumentPoints"
        >
          <Label visible={false}>
            <Format type="fixedPoint" precision={0} />
          </Label>
        </CommonSeriesSettings>
        <Series
          argumentField="Stops"
          valueField="This"
          name="This"
          color="#61d019"     
        />
        <Series
          valueField="Last"
          name="Last"
          color="#42a5f5"
        />
        <Legend verticalAlignment="bottom" horizontalAlignment="center"></Legend>
        <Export enabled={true} />
      </Chart>

    )
  }
}

export default RouteStopsMadeChart;