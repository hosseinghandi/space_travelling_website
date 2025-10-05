import Destination from "../pages/destination.jsx";

function Home({isdestinationasked, setDestinationPage, dataForDestination}) {
    return(
        <>
        {!isdestinationasked ? <main className="   bg-[url(assets/home/background-home-mobile.jpg)] 
                            h-screen bg-cover px-header p-nav-mobile text-center min-w-[375px] ">
        {/* this is the section holder*/}
        <div className="flex flex-col">

            {/* this is the upper part  */}
            <section className="text-white uppercase">

                <p className="text-[1rem]  barlow tracking-[0.15rem]">So, you want to travel to</p>
                <h1 className="text-[5rem] Bellefair py-6">Space</h1>
                <p className="normal-case text-[0.9375rem]">
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the edge 
                    of it. Well sit back, and relax because we’ll give you a truly 
                    out of this world experience!
                </p>

            </section>

            {/* this is the bottom part */}
            <section>

                <div className="flex justify-center items-center relative">
                        <button
                        onClick={() => setDestinationPage( prev => !prev)}
                        className="
                            bg-white w-[244px] h-[244px] opacity-0
                            rounded-full flex mx-auto mt-[7.5rem]
                            justify-center items-center text-center absolute
                            active:opacity-25
                        "></button>
                        <div 
                            className=" bg-white-Pure w-[144px] h-[144px] rounded-full flex mx-auto mt-[7.5rem] 
                                        justify-center items-center text-center cursor-pointer" >
                            <span className="Bellefair text-[1.25rem]">Explore</span>
                        </div>
                </div>
            </section>
        </div>

        </main> : <Destination data={dataForDestination}/>}
        </>
    )
}
export default Home

