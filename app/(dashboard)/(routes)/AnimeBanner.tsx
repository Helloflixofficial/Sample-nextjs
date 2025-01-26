"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import { ScrollBar } from "@/components/ui/scroll-area"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Anime {
    id: string
    title: string
    image: string
    type: "TV" | "ONA" | "Music"
    duration: string
    episodeCount?: number
    additionalBadges?: number[]
}

const animes: Anime[] = [
    {
        id: "1",
        title: "Attacker You!",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YaIyCt2irYfHdXkFIy2BzuLZ3fr9Vm.png",
        type: "TV",
        duration: "23m",
        episodeCount: 55,
        additionalBadges: [58],
    },
    {
        id: "2",
        title: "You Are Ms. Servant",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YaIyCt2irYfHdXkFIy2BzuLZ3fr9Vm.png",
        type: "TV",
        duration: "23m",
        episodeCount: 12,
        additionalBadges: [12, 12],
    },
    {
        id: "3",
        title: "Blue Lock Season 2",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YaIyCt2irYfHdXkFIy2BzuLZ3fr9Vm.png",
        type: "TV",
        duration: "25m",
        episodeCount: 14,
        additionalBadges: [12, 14],
    },
    {
        id: "4",
        title: "Bleach: Thousand-Year Blood War",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YaIyCt2irYfHdXkFIy2BzuLZ3fr9Vm.png",
        type: "TV",
        duration: "24m",
        episodeCount: 14,
        additionalBadges: [13, 14],
    },
    {
        id: "5",
        title: "Wonderful Precure!",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YaIyCt2irYfHdXkFIy2BzuLZ3fr9Vm.png",
        type: "TV",
        duration: "23m",
        episodeCount: 50,
    },
    {
        id: "6",
        title: "Kaze no Invitation",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-YaIyCt2irYfHdXkFIy2BzuLZ3fr9Vm.png",
        type: "Music",
        duration: "2m",
        episodeCount: 1,
    },
]

export function AnimeCard({ anime }: { anime: Anime }) {
    return (
        <Card className="group relative bg-transparent border-0 w-[280px]">
            <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image
                        src={anime.image || "/placeholder.svg"}
                        alt={anime.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex flex-wrap gap-1.5">
                            {anime.episodeCount && (
                                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                                    {anime.episodeCount}
                                </Badge>
                            )}
                            {anime.additionalBadges?.map((badge, index) => (
                                <Badge key={index} variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pt-3 space-y-1">
                    <h3 className="font-medium text-sm text-white line-clamp-2 group-hover:text-primary transition-colors">
                        {anime.title}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <span>{anime.type}</span>
                        <span>•</span>
                        <span>{anime.duration}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export function AnimeBanner() {
    return (
        <section className="py-6 bg-[#1a1b26]">
            <div className="container">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-white">New On HiAnime</h2>
                    <Link href="/new" className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                        View more
                        <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                </div>
                <ScrollArea className="w-full whitespace-nowrap rounded-lg">
                    <div className="flex w-max space-x-4 p-1">
                        {animes.map((anime) => (
                            <AnimeCard key={anime.id} anime={anime} />
                        ))}
                    </div>
                    <ScrollBar orientation="horizontal" className="bg-white/5" />
                </ScrollArea>
            </div>
        </section>
    )
}

