import TitlePage from '@/components/TitlePage'
import { data } from '../../utils/portfolioData'
import Paragraph from '@/components/Paragraph'
import TextPortfolio from './TextPortfolio';
import ImageParent from './ImageParent';


const Portfolio = () => {
  return (
    <div className='static'>
      <TitlePage text="Portfolio" />
      <Paragraph cn='text-center mb-2'>"we are promising best user experience to our client."<br/>These are our portfolio</Paragraph>
      <section className='relative flex flex-col items-center h-[calc(100svh-51px-48px-32px)]'>
        <div className='flex justify-between items-center w-full h-full'>
          <div className='w-full flex flex-col justify-center'>
            {data.map((portfolio) => (
              <TextPortfolio {...portfolio} />
            ))}
          </div>
          <ImageParent />
        </div>
      </section>
    </div>
  )
}

export default Portfolio