import React from 'react';
import '../App.css';
import '../tailwind.min.css';

function LandingPage() {
    return (
        <div className="App">
            <header className="App-header" >
                <p> Let's create a web application based on react and nestjs</p>
                <a
                    className={`w-1/8 px-8 py-2 text-black outline bg-blue-400 rounded ml-10 `}
                    href="/view">
                    Enter
                    </a>
            </header>
        </div>
    );
}

export default LandingPage;