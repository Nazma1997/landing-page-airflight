import Image from 'next/image';
import imgOne from '../images/pic-1.jpg';


export default function PartOne(){
  return(
    <div className="lg:flex onePart p-10 ">
        <div className='lg:mr-10 lg:mt-20'>
           <Image src={imgOne}alt="Pic" width={1000} height={500}  />
        </div>
        
       
       <div className=' md:mt-5 lg:mt-12 '>
          <h1 className='lg:text-6xl md:text-5xl text-white font-bold'> Plaisible sur terre  et comfortable dans les nuages </h1>
          <p className='lg:text-3xl md:text-xl text:medium text-white mt-8'>Plaisible sur terre et comfortable dans les nuages Plan and book <br /> your perfect  trip with with expert advice, <br /> travel ,tips, destination information and inspiration from us.</p>
       </div>
        
    </div>
  )
}