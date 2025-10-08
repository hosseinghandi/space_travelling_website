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
  console.log((currentTechno.name.toLowerCase()).split(" ").join("-"))
  
  return (
    <main
      className=" barlow min-w-[375px]
                  max-sm:bg-[url(assets/technology/background-technology-mobile.jpg)] 
                  md:bg-[url(assets/technology/background-technology-tablet.jpg)]    
                  text-white-Pure min-h-screen h-fit w-full bg-cover 
                  max-sm:pt-nav-mobile max-sm:px-header-mobile 
                  md:px-header-Tablet md:pt-nav-Tablet 
                  lg:px-desktop lg:pt-nav-desktop lg:pr-0"
    >
      <TitleMaker code={"03"} text={"SPACE LAUNCH 101"} />

    <section className="lg:flex lg:flex-row-reverse ">

      {/* image holder */}
      <AnimatePresence mode="wait">
        <motion.section
          key={selectionId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className={` max-sm:-mx-header-mobile  
                            md:-mx-header-Tablet md:h-[350px] 
                            lg:w-[600px] lg:h-[600px] lg:right-0
                            max-sm:h-[260px] mt-6 bg-no-repeat bg-cover`}
                          style={{
                            backgroundImage: window.innerWidth < 768
                              ? `url(/assets/technology/image-${currentTechno.name.toLowerCase().split(" ").join("-")}-landscape.jpg)`
                              : `url(/assets/technology/image-${currentTechno.name.toLowerCase().split(" ").join("-")}-portrait.jpg)`
                          }}>
            {/* <img
              className="w-full h-full "
              src={`${currentTechno.images.landscape}`}
              alt=""
            /> */}
          </div>
        </motion.section>
      </AnimatePresence>
      {/* number holder */}
      <section className="lg:flex lg:flex-row 
                          lg:justify-start lg:items-center
                          lg:gap-[36px]">

        <section
          className=" flex flex-row gap-4 justify-center items-center
                      my-8 lg:flex-col "
        >
          {
            <NumberMaker
              listNum={data.length}
              current={selectionId}
              set={setId}
            />
          }
        </section>
        <AnimatePresence mode="wait">
          <motion.section
            key={selectionId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <div>
              <p
                className=" Bellefair opacity-50 text-center mb-4
                            max-sm:text-[1.125rem] md:text-[1.5rem]
                            lg:text-left"
              >
                THE TERMINOLOGY…
              </p>
            </div>
            <TechnoDescMaker data={currentTechno} />
          </motion.section>
        </AnimatePresence>
      </section>
    </section>
    </main>
  );
}
