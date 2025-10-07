import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { CalendarDaysIcon, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Kavitációs zsírbontás",
    href: "#",
    description:
      "Ez a kezelés segít lebontani a zsírt az egész testen. Meg még arra is jó, hogy még egy sort írjak ide.",
  },
  {
    title: "IPL szőrtelenítés",
    href: "#",
    description:
      "Teljes szőrtelenítés, majdnem végleges. De ennek is inkább két sorosnak kell lennie.",
  },
  {
    title: "Dermarolleres testkezelések",
    href: "#",
    description:
      "A dermaroller kezelés egy olyan modern bőrfeszesítő eljárás, melynek során, a bőr...",
  },
  {
    title: "Cellulit kezelés",
    href: "#",
    description:
      "A narancsbőr, vagy más néven cellulit a női szépség makacs ellensége.",
  },
];

export const Header = () => {
  return (
    <div className="border-fuego-500 border-b-2 bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="hidden lg:flex">
          <Image
            src="/images/gpb-logo.svg"
            alt="Green Point Beauty"
            width={200}
            height={50}
          />
        </div>
        <div className="flex lg:hidden">
          <Image
            src="/images/gpb-logo.svg"
            alt="Green Point Beauty"
            width={160}
            height={40}
          />
        </div>

        <div className="hidden justify-center lg:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/bemutatkozas">Bemutatkozás</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Testkezelések</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[200px] gap-4">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="#">Kezelés 1</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Kezelés 2</Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link href="#">Kezelés 3</Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Arckezelések</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/arak">Árak</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/kapcsolat">Kapcsolat</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <Button variant="default" className="hidden lg:flex">
          <CalendarDaysIcon className="size-5" />
          <span>Foglalás</span>
        </Button>
        <div className="flex lg:hidden">
          <MenuIcon className="text-fuego-700" />
        </div>
      </div>
    </div>
  );
};

const ListItem = ({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-base leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
