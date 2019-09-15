import React, { Component } from 'react'
import Meta from '../components/Meta';
import totalImports from '../DATA/JSON_DATA/total_imports.json';
import totalExports from '../DATA/JSON_DATA/total_exports.json';
import exportTradeTypes from '../DATA/JSON_DATA/export_trade_type.json';
import  {Chart, Line, Pie, Bar } from 'react-chartjs-2';

export class Trade extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData : {}
        }
    }

    componentDidMount() {
        this.get_line_chart_data();
    }


    get_line_chart_data() {
        const { total_imports, total_exports } = this.props;
        let years = []
        let values_imp = []
        let values_exp = []
        
        total_imports.forEach(element => {
            years.push(element.year);
            values_imp.push(element.Data_value);
        });

        total_exports.forEach(element => {
            values_exp.push(element.Data_value);
        })
        
        
        this.setState({chartData : {
            data: {
                labels: years,
                datasets: [
                    {
                        label: "Total Imports in $NZD",
                        backgroundColor: "rgba(249, 245, 234, 0.7)",
                        data: values_imp,
                        pointBorderColor: "#343434",
                    },
                    {
                        label: "Total Exports in $NZD",
                        backgroundColor: "rgba(52, 52, 52, 0.7)",
                        data: values_exp,
                        pointBorderColor: "#fff"
                    }
                    ]
                }
            }
        });
    }

    get_chart_options() {
        return {
            responsive: true,
            legend: {
                labels: {
                    fontColor: "white",
                    fontSize: 12
                }
            },
            tooltips: {
                bodyFontFamily:"'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
                titleFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontColor: "#FFF",
                        minRotation: 45
                    }
                }],
                yAxes: [{
                    display:false,
                    gridLines: {
                        display: false
                    },
                    ticks: {
                        fontColor: "#FFF"
                    }
                }]
            }
        }
    }

    scale_data_value(element) {
        let values = this.props.export_data_values;

        let size = (element.Data_value - Math.min(...values)) / (Math.max(...values) - Math.min(...values)) * 300;

        return size;
    }

    render() {
        return (
            <Meta>
                
                <div className = "export_trade_types">
                    <h2>Export Trade Types</h2>
                    <img className="img_trade_types" src="../static/2x/export_trade.svg" />
                </div>

                <style jsx>

                    {
                        `   
                            .export_trade_types {
                                display:flex;
                                justify-content: space-between;
                                margin-top: 50px;
                            }

                            .img_trade_types {
                                width: 700px;
                                margin: 0 auto;
                            }

                            .sphere {
                                background-color: #ce2939;
                            }

                            .trade_type {
                                position: relative;
                                top: 50%;
                            }

                        
                        `
                    }
                </style>
            </Meta>
        )
    }
}

Trade.getInitialProps = async function(props) {
    const tot_imp = await totalImports;
    const tot_exp = await totalExports;
    const export_trade_types = await exportTradeTypes;

    return {
        total_imports: tot_imp.data,
        total_exports: tot_exp.data,
        export_trade_types: export_trade_types.data,
    }
}

export default Trade
