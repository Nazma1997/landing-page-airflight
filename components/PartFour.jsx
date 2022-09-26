import Image from 'next/image';
import star from '../images/Star 1.png';
import img1 from '../images/Rectangle 22024.png';



export default function PartFour(){
  return(
    <div className='2xl:flex lg:flex md:flex 2xl:justify-evenly mx-10 xs:mx-2 mb-10'>
      <div className='2xl:mt-52 md:mt-5'>
          <Image src={star}   alt='img' width={100} height={100} className='rounded-3xl xs:mx-5'/>
          <p className='text-5xl font-bold text-blue-300 ml-14 -mt-20 xs:text-3xl'>Nos Services</p>
          <p className='mt-10 ml-12 text-xl text-gray-500'>Des services complets pour satisfaire les besoins de notre <br /> clientèle et adaptés aux réalités du continent Africain.</p>
          <p className='mt-8 ml-12 text-xl text-gray-500'>Les services de Lize Transport International sont destinés <br /> aux Etats, aux gouvernements, aux hommes d'affaires, <br /> aux organismes internationaux et tout autres personnes <br /> désireuses d'effectuer un vol privé.</p>
          
      </div>
      <div className=''>
       <Image src={img1}   alt='img' width={700} height={900} className='rounded-3xl xs:mx-5'/>
      </div>



    </div>
  )
}