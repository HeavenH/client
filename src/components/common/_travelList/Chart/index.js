import React, { Component } from 'react';
import Chart from 'react-apexcharts'
import { Container } from './styles';

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41],
      labels: ['A', 'B', 'C', 'D', 'E']
      
    }
    
  }

  render() {

    return (
      <Container>
        <div className="donut">
            <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
        </div>
      </Container>
    );
  }
}

export default Donut;