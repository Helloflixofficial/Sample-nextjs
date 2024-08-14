"use client";
import React from "react";
import Image from "next/image";
import { AnimeEpisode } from "./types";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@radix-ui/react-navigation-menu";
import { title } from "process";
import { watch } from "fs";

const AnimeBanner: React.FC<{ episodes: AnimeEpisode[] }> = ({ episodes }) => {
  return (
    <div className="bg-black">
      <NavigationMenu>
        <NavigationMenuList>
          {episodes.length > 0 ? (
            <div className="grid grid-cols-6 ">
              {episodes.map((episode) => (
                <NavigationMenuItem key={episode.id}>
                  <NavigationMenuTrigger>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex bg-black h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href={`/anime/gogoanime/watch/${episode.episodeId}`}
                          >
                            <Image
                              src={episode.image}
                              alt={episode.title}
                              width={200}
                              height={200}
                            />

                            <div className="w-full max-w-sm p-4">
                              <p className="text-black  line-clamp-2 overflow-hidden hover:text-blue-600">
                                {episode.title}
                              </p>
                            </div>

                            <p className="text-sm leading-tight text-muted-foreground">
                              Episode: {episode.episodeNumber}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div>
                      <ul className="grid gap-3 p-auto  lg:grid-cols-[.75fr_1fr] bg-white rounded-lg overflow-hidden">
                        <ListItem href="/docs" title="Introduction">
                          Re-usable components built using Radix UI and Tailwind
                          CSS.
                        </ListItem>
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
          {...props}
        >
          <div className="text-sm font-normal leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default AnimeBanner;
