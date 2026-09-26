

import type { Workout } from "@/types/workout";

export interface WorkoutCardProps {
    workout: Workout
}

const WorkoutCard =({workout  }: WorkoutCardProps)=> {
    
    return (
        <div>
            <h2>{workout.name}</h2>
        </div>
    )
}

export default WorkoutCard