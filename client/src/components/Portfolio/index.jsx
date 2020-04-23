import React from 'react'
import Project from "../Project";

let projects = [];
function addProject(title, image, imageAlt, directLink, github, readMe) {
    let project = { title: title, image: image, imageAlt: imageAlt, directLink: directLink, github: github, readMe: readMe };
    projects.push(project);
}

addProject("mysql-sync-query npm package", "https://drive.google.com/uc?export=view&id=1XtGGcyq0RptnRqxOwnkNguNQs0k6-uz5", "MySQL npm package", "https://www.npmjs.com/package/mysql-sync-query", "https://github.com/ashkiani/mysql-sync-query", "https://www.npmjs.com/package/mysql-sync-query");
addProject("The Burger App", "https://drive.google.com/uc?export=view&id=1WGupNxGCHLHd8wCyzcxpM9x1GN7H8yBP", "Burger App", "https://protected-headland-24713.herokuapp.com/", "https://github.com/ashkiani/burger", "https://github.com/ashkiani/burger/blob/master/README.md");
addProject("Weather Dashboard", "https://drive.google.com/uc?export=view&id=1ovYRjddlDAnwsH6ahdA3fXuJ-zNKA1wf", "Weather Dashboard App", "https://ashkiani.github.io/WeatherDashboard/", "https://github.com/ashkiani/WeatherDashboard", "https://github.com/ashkiani/WeatherDashboard/blob/master/README.md");
addProject("Password Generator", "https://drive.google.com/uc?export=view&id=1M_KeXbPHEkb3m9gHbsaZYKB36a3hxo4x", "Password Generator App", "https://ashkiani.github.io/Password-Generator/", "https://github.com/ashkiani/Password-Generator", "https://github.com/ashkiani/Password-Generator/blob/master/README.md");
addProject("Day Planner", "https://drive.google.com/uc?export=view&id=1QK66HG4lvv7RXX39ax-1rGYllF-7Al3C", "Day Planner App", "https://ashkiani.github.io/DayPlanner/", "https://github.com/ashkiani/DayPlanner", "https://github.com/ashkiani/DayPlanner/blob/master/README.md");

export default function index() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>Portfolio</h1>
                    <hr />
                </div>
            </div>
            <div className="row">
                {projects.map(project => (
                <Project title={project.title} image={project.image} alt={project.imageAlt} direct={project.directLink} github={project.github} readme={project.readMe}></Project>
                ))}
            </div>
        </div>
    )
}
