import { categories, courses } from "../../../Data"
import Categories from './Categories'
import Course from "./Course"
import {motion} from 'framer-motion'

const Courses = () => {
  const container ={
    hidden: {
      opacity:0,
      scale:0
    },
    visible: {
      opacity:1,
      scale:1,
      transition: {
        delayChildren:0.3,
        staggerChildren:0.2
      }
    }
  }

  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-Teal">Categories</span>
        </div>
        <p className="leading-7 text-sm text-gray max-width-[700px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dolorum vitae perferendis a dolor cupiditate deleniti, beatae nesciunt in nemo molestiae voluptates rem autem ex. At, temporibus? Neque dolor at eligendi recusandae impedit autem vero natus ipsum exercitationem consequuntur vitae, laboriosam quod saepe animi aspernatur incidunt adipisci rerum ducimus quos.</p>
      </div>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-6">
        {categories.map((category) => {
          return <Categories key={category.id} {...category}/>
        })}
      </div>

      <div className="font-bold text-xl mt-32">
        Most Popular Courses
      </div>
      <div className="mt-12 overflow-x-hidden w-full relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide ">
          {courses.map((course) =>{
            return <Course key={course.id} {...course}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Courses