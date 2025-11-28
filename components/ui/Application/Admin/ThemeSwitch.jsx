'use client'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
 
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { IoMdSunny } from "react-icons/io";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { Button } from "../../button";
import { useTheme } from "next-themes";
const ThemeSwitch = () => {
     const { setTheme } = useTheme()
  return (
  <DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button type="button" variant="ghost" className="cursor-pointer">
        <IoSunnyOutline className="dark:hidden"/>
        <IoMoonOutline className="hidden dark:block"/>
    </Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
   
    <DropdownMenuItem onClick={()=> setTheme('light')} >Light</DropdownMenuItem>
    <DropdownMenuItem onClick={()=> setTheme('dark')} >Dark</DropdownMenuItem>
    <DropdownMenuItem onClick={()=> setTheme('system')} >System</DropdownMenuItem>
  
  
   
  </DropdownMenuContent>
</DropdownMenu>
  )
}

export default ThemeSwitch