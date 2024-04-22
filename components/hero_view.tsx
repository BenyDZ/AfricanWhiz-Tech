import React from 'react'
import Navbar from './navbar'
import Image from 'next/image'
import Contact_us_button from './contact_us_button'

const Hero_view = () => {
  return (
    <section className=" bg-[url('/images/HEROVIEW_RESPONSIVE.png')] bg-cover bg-no-repeat h-screen w-full flex flex-col px-10 lg:px-32 justify-center">
      <Navbar />
      <div className="h-full w-full flex flex-col items-center py-10 gap-7">
        <div className='flex flex-col gap-3'>
          <h1 className='text-primary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis officia suscipit libero vel vero repellat dolorem quo quam hic, ipsa iure ratione minus distinctio quidem, asperiores dignissimos ut molestiae blanditiis?</h1>
          <h3 className='font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae autem consequuntur adipisci!</h3>
          <Contact_us_button />
        </div>
        <Image
          alt="circle image"
          width={500}
          height={800}
          src="/images/circle.png"
        />
      </div>
    </section>
  )
}

export default Hero_view