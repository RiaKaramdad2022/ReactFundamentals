import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="main">
            <div className="mainDiv">
                <h1>Welcome to React Fundamentals at Eleven Fifty</h1>
                <p>
                    This app is intended to be a starter app for your upcoming project and a learning sandbox. This app is 
                    intended to be a starter app for your upcoming project and a learning sandbox.This app is intended to be a 
                    starter app for your upcoming project and a learning sandbox.This app is intended to be a starter app for 
                    your upcoming project and a learning sandbox.This app is intended to be a starter app for your upcoming 
                    project and a learning sandbox.
                </p>
                <hr />
                <h1>Important Notes</h1>
                <ul>
                    <li>Being component based, you can move on the next module</li>
                    <li>The styling is intentionally left bland in some spots. Just a sandbox.</li>
                    <li>At this phase, this site is not yet responsive.</li>
                    <li>We already know that.</li>
                    <li>Learning process is always annoying.</li>
                    <li>Becasue mostly you don't know what you are doing but you are still copy/pasting stuff.</li>
                    <li>But that's how you learn....</li>
                    <li>I'm done typing now.</li>
                    <li>
                        <Link to='/resources'>React Resources</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};