import './App.css';
import { Parallax } from 'react-parallax';
import image1 from './images/car-1.jpg'
import image2 from './images/car-2.jpg'
import image3 from './images/car-3.jpg'
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <Parallax strength={600} bgImage={image1}>
        <div className='content'>
          <div className='text-content'>Parallax Image 1</div>
        </div>
      </Parallax>
      <Parallax strength={300} blur={{min: -5, max: 15}} bgImage={image2}>
        <div className='content'>
          <div className='text-content'>Parallax Image 2</div>
        </div>
      </Parallax>
      <Parallax strength={-600} bgImage={image3}>
        <div className='content'>
          <div className='text-content'>Parallax Image 3</div>
        </div>
      </Parallax>
    </div>
  );
}

export default App;
