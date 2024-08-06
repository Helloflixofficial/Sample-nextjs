import { Button } from "@/components/ui/button";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { HomeIcon } from "lucide-react";
export default function Home() {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <div className="flex">
        <Button size="sm" variant="ghost">
          <HomeIcon className="h-4 w-4 mr-2" />
          HOME Sweet Home!
        </Button>
        <UserButton afterSignOutUrl="/" />
      </div>
    </ClerkProvider>
  );
}
