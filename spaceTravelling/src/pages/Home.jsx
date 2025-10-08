// there is destionation page channel here that can be called
// from inside this compoenent that is imported

function Home({ setDestinationPage, setpage }) {
  return (
    <>
      {/* if the destionation is not call render the home page */}
      <div
        className="min-h-screen overflow-scroll  
                        border-4
                        max-sm:bg-[url(assets/home/background-home-mobile.jpg)] 
                        md:bg-[url(assets/home/background-home-tablet.jpg)]
                        lg:bg-[url(assets/home/background-home-desktop.jpg)]
                        bg-cover bg-center bg-no-repeat fixed bottom-0 top-0 right-0 w-full "
      >
        <main
          className="       max-sm:pt-nav-mobile text-center
                            max-sm:px-header-mobile barlow 
                            min-w-[375px] text-white-Pure
                            max-md:pt-nav-Tablet
                            lg:pt-[400px] lg:px-desktop"
        >
          {/* this is the section holder*/}
          <section
            className="flex flex-col 
                      justify-between
                      lg:flex-row lg:gap-[300px] 
                      lg:max-h-[343px] 
                      lg:items-center
                             "
          >
            {/* this is the upper part  */}
            <section className="text-white uppercase flex flex-col items-center lg:items-start">
              <p
                className="text-[1rem] barlow tracking-[0.15rem] 
                              md:text-[1.75rem]"
              >
                So, you want to travel to
              </p>
              <h1 className="text-[5rem] Bellefair max-md:py-6 md:text-[9rem]">
                Space
              </h1>
              <p className="normal-case 
              text-[0.9375rem] 
              md:text-[1rem] 
              md:w-tablet
              lg:text-[1.25rem]
              lg:text-justify">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </section>

            {/* this is the bottom part which is includes a 
              luminous interactive bubble */}
            <section>
              <div className="flex justify-center items-center relative">
                <button
                  onClick={() => {
                    setDestinationPage((prev) => !prev);
                    setpage("Destination");
                  }}
                  className="
                            bg-white w-[35vh] h-[35vh] opacity-0
                            rounded-full flex mx-auto mt-[7.5rem]
                            justify-center items-center text-center absolute
                            active:opacity-25
                            md:w-[50vh] md:h-[50vh]
                        "
                ></button>
                <div
                  className="   bg-white-Pure w-[20vh] h-[20vh] rounded-full 
                                flex mx-auto max-md:mt-[7.5rem] justify-center items-center 
                                text-center hover:cursor-pointer
                                md:w-[30vh] md:h-[30vh]"
                >
                  <span
                    className="Bellefair text-[1.25rem] text-black
                               md:text-[2rem]"
                  >
                    Explore
                  </span>
                </div>
              </div>
            </section>
          </section>
        </main>
      </div>
    </>
  );
}
export default Home;
