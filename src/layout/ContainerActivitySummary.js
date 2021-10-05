
import { Grid } from "@material-ui/core"
import ChartSummary from "../components/ChartSummary";


function ContainerActivitySummary() {
  return (
    <div className='chartRow'>
    <Grid>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <ChartSummary
            value={ '323/322' }
            footer={<div> Customer Serviced </div>}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <ChartSummary
            value={ '1179/1256'}
            footer={<div> Route Stops Made </div>}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
          <ChartSummary
            value={ '252/128' }
            footer={<div> Items Installed </div>}
          />
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

export default ContainerActivitySummary;