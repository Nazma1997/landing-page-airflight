import Image from 'next/image';
import imgOne from '../images/pic-1.png';
import imgTwo from '../images/img-3.jpg';

export default function PartOne(){
  return(
    <div className="lg:flex   onePart p-10 mb-10">
        <div className=''>
           <Image src={imgOne}alt="Pic" width={1000} height={500}  />
           
        </div>
       
       <div className=' md:mt-5 lg:'>
          <Image src={imgTwo}alt="Pic" width={100} height={100}   className='absolute top-0 right-0'/>
          <h1 className='text-6xl text-white '> Plaisible sur terre <br /> et comfortable <br /> dans les nuages </h1>
       </div>
        
    </div>
  )
}