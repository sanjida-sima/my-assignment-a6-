import Image from 'next/image'
const Hero = () => {
  return(
      <>
      {/* hero-section */}

        <section className="max-w-7xl mx-auto px-5 md:px-8 pt-10">
        <div className="bg-[#15181e] rounded-2xl overflow-hidden ">
          <div className="grid md:grid-cols-2 items-center">
            {/* left-side */}
            <div className="p-8 md:p-14">
              <h1 className="text-[#c6ff00] font-bold text-sm mb-5 ">
                WORKOUT LIBRARY
              </h1>

              <p className="text-4xl md:text-6xl font-black uppercase leading-tight text-white">
                TRAIN WITH INTENT <br />
                LOG EVERY SET.{" "}
              </p>

              <p className="text-gray-400 mt-6 leading-relaxed max-w-xl">
                FitLog is a dark, no-nonsense gym companion: pick a lift, lock
                it into todays plan, and watch the weeks work add up.
              </p>
              <a href="#library" className="inline-block mt-7 bg-[#c6ff00] text-black font-bold px-6 py-3 rounded-md">BROWSE WORKOUTS</a>
            </div>

            {/* banner */}

            <div className="p-5">
              <Image src="/banner.png" alt="Fitlog Workout" 
              width= {700}
              height ={500} 
              className="w-full" />
            </div>
          </div>
        </div>
      </section>
      </>
    

 
    
);
}
export default Hero;
