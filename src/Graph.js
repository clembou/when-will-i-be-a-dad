import * as React from 'react';
import { Line as LineChart } from 'react-chartjs';


class Graph extends React.Component {

  constructor(props) {
    super(props);
  }

  getDataset() {
    return {
      labels: this.props.labels,
      datasets: [
        {
          label: this.props.seriesTitle,
          fill: false,
          lineTension: 0.1,
          backgroundColor: 'rgba(75,192,192,0.4)',
          borderColor: 'rgba(75,192,192,1)',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: 'rgba(75,192,192,1)',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(75,192,192,1)',
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 1,
          pointHitRadius: 1,
          data: this.props.data,
          spanGaps: false,
        },
      ],
    };
  }

  render() {
    return (<LineChart
      data={this.getDataset()}
      width="800"
      height="600"
    />);
  }
}

export default Graph;
