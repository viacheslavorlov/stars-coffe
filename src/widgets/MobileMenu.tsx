import logo from '#/assets/logo.png'
import { Button } from "#/components/shadcn/button"
import { Sheet, SheetContent, SheetTrigger } from "#/components/shadcn/sheet"
import { menuItems } from "#/shared/const/menu"
import { AlignJustify } from "lucide-react"
import { useState } from "react"

export const MobileMenu = () => {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="link" size={'icon'} className="ml-auto md:hidden w-9 h-6"><AlignJustify className="size-10" /></Button>
            </SheetTrigger>
            <SheetContent className="md:hidden pt-20">

                <div className="relative w-full h-full space-y-2">
                     <a onClick={() => setOpen(false)} href={"/"} className="mx-auto aspect-square w-[200px] mb-10">
                        <img src={logo.src} alt='' className="w-[200px] object-contain mx-auto" loading="lazy" decoding="async" />
                    </a>
                    <div className="h-10"></div>

                    {menuItems.map(item => (
                        <div key={item.href}>
                            <a onClick={() => setOpen(false)} href={item.href}>{item.title}</a>
                        </div>
                    ))}

                    <div className="w-full bottom-0 absolute">

                    <a href={"https://app.stars-coffee.ru"} onClick={() => setOpen(false)} className="">
                        <Button className="w-full lg:w-40" size={'sm'}>Скачать приложение</Button>
                    </a>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}