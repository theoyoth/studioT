"use client"

import TitlePage from '@/components/TitlePage'
import TextService from '@/components/TextService'
import LenisScroll from '@/components/LenisScroll'

const service = [
  {
    id:1,
    p:"Compiling content of standard SEO products/services",
  },
  {
    id:2,
    p:"Security on top",
  },
  {
    id:3,
    p:"Analytical analysis as a service",
  },
  {
    id:4,
    p:"Website Maintenance",
  },
  {
    id:5,
    p:"Price we can talk",
  },
]

const Services = () => {
  return (
    <LenisScroll>
      <div className='relative'>
        <TitlePage text="Services" />
        <p className='text-sm font-semibold italic absolute right-0 top-10'>"Serve with passion"</p>
        <section className='flex items-start'>
          <div className='w-full py-[50svh]'>
            <ul>
              {service.map((srv) => (
                <li key={srv?.id}>
                  <TextService>{srv?.p}</TextService>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full h-screen sticky top-0 flex items-center justify-center'>
            <div className='w-[500px] h-[400px] bg-gray-400 rounded-xl' />
          </div>
        </section>
      </div>
    </LenisScroll>
  )
}

export default Services