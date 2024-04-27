import Button from '../components/Button';
import { imgAnimation } from '@/utils/motion';
import ImageContainer from '@/components/ImageContainer';
import Paragraph from '@/components/Paragraph';
import TextHero from './TextHero';

const Hero = () => {
  return (
    <div className='h-[calc(100svh-51px)]'>
      <Paragraph cn='font-ubuntu text-xl text-softblack translate-y-8'>visualisation, interaction, by expert</Paragraph>
      <div className='overflow-hidden'>
        <TextHero cn='font-bold text-[100px] text-blue-500'>WE ARE <span className="bg-blue-500 text-softblack font-ubuntu px-2 rounded-xl">StudioT</span>
        </TextHero>

      </div>
      <section className="relative h-[calc(100svh-152px-51px-28px)]">
        <div className='overflow-hidden pb-2'>
          <TextHero cn='text-6xl text-softblack font-semibold relative z-10'>You design. We build</TextHero>
        </div>
        <Button text="Start now" cn="translate-y-20" />
        <ImageContainer src='/img/hero.webp' cn='absolute top-20 right-0 w-1/2 h-[340px]' variant={imgAnimation} />
      </section>
    </div>
  )
}

export default Hero