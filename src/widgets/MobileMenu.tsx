import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "#/components/shadcn/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "#/components/shadcn/sheet"
import { menuItems } from "#/shared/const/menu"
import { NavigationMenuLink } from "@radix-ui/react-navigation-menu"
import { AlignJustify } from "lucide-react"

export const MobileMenu = () => {
    return (
        <Sheet>
            <SheetTrigger className="ml-2 md:hidden">
                <AlignJustify />
            </SheetTrigger>
            <SheetContent>
                <NavigationMenu>
                    <NavigationMenuList>
                        {menuItems.map(item => (
                            <NavigationMenuItem>
                                <NavigationMenuLink href={item.href}>{item.title}</NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}

                    </NavigationMenuList>
                </NavigationMenu>
            </SheetContent>
        </Sheet>
    )
}