import React from "react";
import SocialLink from "./SocialLink";
import githubLogo from "../assets/github-logo.svg";
import twitterLogo from "../assets/twitter-logo.svg";
import youtubeLogo from "../assets/youtube-logo.png";
import twitchLogo from "../assets/twitch-glitch-logo.svg";

export default function Socials() {
    return (
        <div className="flex flex-wrap mt-6 justify-center items-center">
            <SocialLink
                imgSrc={githubLogo}
                imgAlt="Github logo"
                link="https://github.com/adrian-irwin"
            />
            <SocialLink
                imgSrc={twitterLogo}
                imgAlt="Twitter logo"
                link="https://www.twitter.com/mynameisadrian"
            />
            <SocialLink
                imgSrc={youtubeLogo}
                imgAlt="YouTube logo"
                link="https://www.youtube.com/mrtedboy7"
            />
            <SocialLink
                imgSrc={twitchLogo}
                imgAlt="Twitch logo"
                link="https://www.twitch.tv/airwin"
            />
        </div>
    );
}
