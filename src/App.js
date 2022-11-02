import './App.scss';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
import About from './components/About';
import Contact from './components/Contact';
import Work from './components/Work';
import bgImg from './assets/images/background.jpg';
import anime from 'animejs';
function App() {

  useEffect(() => {
    const tl = anime.timeline({});
    tl
    .add({
        targets: '.bgImg',
        opacity: [0, 98],
        easing: 'easeInSine',
        duration: 6000,
        delay: 2000,   
        direction: 'normal',
    })
})

  return (
    <>
    <img className="bgImg" src={bgImg} alt="backgroundimg"/>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="work" element={<Work />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
