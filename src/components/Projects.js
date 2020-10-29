import React from 'react'
import ProjectItem from "./ProjectItem.js";
import PersonalSiteImg from "../images/home-background.jpg";
import LightspeedImg from "../images/projects/lightspeed.png";
import MouseDodgeImg from "../images/projects/mouse-dodge.png";
import WaveDefenceImg from "../images/projects/wave-defence.png";
import TwitterBotImg from "../images/projects/twitter-bot.png";
import NewTabImg from "../images/projects/new-tab.png";
import MatrixImg from "../images/projects/matrix.png";
import RandomHex from "../images/projects/random-hex.png";

export default function Projects() {
    return (
        <div className="row no-gutters justify-content-around align-items-stretch d-flex mx-5 projects">
            <ProjectItem
                image={LightspeedImg}
                title="Lightspeed!"
                description="'Lightspeed!' is a personal project to create a phone game worthy of the android play store, made using unity engine and C#, features microtranscations and has great reviews from the players"
                footer="#C# #unity #android"
                link="https://play.google.com/store/apps/details?id=com.Slash3Games.Lightspeed"
            /> 
            <ProjectItem
                image={MouseDodgeImg}
                title="Mouse Dodge"
                description="A simple JS game using the p5.js library in which the user must dodge any of the balls flying into the screen. The balls increase by one a second, which is also the players total score."
                footer="#javascript #p5.js #html #css"
                link="https://liammorgan.github.io/mouseDodge/mouseDodge.html"
            />
            <ProjectItem
                image={WaveDefenceImg}
                title="Wave Defence"
                description="A simple wave defense p5.js game in which the player gains points from killing enemies and uses these points to buy upgrades - infinite difficulty in which the high score is the level reached"
                footer="#javascript #p5.js #html #css"
                link="https://liammorgan.github.io/wave_defence/"
            />
            <ProjectItem
                image={TwitterBotImg}
                title="Twitter Quote Bot"
                description="A Node.js powered Twitter bot that tweets quotes daily, scrapes a daily quote website to grab relevant information then posts on a randomised time of day."
                footer="#javascript #node.js #api"
                link="https://twitter.com/mayzrdev"
            />
            <ProjectItem
                image={NewTabImg}
                title="'New Tab' Page"
                description={
                    <p>
                        A <a href="https://momentumdash.com/">Momentum</a> extension
                        clone in a web page, Intended to be set as the browsers new tab
                        page for clock, todo list, tasks, quotes, etc.
                    </p>
                }
                footer="#javascript #boostrap #html #css"
                link="https://liammorgan.github.io/new_tab/"
            />
            <ProjectItem
                image={MatrixImg}
                title="Matrix scrolling demo"
                description="A non-interactive screensaver / demo inspired by the popular Matrix franchise"
                footer="#javascript #p5.js #html #css"
                link="https://liammorgan.github.io/matrix/"
            />
            <ProjectItem
                image={PersonalSiteImg}
                title="Personal Site"
                description="This personal site is a project! Built to showcase my current / old projects and allow a way to show all my contact channels."
                footer="#javascript #react #react-transition-group #node.js #bootstrap #html #css"
                link="https://liammorgan.github.io/"
            />
            <ProjectItem
                image={RandomHex}
                title="Random Hexcode"
                description="Produces a random hex code shows its colour when the user presses space"
                footer="#javascript #html #css"
                link="https://liammorgan.github.io/"
            />
        </div>
    );
}
