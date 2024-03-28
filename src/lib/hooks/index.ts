

import { usePathname } from "next/navigation"

export const useIsActive = (x: string) => { 
    const path = usePathname()    
    return path === x
 }

