import { NavbarItems } from "@/lib/navbarItems";
import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex h-full min-h-full items-center justify-center gap-4 rounded-lg border border-zinc-600 bg-primary/80 py-1 shadow-md lg:w-12">
      <div className="flex justify-evenly gap-2 lg:flex-col">
        {NavbarItems.map((item, index) => {
          return (
            <Link href={item.slug} key={index} aria-label={item.name}>
              <button
                aria-label={item.name}
                key={index}
                className="flex h-12  items-center justify-center"
              >
                <item.icon
                  size="2rem"
                  className="cursor-pointer rounded  bg-secondary/25 py-2  shadow duration-300 ease-in-out hover:scale-110 hover:bg-secondary/50 hover:shadow-xl"
                />
              </button>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Nav;
