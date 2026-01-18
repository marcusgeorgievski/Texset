import { cn } from "@/lib/utils";
import { Eye, Heart } from "lucide-react";
import Image from "next/image";

type TemplateThumbnailProps = {
  title: string;
  author: string;
  views: number;
  likes: number;
  imageUrl?: string;
  className?: string;
};

export default function TemplateCard({
  title,
  author,
  views,
  likes,
  imageUrl,
  className,
}: TemplateThumbnailProps) {
  return (
    <div className={cn("cursor-pointer group", className)}>
      {/* Image/Preview */}
      <div className="relative w-full aspect-[8.5/11] bg-neutral-100 border border-neutral-200 rounded-lg mb-3 group-hover:border-neutral-400 transition-colors p-4">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain p-4"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-neutral-400">
            Preview
          </div>
        )}
      </div>

      {/* Info Section */}
      <div className="flex items-start justify-between gap-2">
        {/* Left: Title and Author */}
        <div className="flex-1 min-w-0 space-y-0">
          <p className="font-semibold text-sm truncate">{title}</p>
          <p className="text-sm text-muted-foreground truncate">@{author}</p>
        </div>

        {/* Right: Stats */}
        <div className="flex flex-col items-end gap-1 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            <span className="text-xs">{views}</span>
          </div>
          <div className="flex items-center gap-1">
            {/* If user has liked: fill-red-500 text-transparent */}
            <Heart className="w-3.5 h-3.5" />
            <span className="text-xs">{likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
