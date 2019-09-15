import React, { Component } from 'react'
import Navbar from './Navbar';
import Head from 'next/head';

const Meta = (props) => (

    <div>
        <Head>
            <title>New Zealand</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
            <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>
        <Navbar />
        <div className="container">
            {props.children}
        </div>
       
    </div>
)


export default Meta
