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
                            href={`/anime/gogoanime/info/${episode.id}`}
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
                    <div className="bg-white rounded-lg">
                      <ListItem href="/" title="Introduction">
                        <ul> DATA NOT FOUND</ul>
                      </ListItem>
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
    <>
      <NavigationMenuLink asChild></NavigationMenuLink>
    </>
  );
});
ListItem.displayName = "ListItem";

export default AnimeBanner;
