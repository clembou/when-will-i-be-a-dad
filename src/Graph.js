import * as React from 'react';
import { Line as LineChart } from 'react-chartjs';


class Graph extends React.Component {

  getDataset() {
    return {
      labels: this.props.labels,
      datasets: [
        {
          label: `cumulative ${this.props.seriesTitle}`,
          data: this.props.cumulativeData,
          fillColor: 'rgba(151,187,205,0.2)',
          pointColor: 'rgba(151,187,205,1)',
          pointHighlightFill: '#fff',
          pointHighlightStroke:'rgba(151,187,205,1)',
          pointStrokeColor: '#fff',
          strokeColor: 'rgba(151,187,205,1)',
        },
        {
          label: this.props.seriesTitle,
          data: this.props.data,
          fillColor: 'rgba(220,220,220,0.2)',
          pointColor: 'rgba(220,220,220,1)',
          pointHighlightFill: '#fff',
          pointHighlightStroke:'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          strokeColor: 'rgba(220,220,220,1)',
        },
      ],
    };
  }

  render() {
    return (<LineChart
      data={this.getDataset() }
      width="800"
      height="600"
      />);
  }
}

export default Graph;
