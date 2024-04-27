import TitlePage from '@/components/TitlePage';
import TextService from '@/app/services/TextService';
import LenisScroll from '@/app/services/LenisScroll';
import {service} from '../../utils/serviceData';
import ImageParent from './ImageParent';
import Paragraph from '@/components/Paragraph';

const Services = () => {

  return (
    <LenisScroll>
      <div className='relative'>
        <TitlePage text="Services" />
        <Paragraph cn='italic absolute right-0 top-10'>"Build with passion<br/>Serve with passion"</Paragraph>
        <section className='flex items-start'>
          <div className='w-full py-[50svh]'>
            <ul>
              {service.map((srv) => (
                <li key={`serv_${srv?.id}`}>
                  <TextService index={srv?.id}>{srv?.p}</TextService>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full h-screen sticky top-0 flex items-center justify-center'>
            <ImageParent />
          </div>
        </section>
      </div>
    </LenisScroll>
  )
}

export default Services