
import Link from "next/link";
import type { Workout } from "@/types/workout";

export interface WorkoutCardProps {
    workout: Workout
}

const WorkoutCard =({workout ,  }: WorkoutCardProps)=> {
    
    return (
       <Link href={`/workout/${workout.id}`} >
       <article  className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition duration-300">

        <div className="aspect-vidio overflow-hidden bg-gray-100">

            <image src ={workout.image}
            alt={workout.name} className="w-full h-full object-cover hover:scale-105 transition duration-300" />

            
        </div>


<div className="p-5">
    {/* tags */}
    <div className="flex flex-warp gap-2 mb-3 "> {workout.muscleGroup.map((group) =>(
        <span key={group} className="badge badge-outline">{group} </span>
    ))} </div>

    {/* name */}
    <h3 className="font-balck text-lg uppercase">{workout.name} </h3>

    {/* equipment  */}

    <p className="text-gray-500 text-sm mt-2">{workout.equopment} </p>

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