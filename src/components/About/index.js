import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm an ambitious computer science student looking for an internship where I can apply
            my skills and continue to grow in the field of technology.
          </p>
          <p align="LEFT">
            I'm naturally curious, and perpetually working on
            improving my skills one design problem at a time.
          </p>
          <p>
          If I need to define myself in one sentence, it would be as a dedicated learner, a family-oriented daughter, a dog lover, a passionate coder, a photography enthusiast, and a tech-obsessed individual. I find joy in exploring new technologies, capturing moments through my camera lens, and spending quality time with my loved ones.
          </p>
        
          <p>
  In my free time, I enjoy hiking with my dogs, and experimenting with new recipes in the kitchen. My goal is to not only excel in my career but also make a positive impact on my community by sharing my knowledge and passion for technology.
</p>
<p>
  As I continue my journey in the world of computer science, I am committed to staying updated with the latest industry trends and advancements. Whether it's through online courses, attending tech conferences, or reading up on new developments, I believe in continuous learning and adapting to the ever-evolving tech landscape.
</p>
<p>
  I am excited about the future and the possibilities it holds. I am confident that with my dedication, enthusiasm, and willingness to learn, I will be able to contribute effectively to any team and project I am part of. I look forward to the challenges and opportunities that lie ahead in my career.
</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#306998" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#131A22" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About