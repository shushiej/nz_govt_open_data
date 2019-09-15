import React, { Component } from 'react'
import Link from 'next/link';
import Meta from '../components/Meta';
export class Home extends Component  {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Meta>
                
                <div className="container nz_container">
                    <div className="row">
                        <div className="card people">

                        </div>
                        <div className="card business">

                        </div>
                        <div className="card attractions">

                        </div>
                    </div>
                    <div className="row">
                        <div className="chart population">

                        </div>
                    </div>

                </div>
                <div className="key_stats_container">
                    <span className="key_stats--value">4.9M</span>
                    <span className="key_stats--value">$622M</span>
                </div>
    
                <style jsx global>
                    {
                    `   
                        .row {
                            display: flex;
                            justify-content: space-around;
                        }

                        .key_stats_container {
                            position: absolute;
                            right: 35px;
                            top: 0px;
                            display: flex;
                        }

                        .key_stats--value {
                            font-size: 60px;
                            font-weight: 100;
                            margin-left: 50px;
                        }
                        `
                    }
                </style>
        </Meta>
        )
    }
}

export default Home