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

    componentDidUpdate(prevProps) {
        if (prevProps.series !== this.props.series) {
            this.setState({ series: this.props.series })
        }
        if (prevProps.labels !== this.props.labels) {
            this.setState({
                options: { ...this.state.options, labels: this.props.labels },
            })
        }
        if (prevProps.colors !== this.props.colors) {
            this.setState({
                options: { ...this.state.options, colors: this.props.colors },
            })
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
