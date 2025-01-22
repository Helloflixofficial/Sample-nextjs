import HomePage from "./index";
import Nav from "./nav";
import { ShowCard } from "./show-card";

// Option 2: Type showData strictly
const showData: ShowCardProps = {
    title: "Ishura 2nd Season",
    platform: "TV",
    duration: "24m",
    episodeCount: 3,
    additionalBadges: [2],
    imageUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-KUeKYV6FP5H7HsLLrBTqFzGWr6uhUR.png",
};

export default function Home() {
    return (
        <div>
            <HomePage />
            <Nav />
            {/* Pass the required props to ShowCard */}
            <ShowCard
                title={showData.title}
                platform={showData.platform}
                duration={showData.duration}
                episodeCount={showData.episodeCount}
                additionalBadges={showData.additionalBadges}
                imageUrl={showData.imageUrl}
            />
        </div>
    );
}
