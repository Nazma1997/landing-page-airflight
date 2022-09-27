import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowLeft,faArrowRight} from "@fortawesome/free-solid-svg-icons"

export default function PartEight(){
  return(
    <div className="2xl:mx-20 md:mx-5 xs:mx-1 mb-20">
        <p className="mt-32 text-2xl font-bold xs:mx-5  text-blue-600  mb-5">Amenities</p>
        <div className="2xl:flex md:flex 2xl:justify-between md:justify-between">
            <div className='2xl:flex'>
              <p className="xs:mx-6">It is a matter of pride for Falcon 900DX that we have one of the best <span className='text-white'>.</span></p>
              <p className="xs:mx-5"> air charter safety records in the region</p>
            </div>
          <div className='xs:flex xs:justify-between xs:mx-4 xs:mt-3'>
          <FontAwesomeIcon icon={faArrowLeft} className='2xl:mx-10 md:mx-5 text-bold  shadow-xl shadow-white-500/50	 text-3xl p-3 rounded-full text-black bg-white hover:text-sky-700' />
          <FontAwesomeIcon icon={faArrowRight} className='2xl:mx-10 md:mx-5 text-bold text-3xl p-3 rounded-full text-white bg-blue-400  hover:text-sky-700' />
          </div>

        </div>
    </div>
  )
}