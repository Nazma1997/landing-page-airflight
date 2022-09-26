import Image from 'next/image';
import pic2 from '../images/pic-2.png';
import pic3 from '../images/pic-3.png';
import pic4 from '../images/pic-4.png'


export default function PartTwo(){
  return(
    <div className="mt-10 mb-10">
      <h1 className="text-2xl font-bold text-gray-500 lg:ml-20 mx-5">L'experience LTI</h1>
      <div className="lg:flex 2xl:flex md:flex justify-evenly mt-10 mb-10">
          <div>
            <div className='rounded-full lg:border-8 md:border-8   md:mx-10 mx-2 2xl:border-8  border-blue-200'>
               <Image src={pic2}alt="Pic" width={500} height={500}  />
            </div>
             <div>
                <h1 className='text-3xl font-medium text-gray-500  mt-10 text-center'>Comfort</h1>
                 <p className='text-xl font-normal text-gray-500 mt-5 text-center mb-10'> We clean up messy coding. <br /> Streamlining solutions that align with your objectives.</p>
             </div>
          </div>

          <div>
            <div className='  mx-2 md:mx-10' >
               <Image src={pic3}alt="Pic" width={500} height={500}  />
            </div>
             <div>
                <h1 className='text-3xl font-medium text-gray-500  mt-10 text-center'>Lux</h1>
                 <p className='text-xl font-normal text-gray-500 mt-5 text-center mb-10'> We clean up messy coding. <br /> Streamlining solutions that align with your objectives.</p>
             </div>
          </div>

          <div >
            <div className='rounded-full mx-2 lg:border-8 2xl:border-8 	md:border-8   md:mx-10 border-blue-200 '>
               <Image src={pic4}alt="Pic" width={500} height={500}  />
            </div>
             <div>
                <h1 className='text-3xl font-medium text-gray-500  mt-10 text-center'>Security</h1>
                 <p className='text-xl font-normal text-gray-500 mt-5 text-center mb-10'> We clean up messy coding. <br /> Streamlining solutions that align with your objectives.</p>
             </div>
          </div>

   


      </div>

    </div>
  )
}