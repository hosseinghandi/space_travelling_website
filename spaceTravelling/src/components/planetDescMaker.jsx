import { motion, AnimatePresence } from "framer-motion";
export default function planetDescMaker ({planetData, current}) {
    
    const planetToRender = planetData.find(
      (p) => p.name.toLowerCase() === current.toLowerCase())
    
      return (
    <AnimatePresence mode="wait">
      <motion.section 
        key={planetToRender.name}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0}}
        transition={{ duration: 0.6, ease: "easeInOut" }}>
        <div
          className="flex flex-col justify-center items-center 
                  w-full my-6 border-b-1 border-gray-500 text-white-Pure"
                  
        >
          <h1 className="text-5xl  Bellefair">{planetToRender.name}</h1>
          <p
            className="mt-4 text-center text-[0.9375rem] 
                                          text-white font-extralight leading-7
                                          barlow-reg mb-6 h-[137px] 
                                          "
          >
            {planetToRender.description}
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center 
                                      text-white-Pure text-center gap-4"
        >
          <div>
            <p
              className="uppercase text-[0.875rem] font-light 
                              tracking-[2px] text-white"
            >
              AVG. DISTANCE
            </p>
            <p className="text-[1.75rem] Bellefair">
              {planetToRender.distance}
            </p>
          </div>
          <div>
            <p
              className="uppercase text-[0.875rem] font-light 
                              tracking-[2px] -1text-white"
            >
              Est. travel time
            </p>
            <p className="text-[1.75rem] Bellefair">{planetToRender.travel}</p>
          </div>
        </div>
      </motion.section>
    </AnimatePresence>
    );
  };