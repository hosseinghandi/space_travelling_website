import { motion, AnimatePresence } from "framer-motion";
import { useState} from "react";

// componenet
import TitleMaker from "../components/titleMaker";
import NumberMaker from "../components/numberMaker";
import TechnoDescMaker from "../components/technoDescMaker";


export default function Techno({data}) {
    const [selectionId , setId] = useState(1)
    const currentTechno = data[selectionId - 1]

    return( 
        <main className="bg-[url(assets/technology/background-technology-mobile.jpg)] 
                text-white-Pure min-h-screen h-fit w-full bg-cover pt-nav-mobile px-header barlow min-w-[375px]">
            <TitleMaker 
            code={"03"} 
            text={"SPACE LAUNCH 101"}/>

            {/* image holder */}
            <AnimatePresence mode="wait">
            <motion.section
                key={selectionId}
                initial= {{opacity: 0}}
                animate= {{opacity: 1}}
                exit= {{opacity: 1}}
                transition= {{duration: 0.6,  ease:"easeInOut"}}
                >
                <div className="-mx-header h-[260px]">
                    <img className="w-full h-full "
                    src={`${currentTechno.images.landscape}`}
                    alt="" />
                </div>
            </motion.section>
            </AnimatePresence>
            {/* number holder */}
            <section className="flex flex-row gap-4 justify-center items-center
                            my-8    ">
                {<NumberMaker 
                current={selectionId}
                set={setId} 
                />}
            </section>
            <div>
                <p className="Bellefair opacity-50 text-[1.125rem] 
                 text-center mb-4">
                    THE TERMINOLOGY…</p>
            </div>
            <AnimatePresence mode="wait">           
                <motion.section 
                key={selectionId}
                initial= {{opacity: 0}}
                animate= {{opacity: 1}}
                exit= {{opacity: 1}}
                transition= {{duration: 0.8,  ease:"easeInOut"}}
                >
                        <TechnoDescMaker data={currentTechno}/>
                </motion.section>
            </AnimatePresence>


        
        </main>
    )
}