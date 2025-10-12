// // importing necessary library and methods
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// the component used for rendering this pages
import TitleMaker from "../components/titleMaker";
import NumberMaker from "../components/numberMaker";
import TechnoDescMaker from "../components/technoDescMaker";

export default function Techno({ data }) {
  // the state set to render the first technology in the JSON file
  const [selectionId, setId] = useState(1);
  const currentTechno = data[selectionId - 1];
  console.log(currentTechno.name.toLowerCase().split(" ").join("-"));

  return (
    <main
      className=" 
                  max-sm:bg-[url(assets/technology/background-technology-mobile.jpg)] 
                  md:bg-[url(assets/technology/background-technology-tablet.jpg)] 
                  min-lg:bg-[url(assets/technology/background-technology-desktop.jpg)]  
                  
                  text-white-Pure min-h-screen h-fit w-full 
                  barlow min-w-[375px] bg-cover bg-no-repeat fixed
                  
                  max-sm:pt-nav-mobile max-sm:px-header-mobile 
                  md:px-header-Tablet md:pt-nav-Tablet 
                  
                  lg:px-desktop lg:pt-nav-desktop lg:pr-0
                  
                  xlg:pl-desktop-xlg
                  xlg:pt-nav-xlg-desktop "
    >
      <TitleMaker code={"03"} text={"SPACE LAUNCH 101"} />

      <section
        className="   
                            lg:flex lg:flex-row-reverse 
                            lg:mt-[1.5rem] 
                            lg:item-center lg:justify-between 
                            lg:relative lg:h-[400px]
                            xlg:items-center 
                            slg:h-auto
                            slg:items-center
                            xlg:mt-xlg-desktop-title-distance
                            xlg:items- 
                            "
      >
        {/* image holder */}
        <AnimatePresence mode="wait">
          <motion.section
            key={selectionId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <div
              className={`  
                            bg-no-repeat bg-cover bg-center
                            max-sm:-mx-header-mobile max-lg:mt-2  
                            md:-mx-header-Tablet md:h-[350px] 
                            min-lg:w-[35vw] min-lg:h-[35vw] 
                            
                            slg:h-[30vw] 
                            max-sm:h-[260px] max-md:mt-6 
                            min-xlg:h-[25vw] min-xlg:w-[25vw]
                            
                            `}
              style={{
                backgroundImage:
                  window.innerWidth < 768
                    ? `url(/assets/technology/image-${currentTechno.name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}-landscape.jpg)`
                    : `url(/assets/technology/image-${currentTechno.name
                        .toLowerCase()
                        .split(" ")
                        .join("-")}-portrait.jpg)`,
              }}
            ></div>
          </motion.section>
        </AnimatePresence>
        {/* desc holder */}
        <section
          className=" lg:flex lg:flex-row 
                        max-slg:justify-center max-slg:items-center
                        lg:gap-[5vw]
                        min-slg:gap-[5vw]
                        xlg:gap-[15rem] 
                        
                        "
        >
          {/* number holder */}
          <section
            className=" flex max-md:flex-row  min-lg:h-full 
                        
                        max-md:gap-4 
                        max-lg:my-8 min-lg:gap-13
                        max-lg:justify-center max-lg:items-center
                        min-lg:flex-col  
                        
                        max-slg:gap-8 
                        xlg:gap-11 max-xlg:justify-start
                        xlg:h-[470px]
                        "
          >
            {
              <NumberMaker
                listNum={data.length}
                current={selectionId}
                set={setId}
              />
            }
          </section>
          <section className="w-full h-full flex flex-col justify-between">
            <div>
              <p
                className="   Bellefair opacity-50 text-center mb-4
                                max-sm:text-[1.125rem] md:text-[1.5rem]
                                lg:text-[2rem] lg:text-left
                                xlg:text-[3rem]"
              >
                THE TERMINOLOGY…
              </p>
            </div>
            <AnimatePresence mode="wait">
              <motion.section
                key={selectionId}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="  lg:flex lg:flex-col 
                            lg:min-h-[300px] 
                            lg:justify-between"
              >
                <TechnoDescMaker data={currentTechno} />
              </motion.section>
            </AnimatePresence>
          </section>
        </section>
      </section>
    </main>
  );
}
