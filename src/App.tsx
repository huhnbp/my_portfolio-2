import logo from './logo.svg';
import './App.css';
import Home from './components/Home.tsx'
import BackgroundImage from './assets/background.jpg'

const App = () => {
    return(
        <div style={{
            backgroundImage:`url(${BackgroundImage})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh'
        }}>
            <Home />
        </div>
    )
}

export default App;
