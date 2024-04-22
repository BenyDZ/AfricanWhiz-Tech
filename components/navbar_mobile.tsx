import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar_mobile = () => {
  const pathname = usePathname();
  return (
    <section className="w-full">
      {/* for the hamburger trigger button, component from shadcn */}
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            width={50}
            height={50}
            alt="hamburger icon"
            className="cursor-pointer md:hidden"
          />
        </SheetTrigger>
        <SheetContent
          className="flex flex-col gap-10 border-none bg-primary/60 max-w-96 md:hidden"
          side="right"
        >
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              width={"32"}
              height={"32"}
              alt="AfricanWhiz-Tech Logo"
              className="max-sm:size-30"
            />

            <p className="font-extrabold">AfricanWhiz-Tech</p>
          </Link>

          <div className="flex h-[calc1(100vh-72px)] flex-col justify-between overflow-y-auto">
            {/* all links inside will automaticaly close the menu after click */}
            <SheetClose asChild>
              <section className="flex h-full flex-col gap-5 pt-26">
                {sidebarLinks.map((link) => {
                  const isAcive = pathname === link.route;

                  return (
                    // to close after clicking
                    <SheetClose asChild key={link.route}>
                      <Link
                        href={link.route}
                        key={link.label}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60 hover:text-primary",
                          { "text-primary": isAcive }
                        )}
                      >
                        <p className="font-semibold">{link.label}</p>
                      </Link>
                    </SheetClose>
                  );
                })}
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default Navbar_mobile;
