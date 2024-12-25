import React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
    const categories = [
        { id: 1, name: "Tech Blogs" },
        { id: 2, name: "Tech Tutorials" },
        { id: 3, name: "Code Snippets" },
        { id: 4, name: "Projects" },
    ];

    return (
        <div className="relative w-full min-h-[300px] md:min-h-[400px] flex justify-center items-center bg-gradient-to-r from-white to-white dark:from-stone-950 dark:to-stone-950 pb-4 md:pb-8 select-none">
            <div className="w-[90%] max-w-7xl">
                <Carousel
                    opts={{
                        loop: true,
                        align: "center",
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {categories.map((category) => (
                            <CarouselItem key={category.id}>
                                <div className="h-[200px] md:h-[300px] w-full flex items-center justify-center transform transition-all duration-500 scale-100 hover:scale-[101%]">
                                    <div className="w-full h-full bg-gradient-to-r from-gray-400 to-white dark:from-gray-800 dark:to-gray-900 
                                                  rounded-xl md:rounded-2xl flex items-center justify-center
                                                  border border-gray-200 dark:border-gray-700">
                                        <h3 className="text-3xl md:text-6xl font-bold text-gray-800 dark:text-white tracking-tight px-4 text-center">
                                            {category.name}
                                        </h3>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="absolute -left-2 md:-left-4 top-1/2 -translate-y-1/2 
                                                bg-white/80 hover:bg-gray-100/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 
                                                border-0 text-gray-800 dark:text-white h-8 w-8 md:h-12 md:w-12 
                                                transition-all duration-200 shadow-lg">
                        <ChevronLeft className="h-4 w-4 md:h-8 md:w-8" />
                    </CarouselPrevious>

                    <CarouselNext className="absolute -right-2 md:-right-4 top-1/2 -translate-y-1/2 
                                           bg-white/80 hover:bg-gray-100/80 dark:bg-gray-800/80 dark:hover:bg-gray-700/80 
                                           border-0 text-gray-800 dark:text-white h-8 w-8 md:h-12 md:w-12 
                                           transition-all duration-200 shadow-lg">
                        <ChevronRight className="h-4 w-4 md:h-8 md:w-8" />
                    </CarouselNext>
                </Carousel>
            </div>
        </div>
    );
};

export default Hero;