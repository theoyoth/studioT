import TitlePage from '@/components/TitlePage'
import { imgAnimation } from '@/utils/motion'
import ImageContainer from '@/components/ImageContainer'
import Paragraph from '@/components/Paragraph'
import TextHeaderAbout from './TextHeaderAbout'

const About = () => {
  return (
    <div className='relative h-[calc(100svh-51px)] overflow-hidden'>
      <TitlePage text="About us" />
      <section className='overflow-hidden pb-8'>
        <TextHeaderAbout />
      </section>
      <ImageContainer src='/img/about/img-about.webp' cn='w-[800px] h-[300px] absolute bottom-0 left-20' variant={imgAnimation} />
      <Paragraph cn='italic absolute bottom-20 right-0 w-[300px] text-justify'>“To become successful online, you only need to remember the following : Good Heart + Passion + Web Design + SEO + Digital Marketing + Dedication + Positiveness + Patience = Success”.<br/>
      <span>-Dr. Christopher Dayagdag-</span></Paragraph>
    </div>
  )
}

export default About