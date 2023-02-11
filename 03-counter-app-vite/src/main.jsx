import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';
import { FirstApp } from './FirstApp';
import { HelloWorldApp } from './HelloWorldApp';

<<<<<<< HEAD
import './styles.css' 
=======
import './styles.css'

// import HelloWorldApp from './HelloWorldApp'
HelloWorldApp
FirstApp

>>>>>>> 36cc4d3 (firsApp)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorldApp/> */}
        {/* <FirstApp title="goku" subtitle={123}/> */}
        <CounterApp value={10}/>
    </React.StrictMode>
)
