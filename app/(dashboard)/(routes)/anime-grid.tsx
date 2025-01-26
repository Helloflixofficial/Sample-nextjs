"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

interface Anime {
    id: string
    episodeId: string
    episodeNumber: number
    title: string
    image: string
    url: string
}

interface ApiResponse {
    currentPage: number
    hasNextPage: boolean
    results: Anime[]
}

function AnimeCard({ anime }: { anime: Anime }) {
    return (
        <Card className="group relative bg-transparent border-0">
            <CardContent className="p-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image
                        src={anime.image || "/placeholder.svg"}
                        alt={anime.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16.67vw"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex flex-wrap gap-1.5">
                            <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                                EP {anime.episodeNumber}
                            </Badge>
                        </div>
                    </div>
                </div>
                <div className="pt-3 space-y-1">
                    <h3 className="font-medium text-sm text-white line-clamp-2 group-hover:text-primary transition-colors">
                        {anime.title}
                    </h3>
                </div>
            </CardContent>
        </Card>
    )
}

export function AnimeGrid() {
    const [animes, setAnimes] = React.useState<Anime[]>([])
    const [isLoading, setIsLoading] = React.useState(true)
    const [error, setError] = React.useState<string | null>(null)

    React.useEffect(() => {
        async function fetchAnimes() {
            try {
                const response = await fetch("https://apicon-chi.vercel.app/anime/gogoanime/recent-episodes")
                if (!response.ok) {
                    throw new Error("Failed to fetch animes")
                }
                const data: ApiResponse = await response.json()
                setAnimes(data.results)
            } catch (err) {
                setError("Failed to load animes. Please try again later.")
            } finally {
                setIsLoading(false)
            }
        }

        fetchAnimes()
    }, [])

    if (isLoading) {
        return <div className="text-white text-center py-10">Loading...</div>
    }

    if (error) {
        return <div className="text-red-500 text-center py-10">{error}</div>
    }

    return (
        <section className="py-6 bg-[#1a1b26]">
            <div className="container px-4 md:px-6">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-semibold text-white">Recent Episodes</h2>
                    <Link href="/recent" className="flex items-center text-sm text-gray-400 hover:text-white transition-colors">
                        View more
                        <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
                    {animes.map((anime) => (
                        <AnimeCard key={anime.id} anime={anime} />
                    ))}
                </div>
            </div>
        </section>
    )
}

