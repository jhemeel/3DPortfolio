import { useState, useRef } from "react"
import {SectionWrapper} from  '../hoc'
import { styles } from "../styles";
import { slideIn} from '../utils/motion';
import { motion } from "framer-motion";
import Earth from './canvas/Earth'
import emailjs from '@emailjs/browser'


const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange =(e) => {}
  const handleSubmit =(e) => {}

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden" >
      <motion.div
      variants={slideIn('left', 'tween', 0.2, 1)}
      className="flex-[0.75], bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>get In touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form action=""
          
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
          >
            <label htmlFor="" className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name:</span>
              <input
               type="text" 
               name="name" 
               value={form.name}
               onChange={handleChange}
               placeholder="Enter your name..."
               className="bg-tertiary py-4 px-6 placeholder:text-secondary
                          text-white rounded-lg outline-none border-none font-medium"
               id="" />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span className="text-white font-medium mb-4">Mail address:</span>
              <input
               type="email" 
               name="email" 
               value={form.email}
               onChange={handleChange}
               placeholder="Enter your email..."
               className="bg-tertiary py-4 px-6 placeholder:text-secondary
                          text-white rounded-lg outline-none border-none font-medium"
               id="" />
            </label>
            <label htmlFor="" className="flex flex-col">
              <span className="text-white font-medium mb-4">Message:</span>
              <textarea
              rows='7'
               name="message" 
               value={form.message}
               onChange={handleChange}
               placeholder="What do you want to say?..."
               className="bg-tertiary py-4 px-6 placeholder:text-secondary
                          text-white rounded-lg outline-none border-none font-medium"
               id="" >

               </textarea>
            </label>
            <button type="submit"
              className="bg-tertiary
              py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
              >
              {loading ? 'Sending...': "Send"}
            </button>

        </form>
      </motion.div>
      <motion.div
      variants={slideIn('right', 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <Earth/>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")