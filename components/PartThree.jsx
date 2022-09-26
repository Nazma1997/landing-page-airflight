import Image from 'next/image';
import img1 from '../images/p-3i-2.png';
import img2 from '../images/p-3-i-1.png';
import img3 from '../images/p-3-i-3.png';
import img4 from '../images/p-3-i-4.png'

export default function PartThree(){
  return(
          
                <div className=" lg:mt-10 2xl:mt-10 md:mt-10 xs:mt-2 2xl:p-20 lg:p-20 xs:pt-10 pb-5 xs:bg-black lg:bg-black 2xl:bg-black md:bg-black ">
       <h1 className="lg:text-5xl md:text-2xl 2xl:text-6xl md:font-medium lg:font-bold 2xl:font-bold text-white xs:text-gray-500 mx-5 md:my-5 lg:my-5 2xl:my-6 xs:pb-5">Avions</h1>

       <div className="lg:flex xs:pb-3 2xl:flex md:flex  2xl:mx-28  xs:rounded xs:pt-5">
          <div className="lg:relative md:relative mx-5 2xl:relative xs:relative   xs:py-1 xs:-my-0.5 xs:rounded-2xl"> 
            <Image src={img1}   alt='img' width={700} height={800} className='rounded-3xl xs:mx-5'/>
           <div className=" lg:relative md:relative 2xl:relative ">
             <h2 className="mx-2 lg:mx-20 md:mx-10 lg:font-semibold 2xl:mx-5 md:text-xl md:font-bold 2xl:font-bold lg:text-4xl lg:-mt-44  2xl:text-4xl 2xl:-mt-44 md:-mt-44 -mt-1 text-white  ">FALCON 8X/LX-EBO </h2>
             <p className='lg:text-2xl 2xl:text-2xl 2xl:font-normal 2xl:mx-5 text-white  mx-2 md:mx-10 lg:mx-20'>Au-delà de la concurrence, <br /> le Falcon 8X est un dérivé du triréacteur <br /> à succès Falcon 7X.</p>
           </div>
          </div>

          
          
          <div className="lg:relative md:relative 2xl:relative xs:relative xs:mt-5 mx-1  xs:py-1  xs:rounded-2xl 2xl:mx-10 lg:mx-10 mb-10"> 
             <div className='xs:mt-20 xs:mb-3 mx-2'>
               <Image src={img2}   alt='img' width={1000} height={500} className='rounded-3xl xs:mx-5'/>
               <div className=" lg:relative md:relative 2xl:relative">
                 <h2 className="mx-2 lg:mx-20 md:mx-10 lg:font-semibold 2xl:mx-5 2xl:font-bold lg:text-4xl lg:-mt-44  2xl:text-4xl 2xl:-mt-44 md:-mt-44 -mt-1 text-white    md:text-xl md:font-bold">Boeing 737 </h2>
                 <p className='lg:text-2xl 2xl:text-2xl 2xl:font-normal 2xl:mx-5  text-white mx-2 md:mx-10 lg:mx-20'>Au-delà de la concurrence, <br /> le  Falcon 8X est un dérivé du triréacteur</p>
               </div>
             </div>

            <div className='2xl:flex lg:flex md:flex 2xl:mt-20 md:mt-28 lg:mt-10  '>

            <div className='mr-2 xs:mb-3'>
               <Image src={img3}   alt='img' width={500} height={300} className='rounded-3xl xs:mx-5'/>
               <div className=" lg:relative md:relative 2xl:relative xs:relative">
                 <h2 className="mx-2 lg:mx-20 md:mx-2 lg:font-semibold 2xl:mx-5 2xl:font-bold lg:text-4xl lg:-mt-44  2xl:text-4xl 2xl:-mt-44 md:-mt-32 -mt-1 text-white  md:font-bold">FALCON 8X/LX-EBO </h2>
                 <p className='lg:text-2xl 2xl:text-2xl 2xl:font-normal 2xl:mx-5 text-white mx-2 md:mx-2 lg:mx-20'>Au-delà de la concurrence, <br /> le  Falcon 8X est un dérivé du triréacteur <br /> à succès Falcon 7X.</p>
               </div>
             </div>


             <div className=''>
               <Image src={img4}   alt='img' width={500} height={300} className='rounded-3xl xs:mx-5'/>
               <div className=" lg:relative md:relative 2xl:relative xs:relative">
                 <h2 className="mx-1 lg:mx-20 md:mx-2 lg:font-semibold 2xl:mx-5 2xl:font-bold lg:text-4xl lg:-mt-44  2xl:text-4xl 2xl:-mt-44 md:-mt-32 -mt-1 text-white  md:font-bold">BE350/ZS </h2>
                 <p className='lg:text-2xl 2xl:text-2xl 2xl:font-normal 2xl:mx-5  text-white mx-1 md:mx-2 lg:mx-20'>
                  Au-delà de la concurrence, <br /> le  Falcon 8X est un dérivé du triréacteur <br /> à succès Falcon 7X.</p>
               </div>
             </div>
            </div>
          </div>
       </div>

    </div>



          
  )
}