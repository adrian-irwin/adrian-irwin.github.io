import React from "react";
import LinkComponent from "./LinkComponent";
import githubLogo from "../assets/github-logo.svg";
import twitterLogo from "../assets/twitter-logo.svg";
import youtubeLogo from "../assets/youtube-logo.png";
import twitchLogo from "../assets/twitch-glitch-logo.svg";
import linkedinLogo from "../assets/linked-in-logo.png";

const Links = () => {
    return (
        <div className="flex flex-wrap mt-6 justify-center items-center">
                <LinkComponent
                    imgSrc={githubLogo}
                    imgAlt="Github logo"
                    link="https://github.com/adrian-irwin"
                />
                <LinkComponent
                    imgSrc={linkedinLogo}
                    imgAlt="LinkedIn logo"
                    link="https://www.linkedin.com/in/adrianirwin/"
                />
                <LinkComponent
                    imgSrc={twitterLogo}
                    imgAlt="Twitter logo"
                    link="https://www.twitter.com/mynameisadrian"
                />
                <LinkComponent
                    imgSrc={youtubeLogo}
                    imgAlt="YouTube logo"
                    link="https://www.youtube.com/mrtedboy7"
                />
                <LinkComponent
                    imgSrc={twitchLogo}
                    imgAlt="Twitch logo"
                    link="https://www.twitch.tv/airwin"
                />
        </div>
    );
};

export default Links;
