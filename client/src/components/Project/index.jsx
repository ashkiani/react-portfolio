import React from 'react'

export default function index(props) {
    return (
        <div className="col-md-6 border">
            <h3>{props.title}</h3>
            <a href={props.direct} target="_blank"><img src={props.image} alt={props.alt} width="100%" height="230px" className="border" /></a>
            <a href={props.direct} target="_blank">Direct link to site</a>|
            <a href={props.github} target="_blank">GitHub repo</a>|
            <a href={props.readme} target="_blank">ReadMe</a>;
        </div>
    )
}
