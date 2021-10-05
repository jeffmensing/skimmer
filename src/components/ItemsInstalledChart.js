import React from 'react';

import { Chart, Series, CommonSeriesSettings, Label, Format, Legend, Export, Title, Font } from 'devextreme-react/chart';

import { ItemsInstalledData } from './data.js';


class ItemsInstalledChart extends React.Component {
  render() {
    return (
      <Chart className='chart' id="chart" 
        title="Items Installed"
        dataSource={ItemsInstalledData}
        onPointClick={this.onPointClick}
      >
        <CommonSeriesSettings
          argumentField="Installs"
          type="bar"
          hoverMode="allArgumentPoints"
          selectionMode="allArgumentPoints"
        >
          <Label visible={false}>
            <Format type="fixedPoint" precision={0} />
          </Label>
          <Title
             horizontalAlignment="center"
             font color="black" 
             text="Items Installed"
              />
        </CommonSeriesSettings>
        <Series
          argumentField="Installs"
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

export default ItemsInstalledChart;