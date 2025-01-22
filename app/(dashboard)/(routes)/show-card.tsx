import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

interface ShowCardProps {
    title: string;
    platform: "TV" | "ONA"; // Strictly defined as TV or ONA
    duration: string;
    episodeCount?: number;
    additionalBadges?: number[];
    imageUrl: string;
}

export function ShowCard({
    title,
    platform,
    duration,
    episodeCount,
    additionalBadges = [],
    imageUrl,
}: ShowCardProps) {
    return (
        <Card className="group overflow-hidden bg-transparent border-0 transition-transform hover:scale-[1.02]">
            <Link href="#" className="block">
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <Image
                        src={imageUrl || ""}
                        alt={title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex gap-1.5">
                            {episodeCount && (
                                <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                                    {episodeCount}
                                </Badge>
                            )}
                            {additionalBadges?.map((badge, index) => (
                                <Badge key={index} variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                                    {badge}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </div>
                <CardContent className="px-1 pt-3">
                    <h3 className="font-medium text-sm text-white line-clamp-2">{title}</h3>
                    <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                        <span>{platform}</span>
                        <span>•</span>
                        <span>{duration}</span>
                    </div>
                </CardContent>
            </Link>
        </Card>
    );
}
