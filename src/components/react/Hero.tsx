import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../ui/carousel";
import ClassNames from "embla-carousel-class-names";

const Hero = () => {
    const categories = [
        { id: 1, name: "Tech Blogs" },
        { id: 2, name: "Tech Tutorials" },
        { id: 3, name: "Code Snippets" },
        { id: 4, name: "Projects" },
    ];

    return (
        <div className="relative mx-auto mt-8 w-[100%] md:w-[75%] border-2">
            {/* Carousel Component */}
            <Carousel
                opts={{
                    loop: true,
                }}
                plugins={[
                    ClassNames({
                        snapped: ["scale-105", "opacity-100", "z-10"], // Active item classes split into an array
                        draggable: ["cursor-grab"], // Draggable class
                        dragging: ["cursor-grabbing"], // Dragging class
                    }),
                ]}
            >
                <CarouselContent>
                    {categories.map((category) => (
                        <CarouselItem
                            key={category.id}
                            className="flex-shrink-0 w-64 h-40 flex items-center justify-center bg-stone-950 dark:bg-white rounded-lg shadow-lg text-center text-xl font-semibold text-white dark:text-gray-900 transition-all duration-300 opacity-50 scale-95"
                        >
                            {category.name}
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Previous Button */}
                <CarouselPrevious
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-100 dark:bg-stone-800 hover:bg-gray-200 dark:hover:bg-stone-700 text-gray-900 dark:text-gray-200 p-2 rounded-full shadow-md"
                    aria-label="Previous Slide"
                >
                    ◀
                </CarouselPrevious>

                {/* Next Button */}
                <CarouselNext
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-100 dark:bg-stone-800 hover:bg-gray-200 dark:hover:bg-stone-700 text-gray-900 dark:text-gray-200 p-2 rounded-full shadow-md"
                    aria-label="Next Slide"
                >
                    ▶
                </CarouselNext>
            </Carousel>
        </div>
    );
};

export default Hero;
