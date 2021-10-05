import React from 'react';

import { Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export, Title } from 'devextreme-react/chart';

import { ServiceData } from './data.js';


class CustServicedChart extends React.Component {
  render() {
    return (
      <Chart className='chart' id="chart" 
        title="Customers Serviced"
        dataSource={ServiceData}
        onPointClick={this.onPointClick}
      >
        <Title 
        text="Customers Serviced"
        />
        <CommonSeriesSettings
          argumentField="Customers"
          type="bar"
          hoverMode="allArgumentPoints"
          selectionMode="allArgumentPoints"
        >
          <Label visible={false}>
            <Format type="fixedPoint" precision={0} />
          </Label>
        </CommonSeriesSettings>
        <Series
          argumentField="Customers"
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

export default CustServicedChart;