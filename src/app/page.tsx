import FilterGroup from "@/components/filter-group";
import Pill from "@/components/pill";
import SearchInput from "@/components/seach-input";
import TemplateCard from "@/components/template-card";
import TemplateCardList from "@/components/template-card-list";
import Texset from "@/components/texset";

const templates = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  title: "Modern Resume and Some",
  author: "marcusgeorgievski",
  views: 1234,
  likes: 89,
  imageUrl: "/sample.png",
}));

const categories = [
  "Notes",
  "Books",
  "Academic Articles",
  "Reports",
  "Resumes",
];

export default function Home() {
  return (
    <div className="space-y-20 px-6 md:px-12 lg:px-20">
      <section className="max-w-3xl mx-auto flex flex-col gap-4 items-center mt-15">
        <h1>
          <Texset className="text-4xl md:text-6xl lg:text-7xl" />
        </h1>

        <p className="text-center text-lg text-muted-foreground sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-6">
          Browse community created LaTeX templates for your next project.
        </p>

        <div className="sticky w-full top-8">
          <SearchInput className="mb-1" />
        </div>

        <div className="text-center space-x-2 space-y-2">
          {categories.map((c) => (
            <Pill text={c} key={c} />
          ))}
        </div>
      </section>

      <section className="space-y-10">
        <div>
          <FilterGroup />
        </div>

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
      </section>
    </div>
  );
}
