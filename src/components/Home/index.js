import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import Logo from '../../assets/images/logo-nhi.png'
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ['N', 'h', 'i', ' ', 'L', 'e'];
const jobArray = [
  'C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ',
  'S', 'c', 'i', 'e', 'n', 'c', 'e', ' ',
  'S', 't', 'u', 'd', 'e', 'n', 't', ' ',
];


  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <span className={`${letterClass} _15`}> </span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            ,
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h2>Computer Science @ Oregon State University | Aspiring Software Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="portrait-container">
       
      </div>
      </div>

      <Loader type="pacman" />
    </>
  );
}

export default Home;
