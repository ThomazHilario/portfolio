import { gsap } from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin); 

export const useScrollSection = () => {

    const scrollSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);

        if(section) {
            gsap.to(window, {
                duration: 1,
                scrollTo: section.offsetTop - 120,
            })
        } 
    }


    return {
        scrollSection
    }
}