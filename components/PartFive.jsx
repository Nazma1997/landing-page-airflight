import Image from 'next/image';
import img1 from '../images/Rectangle 1.png'


export default function PartFive(){
  return(
    <div className='2xl:flex md:flex  2xl:mx-20 md:mx-5 xs:mx-1'>
       <Image src={img1}   alt='img' width={700} height={800} className='rounded-3xl xs:mx-5'/>
       <div className=' mt-20 xs:mt-5'>
          <p className='text-2xl font-bold text-blue-500'>Location de jet privé</p>
          <p className='text-xl text-gray-500 mt-5 mb-5'>It is a matter of pride for Falcon 900DX that we have one <br /> of the best air charter safety records in the region</p>
          <div className='flex'>
            <p className='w-0.5	h-12	bg-blue-500'></p>
            <p className='ml-2 text-gray-500'> Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum.</p>
          </div>
          <div className='flex mt-5'>
            <p className='w-0.5	h-12	bg-blue-500'></p>
            <p className='ml-2 text-gray-500'> Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum.</p>
          </div>

       </div>

    </div>
  )
}