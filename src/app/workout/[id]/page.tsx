'use client'
import Image from "next/image"
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import type { Workout } from "@/types/workout";




const WorkoutDetailsPage = () => {
const params = useParams();

const router = useRouter();

const id = params.id;
 const [workout, setWorkout] =useState<Workout | null>(null);
 const [loading, setLoading] = useState(true)
 

 useEffect(() =>{
    const fetchWorkout =async () =>{
        try{
            const res = await fetch (`https://api.abcz.workers.dev/api/fitlog/${id}`);

            if (!res.ok){
                throw new Error('Faild to fetch workout');
            }
            const data : Workout = await res.json();
            console.log('SINGLE WORKOUT');

            setWorkout(data);

        }
        catch(error){
            console.error(
                'Workout Error:', error
            );
            
            }
            finally{
             setLoading (false);
        }
    };

    fetchWorkout();
 } , [id]);


 if (loading){
    return(
        <div className="min-h-screen bg-[#0d0f12] flex justyfy-center items-center">

        <span className="loading loading-spinner loading-lg text-[#c6ff00]"></span>
        </div>
    );
 }

 if (!workout){
    return (
        <div className="min-h-screen bg-[#0d0f12] text white flex justify-center items-center">
            <h1 className="text-3xl font-bold">
               Workout not found 
            </h1>
        </div>
    )
 }

  return (
    <main className="min-h-screen bg-[#0d0f12] text-white">
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-10">

            <div className="grid lg:grid-cols-2 gap-10 items-start">

                {/* image */}
                <div className="rounded-xl overflow-hidden">

                    <Image

                    src={workout.image}
                    alt={workout.name}
                    width={700}
                    height={700}
                    className="w-full h-auto object-cover rounded-xl"
                    
                    />
                </div>

                <div>
                    {/* workout name */}

                    <h1 className="text-4xl md:text-5xl font-balck uppercase">
                        {workout.name}
                    </h1>

                    {/* discription */}
                    <p className="text-gray-400 mt-4 leading-relaxed">
                        {workout.discription}
                    </p>
                    {/* muscle grop */}
                    <div className="flex flex-warp gap-2 mt-5">
                        {workout.muscleGroups.map((group) => (
                            <span  key={group} className="bg-[#c6ff00] text-black px-3 py-1 rounded-full text-xs font-bold ">
                                {group}

                            </span>
                        )
                        )}

                    </div>
                    {/* information */}

                    <div className="bg-[#15181e] border border-[#252931] rounded-xl mt-5 overflow-hidden">

                        {/* equipment */}

                        <div className="flex justify-between px-5 py-4 border-b border-[#252931]">
                            <span className="text-gray-500 text-xs font-bold uppercase">
                                Equipment 
                            </span>
                            <span className="'text-gray-300 text-sm'">
                                {workout.equipment}
                            </span>

                        </div>
                        {/* difficulty */}
                        <div className="flex justify-between px-5 py-4 border-b border-[#252931]">
                            <span className="text-gray-500 text-xs font-bold uppercase">
                                Difficulty

                            </span>

                            <span className="text-gray-300 text-sm">
                                {workout.difficulty}
                            </span>

                        </div>
                        {/* sets */}

                        <div className="flex justify-between px-5 py-4 border-b border-[#252931]">
                            <span className="text-gray-500 text-xs font-bold uppercase">

                                Sets
                            </span>

                            <span className="text-gray-300 text-sm">
                                {workout.sets}
                            </span>

                        </div>


                        {/* ?reps */}
                        <div className="flex justify-between px-5 py-4 border-b border-[#252931]">

                            <span className="text-gray-500 text-xs font-bold uppercase" >

                                Reps
                            </span>

                            <span className="text-gray-300 text-sm">
                                {workout.reps}
                            </span>
                        </div>


                        {/* duration */}
                        <div className="flex justify-between px-5 py-4 border-b border-[#252931]">
                            <span className="text-gray-500 text-xs font-bold uppercase" >

                                Duration
                                 
                            </span>
                            <span className="text-gray-300 text-sm" >
                                {workout.duration}min
                            </span>
                        </div>

                        {/* cal */}
                        <div className="flex justify-between items-center px-5 py-5 border-b border-[#252931]">
                            <span className="text-gray-500  text-xs font-bold uppercase">

                                Calories

                            </span>

                            <span className="text-gray-300 text-sm">
                                {workout.caloriesBurned}kcal
                            </span>
                        </div>

                        {/* rating */}
                        <div className="flex justify-between px-5 py-5 border-b border-[#252931]">
                            

                            <span className="text-gray-500 text-xs font-bold uppercase">


                                Rating


                            </span>

                            <span className="text-gray-300 text-sm">
                                {workout.rating}
                            </span>
                        </div>


                    </div>

                    {/* instraction */}
                    <div className="mt-7">

                        <h1 className="text-white font-bold text-lg uppercase">
                            Instructions
                        </h1>

                        <ol className="mt-4 space-y-4 text-gray-400 text-sm list-decimal list-inside">

                            {workout.discription?.map((instruction :string, index :number) =>(
                                <li key={index}>
                                    {instruction}

                                </li>
                            ))}

                        </ol>


                    </div>

                    {/* button */}

                    <div className="flex flex-wrap gap-3 mt-8">

                        <button onClick={() =>router.push('/my-plan')}
                        className="bg-[#c6ff00] text-black font-bold px-5 py-3 rounded-lg">
                            Add to todays plan
                        </button>


                        <button onClick={() => router.push('/saved')} className="border border-[#343942] text-gray-300 px-5 py-3 rounded-lg">

                            Save for later

                        </button>


                    </div>
                </div>

            </div>
        </section>
    </main>
  );
};

export default WorkoutDetailsPage