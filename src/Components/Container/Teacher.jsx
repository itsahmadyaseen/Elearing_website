import { accordions } from '../../Data'
import teacher1 from '../../assets/teacher1.png'
import teacher2 from '../../assets/teacher2.png'
import { Accordion } from './Accordion'

const Teacher = () => {
  return (
    <div className="section" id="teacher">
      <div className="sm:text-3xl text-3xl font-bold text-center mb-10">
          Teachers at <span className="text-Teal">Skills</span>
        </div>
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        <div className="pl-5">
          <div className="sm:text-[1.875rem] text-[1.5rem] font-bold mb-5">
            Become <span className="text-Teal">An Instructor </span><br/> of our Platform
          </div>
          <p className="text-sm text-gray leading-7 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum itaque explicabo animi, ea laudantium exercitationem. Doloremque impedit aperiam dolore aspernatur. Velit magni neque amet atque architecto recusandae voluptate nihil cum blanditiis! Reprehenderit sapiente odio possimus ducimus, soluta corporis aliquam excepturi fuga iusto, sequi quis non error, dolores minus a.</p>
          <button className="bg-Teal rounded-lg py-3 px-4 text-white text-sm font-bold">
            Start Teaching
          </button>
        </div>
        <div className='p-4 md:w-3/4 sm:row-start-1'>
          <img src={teacher1} alt="" />
        </div>

        <div className="pl-5">
          <div className="sm:text-[1.875rem] text-[1.5rem] font-bold mb-5">
            Start <span className="text-Teal">Teaching </span><br/> with us
          </div>
          <p className="text-sm text-gray leading-7 mb-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum itaque explicabo animi, ea laudantium exercitationem. Doloremque impedit aperiam dolore aspernatur. Velit magni neque amet atque architecto recusandae voluptate nihil cum blanditiis! Reprehenderit sapiente odio possimus ducimus, soluta corporis aliquam excepturi fuga iusto, sequi quis non error, dolores minus a.</p>
          <button className="bg-Teal rounded-lg py-3 px-4 text-white text-sm font-bold">
            Get Started
          </button>
        </div>
        <div className='p-4 md:w-3/4'>
          <img src={teacher2} alt="" />
        </div>
        
      </div>

      <div className='text-center font-bold my-8 sm:text-[1.875rem] text-[1.5rem]'>
        <span className='text-Teal'>Frequently</span> Asked Questions
      </div>
      <div className='mt-12 max-w-[700px] mx-auto'>
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion}/>
        })}
      </div>
    </div>
  )
}

export default Teacher