import Pill from "@/components/pill";
import SearchInput from "@/components/seach-input";
import TemplateCard from "@/components/template-card";
import TemplateCardList from "@/components/template-card-list";
import Texset from "@/components/texset";
import { ThemeToggle } from "@/components/theme-toggle";

const templates = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  title: "Modern Resume and Some",
  author: "marcusgeorgievski",
  views: 1234,
  likes: 89,
  imageUrl: "/sample.png",
}));

export default function Test() {
  return (
    <div className="p-10 flex flex-col gap-10">
      <div className="flex gap-10 ">
        <ThemeToggle />
        <SearchInput />
        <div>
          <Pill text="Articles" />
        </div>
        <Texset />
      </div>

      <div>
        <TemplateCardList>
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              author={template.author}
              views={template.views}
              likes={template.likes}
              imageUrl={template.imageUrl}
            />
          ))}
        </TemplateCardList>
      </div>
    </div>
  );
}
