import React, { Component } from 'react'

export class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid py-5">
                    <h1 className="display-5 fw-bold">About</h1>
                    <p className="fs-4">TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. It reports number of words and characters, and time to read. This website works with any browser such as Chrome, Firefox, Safari, Edge and others. It is made using React JS.</p>
                    <span>Created By: Aarush Popli </span>
                    {/* <a href="https://linkedin.com/in/aarushpopli" target={'_blank'} rel="noreferrer" className={`text-${props.mode === 'light'?'dark':'light'}`}><i className="bi bi-linkedin mx-2" style={{fontSize: "25px"}}></i></a>
                    <a href="https://github.com/Aarush-Popli" target={'_blank'} rel="noreferrer" className={`text-${props.mode === 'light'?'dark':'light'}`}><i className="bi bi-github mx-2" style={{fontSize: "25px"}}></i></a> */}
                </div>
            </div>
        )
    }
}

export default About