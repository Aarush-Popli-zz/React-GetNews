import React from 'react'

const About = () => {
    return (
        <div className="container my-5">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">About</h1>
                <p className="fs-4">Get News is a news application where you can get the latest news about happenings around the world. This website works with any browser such as Chrome, Firefox, Safari, Edge, and others. It is made using React JS.</p>
                <span>Created By: Aarush Popli </span>
                {/* <a href="https://linkedin.com/in/aarushpopli" target={'_blank'} rel="noreferrer" className={`text-${props.mode === 'light'?'dark':'light'}`}><i className="bi bi-linkedin mx-2" style={{fontSize: "25px"}}></i></a>
                <a href="https://github.com/Aarush-Popli" target={'_blank'} rel="noreferrer" className={`text-${props.mode === 'light'?'dark':'light'}`}><i className="bi bi-github mx-2" style={{fontSize: "25px"}}></i></a> */}
            </div>
        </div>
    )
}

export default About