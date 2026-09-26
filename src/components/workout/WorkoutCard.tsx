
import Link from "next/link";
import type { Workout } from "@/types/workout";
import Image from "next/image";

export interface WorkoutCardProps {
    workout: Workout
}

const WorkoutCard =({workout ,  }: WorkoutCardProps)=> {
    
    return (
       <Link href={`/workout/${workout.id}`} >
       <article  className="bg-[#15181e] rounded-2xl overflow-hidden border border-[#252931] hover:shadow-xl transition duration-300">

        <div className="aspect-vidio overflow-hidden bg-gray-100">

            <Image src ={workout.image}
            alt={workout.name}
            width={400}
            height={100} 
             className="w-full h-full object-cover hover:scale-105 transition duration-300" />

            
        </div>


<div className="p-5">
    {/* tags */}
    <div className="flex flex-warp gap-2 mb-3 "> {workout.muscleGroups.map((group) =>(
        <span key={group} className="badge bg-[#c6ff00] text-black border-none font-bold">{group} </span>
    ))} </div>

    {/* name */}
    <h3 className="font-balck text-lg uppercase text-white">{workout.name} </h3>

    {/* equipment  */}

    <p className="flex justify-betweent text-xs text-gray-400  mt-5">{workout.equipment} </p>

    {/* start */}
    <div className="flex justify-between text-xs text-gray-600 mt-5"> 
        <span>{workout.duration} min </span>
        <span> {workout.caloriesBurned} kcal</span>
        <span>{workout.rating}  </span>
    </div>

</div>
</article>
</Link>

    )
}

export default WorkoutCard