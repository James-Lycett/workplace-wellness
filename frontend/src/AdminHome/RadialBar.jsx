import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class RadialBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            series: this.props.series || [70],
            options: {
                chart: {
                    height: 350,
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '60%',
                        },
                    },
                },
                labels: this.props.labels || [''],
                colors: this.props.colors || undefined,
                stroke: {
                    lineCap: 'round',
                },
            },
        }
    }

    render() {
        return (
            <div id="chart">
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="radialBar"
                    height={275}
                    width={275}
                />
            </div>
        )
    }
}

export default RadialBar
