import SlideHeader from "../components/layout/SlideHeader"
import Slide from '../assets/imgs/aboutslide.jpg'
import WelcomeSec from "../components/about/WelcomeSec"

const About = () => {
  return (
    <>
      <SlideHeader 
        title={'About Us'} 
        bgTitle={'#40DDB6]'} 
        supTitle={'Know About Us'} 
        content={'Collaboratively administrate empowered markets plug and play networks dynamically procrastinated '} 
        background={Slide}
        />
      <WelcomeSec />
    </>
  )
}

export default About
