"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { Workout } from "../../types/workout";


interface FitlogContextType {
  plan: Workout[];
  saved: Workout[];

  addToPlan: (workout: Workout) => void;

  removeFromPlan: (id: number) => void;

  saveWorkout: (workout: Workout) => void;
  removeFromSaved: (id: number) => void;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
}

const FitlogContext = createContext<FitlogContextType | undefined>(undefined);

const FitlogProvider = ({ children }: { children: ReactNode })=> {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem('fitlog-plan');
    const storedSaved = localStorage.getItem('fitlog-saved');
    if (storedPlan){
        setPlan(JSON.parse(storedPlan))
    }

    if(storedSaved){
        setSaved(JSON.parse(storedSaved))
    }
  },
   []);

   useEffect(
    () => {
        localStorage.setItem('fitlog-plan', JSON.stringify(plan))
    },  [plan])

    useEffect(
        () => {
            localStorage.setItem('fitlog-saved', JSON.stringify(saved))
        }, [saved] )
        const addToPlan = (workout:Workout) => {
            if (plan.length >= 5){
                alert ('You can add maximum 5 workouts.')
                return;
            }

            const exists = plan.some(
                (item) =>item.id === workout.id
            )

            if (exists){
                alert('This workout is already in your plan')
                return;
            }

            setPlan(
                (prev) => [...prev, workout]
            );
            alert('Added to today plan')

        }

        const removeFromPlan = (id:number) =>{
            setPlan((prev) => prev.filter((item) => item.id !== id));
        };

        const saveWorkout = (workout : Workout) => {
            const exists = saved.some((item)=> item.id === workout.id)

            if (exists){
                alert('This workout is already saved');
                return;
            }

            setSaved ((prev) => [...prev, workout]);
            alert('Saved for Later')


        };

        const removeFromSaved = (id:number) =>{
            setSaved((prev) => prev.filter ((item) =>item.id !==id))
            }


        const isInPlan = (id : number) => {
            return plan.some((item) => item.id === id);
        };

        const isSaved = (id : number ) => {
            return saved.some((item) => item.id === id)
        }
        

        return(
            <FitlogContext.Provider
           value={{
            plan, saved, addToPlan, removeFromPlan ,saveWorkout,  removeFromSaved, isInPlan, isSaved
           }}
            
            
            >
                {children}
                </FitlogContext.Provider>


        )

}

export function useFitlog(){
    const context = useContext(FitlogContext);
    if(!context){
        throw new Error(
            'useFitlog must be used inside Fitlogprovinder'
        );
    }

    return context;
}
export default FitlogProvider
