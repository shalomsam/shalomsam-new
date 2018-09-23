import React, { Component } from "react";
import styles from "./Skills.scss";
import Canvas from "../../Canvas/Canvas";
import { importAll } from "../../../utils"

let images = importAll(require.context('../../../assets/images/skills', false, /\.(png|svg)$/));

images = images.map((image) => {
    return {
        type: "image",
        src: image,
    }
})

const canvasOptions = {
    "maxParticles": 0,
    "shapes": images,
    "size": 100,
    "minVelocity": 0.05, 
    "maxVelocity": 0.10,
    "alpha": 0.90
}

canvasOptions.maxParticles = images.length;

export default class Skills extends Component {
    render() {
        return (
            <div className={"container-fluid " + styles.Skills}>
                <div className={"row " + styles.Row}>
                    <div className={"col-12 col-lg-5 col-xl-6 " + styles.CanvasWrp}>
                        <Canvas options={canvasOptions} className={this.props.className} ref="canvas" />
                    </div>
                    <div className={"col-12 col-lg-7 col-xl-6 px-lg-5 py-lg-4 " + styles.ContentWrp}>
                        <h2>Skills and Tools</h2>
                        <p className="fs-italic fw-lighter mb-4">My arsnel of tools and skillsets</p>
                        <div className={"SkillWrp"}>
                            My core expertise is in building complete web apps. On the front-end, I am familiar with the basics like HTML/HAML, CSS/SASS, and Javascript. I also have sound knowledge of front-end Javascript frameworks like Angularjs, React and (of course) jQuery. Javascript is my goto language especially since it blurs the backend frontend divide. I also have worked on Javascript transpilers and Type system like TypeScript.
                            <br/><br/>
                            On the backend again I have a decent knowledge of Node.js and worked on frameworks like express and LoopBack. Apart from Javascript on the backend, I have a good experience with PHP and the popular framework Laravel. I also have worked on minimal bash scripting. I have experience setting up complete apps on mostly Apache. But also have some knowledge on Nginx as well. Of late as a practice I am Dockerizing most of my apps and thus have a fair understanding setting up projects using Docker and Docker Compose.
                            <br/><br/>
                            Apart from the frontend and backend, I have worked with automation tools like grunt and gulp. I have only just started familiarizing myself with Webpack though. I have also some experience setting up javascript tests in Mocha + chai.js, And PHP tests in PHPUnit.
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}