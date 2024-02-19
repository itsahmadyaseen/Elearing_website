import about from '../../assets/About.jpg'

const About = () => {
  return (
    <div className="section" id="about">
      <div className="sm:text-3xl text-2xl font-bold text-center mb-10">
          About <span className="text-black">Us</span>
        </div>
      <div className='grid md:grid-cols-2 gap-8 items-center '>
        <div className='border-[3px] border-solid border-Teal rounded-lg'>
          <img src={about} alt="" className='p-4'/>
        </div>
        <div>
          <div className='font-bold sm:text-[1.875rem] text-[1.5rem]'>
            We provide the <br/> best {' '} <span className='text-Teal'>online courses</span>
          </div>
          <p className='tex-sm text-gray leading-7 mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo nam tempore tenetur eos suscipit eligendi excepturi dolor, consectetur repellendus id alias deserunt laborum. Saepe magnam libero earum eaque soluta culpa.</p>
          <button className='tex-sm px-6 py-3 border border-gray rounded-lg font-bold'>
            Know more
          </button>
        </div>
      </div>
    </div>
  )
}

export default About