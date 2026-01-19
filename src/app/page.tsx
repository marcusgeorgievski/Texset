import FilterGroup from "@/components/filter-group";
import Pill from "@/components/pill";
import SearchInput from "@/components/seach-input";
import TemplateCard from "@/components/template-card";
import TemplateCardList from "@/components/template-card-list";
import Cmu from "@/components/cmu";
import LatexLogoText from "@/components/latex-logo-text";

const templates = Array.from({ length: 5 }, (_, i) => ({
  id: i,
  title: "Modern Resume and Some",
  author: "marcusgeorgievski",
  views: 1234,
  likes: 89,
  rating: 4.2,
  downloads: 325,
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
          <Cmu className="text-4xl md:text-6xl lg:text-7xl">Texset</Cmu>
        </h1>

        <p className="mx-auto mb-6 text-center text-muted-foreground text-base sm:text-xl max-w-2xl lg:mx-0 ">
          Browse community created <LatexLogoText /> templates for your next
          project.
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
              rating={template.rating}
              downloads={template.downloads}
              imageUrl={template.imageUrl}
            />
          ))}
        </TemplateCardList>
      </section>
    </div>
  );
}
