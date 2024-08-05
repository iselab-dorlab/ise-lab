import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Members from './pages/Members';
import ResearchTopic from './pages/ResearchTopic';
import Publications from './pages/Publications';
import Contact from './pages/Contact';


const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/ise-lab" element={<Home />} />
                    <Route path="ise-lab/members" element={<Members />} />
                    <Route path="ise-lab/researchtopic" element={<ResearchTopic />} />
                    <Route path="ise-lab/publications" element={<Publications />} />
                    <Route path="ise-lab/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
