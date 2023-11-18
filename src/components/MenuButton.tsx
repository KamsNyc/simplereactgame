import React, {useState} from 'react'
import { motion } from 'framer-motion';
import { CancelPresentationIcon } from '@mui/icons-material/CancelPresentation';


function MenuButton() {
    const [isOpen, setIsOpen] = useState(false)

    const toggleNav = () => {
        setIsOpen(!isOpen)
    }

  return (

    // OPEN MENU
    <motion.section
    variants={{
      hidden: {opacity: 0, y: 75},
      visible: { opacity: 1, y: 0},
    }}
     initial='hidden'
     animate='visible'
    >

    <div className={isOpen ? 'absolute z-30 left-0 top-[-2.5rem] w-[75%] sm:w-[60%] md:w-[45%] ease-in-out duration-500 rounded-tr rounded-br backdrop-blur-md  bg-black/30 h-screen' : 'top-0 left-[-150px]'}>
         <section className={isOpen ? 'p-10' : 'hidden'}>
            
            <div className=" text-right">
            <CancelPresentationIcon onClick={() => {
                setIsOpen(!isOpen);
            }} className='w-[30px] h-[30px]'/>
            </div>

            <div className=" text-center">
                <h3 className='py-4'>OPEN FOR PROJECTS</h3>
            </div>

            <ul className="flex flex-col text-lg gap-4 ">
              <a href={"/"} className='p-2 hover:bg-gray-600 rounded-md border-2' >Home</a>
              <a className='p-2 hover:bg-gray-600 rounded-md border-2' href={"/about"}>About</a>
              <a className='p-2 hover:bg-gray-600 rounded-md border-2' href={"/work"}>Projects</a>
            </ul>
   
            
        </section>
        </div>

        

    <div onClick={toggleNav} className="flex items-center md:hidden" >
        <div className="">
      <MenuIcon className="w-[35px] h-[35px]" />
    </div>  

   
    </div>
    </motion.section>
 
  )
}

export default MenuButton
