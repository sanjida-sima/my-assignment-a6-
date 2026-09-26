'use client'

import { useEffect, useState } from "react"
import type { Workout } from "@/types/workout"
import WorkoutCard from "@/components/workout/WorkoutCard"
import Hero from '@/components/home/Hero'


export default function Home() {

  const [ workouts ,setWorkouts] = useState<Workout[]> ([]);
  const [ loading, setLoading] = useState(true);

  useEffect (() => {
    const fetchData = async () => {
      try{

        const res = await fetch ('https://api.abcz.workers.dev/api/fitlog');

        if (!res.ok) {
          throw new Error ('faild to fetch data');

        }
        const data = await res.json();
        setWorkouts(data);
      }

      catch (error){
        console.error(' API Error:', error )
      }
       finally{
        setLoading(false)
       }

    };


    fetchData();
  }, []);

  
return (

  <main>
    <Hero />
    <section id="library" className="max-w-7xl mx-auto px-5 py-16">
    <h2 className="text-4xl text-white">THE LIBRARY</h2>
    <p className="text-gray-500 mt-2">Twelve lifts covering every major muscle group.</p>

    {loading ? (
      <div className="flex justify-center py-20"><span className="loading loading-spinner loading-lg"></span></div>
    ) :(
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">

        {
          workouts.map((workout) =>(

            <WorkoutCard  key={workout.id}
            workout={workout}/>
          ))
        }

      </div>
    )}

</section>

  </main>
);}

