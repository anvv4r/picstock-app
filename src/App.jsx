import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AuthorDetails from './components/AuthorDetails';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/author/:username' element={<AuthorDetails />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
