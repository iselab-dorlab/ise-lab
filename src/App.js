import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Members from './pages/Members';
import ResearchTopic from './pages/ResearchTopic';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';

const App = () => {
    return (
        <Router basename="/ise-lab">
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/researchtopic" element={<ResearchTopic />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
