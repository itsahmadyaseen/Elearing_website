import { FiBook } from "react-icons/fi";
import { MdAccessTime } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

const Card = ({id, image, hours, number,category}) => {
  return (
    <div className="mt-4">
    <div className="flex flex-row items-center p-2 border-2 border-teal-500 rounded-md shadow-xl  ">
        <div className="m-3 md:w-[45%] border border-Teal rounded-md">
          <img src={image} alt="" className='p-4 '/>
        </div>
        <div>
        <div className="font-bold text-xl py-2">
            {category}
        </div>
        <div>
            <p className="text-md leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vitae ipsam doloremque dignissimos repudiandae sunt necessitatibus neque magni iusto, enim, possimus impedit distinctio praesentium ab tempore? Dolorum, corporis! Voluptas, omnis.</p>
        </div>
        <div className="mt-3 flex">
            <FiBook className="text-2xl text-teal-500" /> <p className="px-2">{number} Courses</p> 
            <MdAccessTime className="text-2xl ml-8 text-teal-500" /> <p className="px-2">{hours} Hours</p>
        </div>
        <div className="mt-4 flex">
            <FaCheck className="text-2xl text-teal-500"/> <p className="px-2">2 Lakhs+ Students Enrolled</p> 
        </div>
        <div className="flex">
            <FaCheck className="text-2xl text-teal-500"/> <p className="px-2">Live Support</p> 
        </div>
        <div className="flex">
            <FaCheck className="text-2xl text-teal-500"/> <p className="px-2">Certificate</p> 
        </div>
        <button className="px-6 py-3 mt-4 font-bold text-white bg-teal-500 rounded-md  text-sm">
              Get Started
        </button>
        </div>
    </div>
    
    </div>
  )
}

export default Card