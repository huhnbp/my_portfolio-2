import logo from './logo.svg';
import './App.css';
import Home from './components/Home.tsx'
import BackgroundImage from './assets/background.jpg'

import AroundEverythingDemo from './components/AroundEverythingDemo.tsx'
import AroundEverythingDemoMobile from './components/AroundEverythingDemoMobile.tsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    return(
        <div style={{
            backgroundImage:`url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            color:'lightgray'
        }}>
        <BrowserRouter>
        		<Routes>
        			<Route path="/" element={<Home />} />
        			<Route path="AroundEverything" element={<AroundEverythingDemo />} />
        			<Route path="AroundEverythingMobile" element={<AroundEverythingDemoMobile />} />
        		</Routes>
        	</BrowserRouter>
        </div>
    )
}

export default App;
