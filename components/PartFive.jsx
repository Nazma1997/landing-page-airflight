import Image from 'next/image';
import img1 from '../images/Rectangle 1.png';
import img2 from '../images/part-5-1.png';
import img3 from '../images/part-5-2.png';
import img4 from '../images/part-5-3.png';


export default function PartFive(){
  return(
    <div className='2xl:flex md:flex  2xl:mx-20 md:mx-5 xs:mx-1 '>
       <Image src={img1}   alt='img' width={700} height={600} className='rounded-3xl xs:mx-5'/>
       <div className='  xs:mt-5 xs:ml-2 2xl:mt-32'>
          <p className='text-2xl font-bold text-blue-500'>Location de jet privé</p>
          <p className='text-xl text-gray-500 mt-5 mb-5'>It is a matter of pride for Falcon 900DX that we have one <br /> of the best air charter safety records in the region</p>
          <div className='flex'>
            <p className='w-0.5	h-12 xs:h-20 xs:1	bg-blue-500'></p>
            <p className='ml-2 text-gray-500'> Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum.</p>
          </div>
          <div className='flex mt-5 mb-4'>
            <p className='w-0.5	h-12 xs:h-20 xs:1	bg-blue-500'></p>
            <p className='ml-2 text-gray-500'> Lorem Ipsum is simply dummy text of the printing and <br /> typesetting industry. Lorem Ipsum.</p>
          </div>

          <p className='text-xl font-bold text-blue-500 mx-1 my-5'>Nos jet privé</p>

         <div className='2xl:flex md:flex '>
            <div className='2xl:mx-2 md:mx-1 xs:mx-1 relative'>
            <Image src={img2}   alt='img' width={300} height={200} className='rounded-3xl xs:mx-5'/>
            <p className='text-center text-xl font-bold relative text-white -mt-16'>CDS BE1900</p>
            </div>
            <div className='2xl:mx-2 md:mx-1 xs:mx-1  xs:my-10 relative'>
            <Image src={img3}   alt='img' width={300} height={200} className='rounded-3xl xs:mx-5'/>
            <p className='text-center text-xl font-bold relative text-white -mt-16'>CDS BE1900</p>
            </div>
            <div className='2xl:mx-2 md:mx-1 xs:mx-1 relative'>
            <Image src={img4}   alt='img' width={300} height={200} className='rounded-3xl xs:mx-5'/>
            <p className='text-center text-xl font-bold relative text-white -mt-16 '>CDS BE1900</p>
            </div>
         </div>
       </div>

    </div>
  )
}