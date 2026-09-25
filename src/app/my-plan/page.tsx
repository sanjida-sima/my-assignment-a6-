
'use client'

import { useState } from "react"
import { useFitlog } from '../../components/providerss/FitlogProvider'

export default function MyPlanPage() {
    const{
        plan, saved, removeFromSaved,removeFromPlan
    } =useFitlog();
}
 