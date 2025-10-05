import { motion, AnimatePresence } from "framer-motion";
import { useState} from "react";
import CrewProfileMaker from "../components/crewProfileMaker";
import TitleMaker from "../components/titleMaker";
export default function Crew({data}) {
  const [crewPersona, setCrewPerson] = useState("Douglas Hurley");
  const crewPresenting = data.find( crew => 
    ((crew.name).toLowerCase() === crewPersona.toLowerCase())) 
    
  const bubbleMaker = () => data.map( persona => (
    <span 
        key={persona.name}
        onClick={() => setCrewPerson(persona.name)}
        className={     `w-[10px] h-[10px] 
                        ${(persona.name).toLowerCase() === crewPersona.toLowerCase() ?
                            "bg-white-Pure" : "bg-gray-500"} 
                        rounded-full  text-white`}>
                        </span>
    ))


  return (
    <>
    <div className="min-h-screen
                    bg-[url(assets/crew/background-crew-mobile.jpg)] 
                    bg-cover bg-center bg-no-repeat fixed bottom-0 top-0  w-full ">

      <main
        className="         pt-nav-mobile 
                            px-header barlow 
                            min-w-[375px] text-white-Pure"
      >
        {/* post holder  */}
        
          {<TitleMaker code={"02"} text={"MEET YOUR CREW"}/>}
          {/* detail holder upper part */}
          <AnimatePresence mode="wait">
            <motion.section 
            key={crewPersona}
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col justify-center">
                    {<CrewProfileMaker current={crewPresenting}/>}
                    <div className="flex flex-row gap-4 my-6 mx-auto">
                        {bubbleMaker()}
                    </div>
                    {/* crew's image holder */}
                    <div className=" flex flex-col 
                    justify-center items-center ">
                        <img 
                        loading="lazy"
                        className="max-h-[320px]"
                        src={`${crewPresenting.images.webp}`} 
                        alt={`an image of ${crewPresenting}`} />
                    </div>
            </motion.section>
          </AnimatePresence>
      </main>
    </div>
    </>
  );
}
