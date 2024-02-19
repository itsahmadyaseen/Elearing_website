import {motion} from 'framer-motion'

const Contact = () => {
  return (
    <div className="section" id="contact">
      <div className="text-center">
        <div className="text-2xl font-bold ">
          Subscribe Newsletter
        </div>
        <p className="text-sm text-gray leading-7 mt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi temporibus modi itaque incidunt nostrum possimus officiis, illum maiores nisi ut qui consectetur eum debitis fugiat nihil repudiandae saepe consequatur sit, accusamus ab quos quasi praesentium neque eaque? Repellat quia, fugit consequatur distinctio mollitia inventore quae vero amet vitae, repellendus unde dolorum doloribus accusantium sint molestias deleniti saepe hic suscipit dolore!</p>
        <motion.form 
        initial={{scale:0}}
        whileInView={{scale:1}}
        transition={{duration:0.5}}
        className="mt-5">
          <input type="text" placeholder='Enter your email address' 
                 className="text-sm sm:p-3 p-2 outline-none shadow-md sm:w-72 w-60"/>
          <button className="text-sm text-white bg-Teal sm:p-3 p-2 font-bold">
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  )
}

export default Contact