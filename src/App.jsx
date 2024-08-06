import './App.css';
import MarqueeComp from './components/Marquee';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import AnimatedCursor from 'react-animated-cursor';
function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={12}
        outerSize={18}
        color="89, 90, 82"
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
        ]}
      />
      <div>
        <NavBar />
        <Hero />
        <MarqueeComp />
      </div>
    </>
  );
}

export default App;
