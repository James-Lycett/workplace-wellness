import React, { Component } from 'react'
import Chart from 'react-apexcharts'

class RadialBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            series: this.props.series || [70],
            options: {
                chart: {
                    height: '100%',
                    width: '100%',
                    type: 'radialBar',
                },
                plotOptions: {
                    radialBar: {
                        hollow: {
                            size: '60%',
                        },
                        dataLabels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: '16px',
                                fontFamily: undefined,
                                color: undefined,
                                offsetY: -20,
                            },
                            value: {
                                show: true,
                                fontSize: '14px',
                                fontFamily: undefined,
                                color: undefined,
                                offsetY: -5,
                                formatter: (val) => `${val}%`,
                            },
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
            <div
                id="chart"
                className="flex flex-col justify-center items-center w-full h-full relative"
            >
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="radialBar"
                    height="100%"
                    width="100%"
                />
                <p className="absolute bottom-0 w-full text-center mb-2 text-reg sm:text-xl">
                    {this.props.label}
                </p>
            </div>
        )
    }
}

export default RadialBar
