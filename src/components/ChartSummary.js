import { Card, CardContent, Typography, Divider } from "@material-ui/core";
import React from "react";

function ChartSummary({ title, value, footer }) {
  return (
    <>
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            color="textPrimary"
          >
          </Typography>
          <Divider />
          <Typography variant="h3" color="textPrimary">
            {value}
          </Typography>
          <div>{footer}</div>
        </CardContent>
      </Card>
    </>
  );
}

export default ChartSummary;