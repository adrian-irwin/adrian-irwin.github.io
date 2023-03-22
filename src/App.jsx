import React from "react";
import githubLogo from "./assets/github-logo.svg";
import twitchLogo from "./assets/twitch-glitch-logo.svg";
import twitterLogo from "./assets/twitter-logo.svg";
import youtubeLogo from "./assets/youtube-logo.png";

export default function App() {
    return (
        <div className="App flex flex-col min-h-screen justify-center items-center text-white text-center">
            <h1 className="text-5xl sm:text-5xl text-white">adrian</h1>

            <div className="flex flex-wrap mt-6 justify-center items-center">
                <div className="grow-0 flex-shrink-0 px-3">
                    <a href="https://github.com/adrian-irwin" target="_blank">
                        <img src={githubLogo} alt="Github Logo" className="h-14" />
                    </a>
                </div>
                <div className="grow-0 flex-shrink-0 px-3">
                    <a href="https://www.twitter.com/mynameisadrian" target="_blank">
                        <img src={twitterLogo} alt="Twitter Logo" className="h-14" />
                    </a>
                </div>
                <div className="grow-0 flex-shrink-0 px-3">
                    <a href="https://www.youtube.com/mrtedboy7" target="_blank">
                        <img src={youtubeLogo} alt="YouTube Logo" className="h-14" />
                    </a>
                </div>
                <div className="grow-0 flex-shrink-0 px-3">
                    <a href="https://www.twitch.tv/airwin" target="_blank">
                        <img src={twitchLogo} alt="Twitch Logo" className="h-14" />
                    </a>
                </div>
            </div>
        </div>
    );
}
