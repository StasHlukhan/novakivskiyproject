import {useState} from "react";

export const useScrollAnim = () => {
    const [scrolled, setScrolled] = useState(false);
    const scrollAnim = () =>{
        
        const scrolling = () => {
          const currentScroll = window.scrollY;
        if (currentScroll > 1600 && currentScroll <= 6100) {
        setScrolled(true);
        } else if( currentScroll > 7100 &&  currentScroll <= 10500){
        setScrolled(true);
        }else if( currentScroll > 11900 && currentScroll <= 21800 ){
        setScrolled(true);
        }else if( currentScroll > 22800 && currentScroll <= 35000 ){
        setScrolled(true);
        }else if( currentScroll > 36500  ){
        setScrolled(true);
        }
        else  {
        setScrolled(false);
        } 
         };
        window.addEventListener("scroll", scrolling);
        return () => {
        window.removeEventListener("scroll", scrolling);
    };
    }
    
  return [scrollAnim,scrolled];
}