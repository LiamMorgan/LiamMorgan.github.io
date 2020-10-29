import React from 'react'
import AuthorImg from "../images/author.png";

export default function Home() {
    return (
        <div className="author row no-gutters justify-content-center p-2">
            <div className="author-image col-xl-2 col-sm-12">
                <a href="https://www.linkedin.com/in/liammorgan97/">
                    <img
                        src={AuthorImg}
                        alt="Image of author"
                        className="rounded-circle img-thumbnail"
                    />
                </a>
            </div>
            <div className="author-info col-xl-5 offset-xl-1 col-sm-12 text-light">
                <h1 className="display-2">Liam Morgan</h1>
                <h3>Full stack developer</h3>
                <h5>
                    Developer based in County Durham, England. This website is a
                    collection of my personal projects, showcasing my skillset and the
                    many technologies that I've been involved in. This site itself is
                    built using React for single page rendering,
                    React-transition-group for animations, Bootstrap and vanilla CSS
                    for styling, GitHub and GitHub Pages for source control and
                    hosting.
                </h5>
                <h5>
                    Please look around at my projects, and feel free to get in touch.
                </h5>
            </div>
        </div>
    );
}
