'use client'

import SideMenu from "@/components/SideMenu"
import CalendarHomepage from "@/components/CalendarHomepage"


export default function Homepage() {



    
    return (
        
        <div className="h-screen w-auto grid grid-cols-7">

            <div>
                <SideMenu />
            </div>
            <div className="col-span-6">
                
                <CalendarHomepage />
            </div>
            
        </div>
    )
}