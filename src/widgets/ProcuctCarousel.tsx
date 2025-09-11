import { P } from "#/components/custom-react/typography";
import { Button } from "#/components/shadcn/button";
import { Carousel, CarouselContent, CarouselItem } from "#/components/shadcn/carousel"
import { Plus } from "lucide-react";
export type Product = {
    title: string;
    price: number
    img: any
    description?: string
}

export const ProductCarousel = ({ catalogue }: { catalogue?: Product[] }) => {
    if (!catalogue) return null
    return (
        <Carousel>
            <CarouselContent>
                {
                    catalogue.map(item => <CarouselItem className="sm:basis-1/2 lg:basis-1/3 pt-8">
                        <div className="bg-gradient-to-b from-white/40 to-transparent border rounded-[30px] backdrop-blur-[100px] border-white/40 px-8 py-6 relative overflow-visible">
                            <div className="absolute left-8 right-8 -top-8 bg-accent aspect-square rounded-3xl" />
                            <img alt={''} src={item.img.src} className="z-10 relative scale-110" />
                            <P size={'lg'} className="uppercase font-bold text-center">{item.title}</P>
                            <P className="text-center">{item.description}</P>
                            <div className="flex justify-between items-center">
                                <P size={'lg'}  className="uppercase font-bold">{item.price}₽</P>
                                <Button size={'icon'}><Plus /></Button>
                            </div>
                        </div>
                    </CarouselItem>)
                }
            </CarouselContent>
        </Carousel>
    )
}