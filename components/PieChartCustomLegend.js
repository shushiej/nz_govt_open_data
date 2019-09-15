import React, { Component, PureComponent } from 'react'
import  { Pie } from 'react-chartjs-2';

class Legend extends PureComponent {
    render() {
        let legend = this.props.legend
            .filter(item => item.props['data-quantity'] > 0)
            .sort((a,b) => b.props['data-quantity'] - a.props['data-quantity']);

        return (
            <>
                <ul className="legend-group list-group">
                    {legend}
                </ul>   
            </>
        )
    }
}

export class PieChartCustomLegend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            legend: []
        }
    }

    componentDidMount() {
        const legend = this.chart && this.chart.chartInstance.generateLegend();
        this.setState({
            legend
        });
    }
    legendMarkup = chart => {
        const legendSet = chart.data.datasets[0];
        const legend = legendSet.data.map((set, i) => {
            let datapoint = chart.data.labels[i];
            if(datapoint) {
                return (
                    <li 
                    id={`${legendSet.label.replace(/\s/g, "")}`}
                    key={datapoint}
                    onClick = {e => this.handleLegendOnClick(e)}
                    className = "legend-group-item list-group-item"
                    data-idx = {i}
                    data-quantity = {legendSet.data[i]}
                    style = {{borderColor : legendSet.backgroundColor[i]}}>

                        <mark 
                        style={{
                            backgroundColor: legendSet.backgroundColor[i] || "#e5e5e5"
                        }}>
                            {legendSet.data[i]}
                        </mark>
                        {`${datapoint.replace(/\(\d{1,6}\)$/g, "")}`}
                    </li>
                )
            } else {
                return "";
            }
        });
        return legend;
    }

    handleLegendOnClick = e => {
        let inst = this.chart.chartInstance;
        let el = document.getElementById(e.currentTarget.id);

        if(el.classList.contains("btn-disabled")) {
            el.classList.remove("btn-disabled");
        }else {
            el.classList.add("btn-disabled")
        }

        let t = el.getAttribute("data-idx");
        let meta = inst.config.data.datasets[0]._meta;
        let first = Object.keys(meta)[0];
        meta[first].data[t].hidden = !meta[first].data[t].hidden;

        inst.update();
    }
    

    render() {
        const { legend } = this.state;
        const {width, height} = this.props
        return (
        <div style = {{position : "relative", width: width, height: height}}>
            <Pie
                width = {width}
                height= {height}
                ref = {el => (this.chart = el)}
                data = {this.props.data}
                options = {{
                    legend: {
                        display: false
                    },
                    legendCallback: this.legendMarkup
                }}
            />
            <Legend
                ref = {el => this.legend = el}
                legend = {legend}
                handleLegendOnClick = {e => this.handleLegendOnClick(e)}
            />
        </div>
        )
    }
}

export default PieChartCustomLegend
