import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Lander } from './pages/Lander';
import './style/App.css';

function App() {
    return (
        <div className='fullpage h-screen select-none bg-gradient-to-br from-orange-500 via-pink-600 to-purple-700 bg-[length:200%_200%] animate-gradient'>
            <Lander />
            <About />
            <Contact />
        </div>
    );
}

export default App;
