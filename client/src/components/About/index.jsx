import React from 'react'

export default function index() {
    return (
        <div>
            <div className="container">
                <h1>About Me</h1>
                <div className="row">
                    <div className="col-md-3">
                        <img className="border border-dark" src="https://drive.google.com/uc?export=view&id=1wKYdBuRnq5Pvf2Rb81agcLzdbel0N-nH" alt="Siavash picture" height="200" width="200" />
                    </div>
                    <div className="col-md-9">
                        <p>
                            My name is Siavash Ashkiani. I’m a Software Engineer and Certified Scrum Master with with solid
                            background in database systems
                            and software design, implementation and testing. Outside of work, I enjoy woodworking.
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-6">
                        <a href="https://drive.google.com/file/d/1Ruo8On46ZOPfOqnwXxbv_VgGtX61nWaz/view?usp=sharing" target="_blank">Resume (PDF)</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://www.linkedin.com/in/siavashashkiani" target="_blank">LinkedIn</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <a href="https://github.com/ashkiani/" target="_blank">GitHub</a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <p>Email: <span><a href="mailto:ashkiani@yahoo.com" target="_blank">ashkiani@yahoo.com</a></span></p>
                        <p>Phone number: 571-926-4951</p>
                    </div>
                </div>
                <br></br>
            </div>
        </div>
    )
}
