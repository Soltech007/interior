import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, categories } from "@/lib/data";
import { ProjectCard } from "@/components/ProjectCard";

type CategoryPageProps = {
  params: {
    category: string;
  };
  searchParams: {
    sub?: string;
  };
};

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

// ---------- METADATA ----------
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryObj = categories.find((c) => c.slug === params.category);

  if (!categoryObj) {
    return { title: "Category Not Found" };
  }

  return {
    title: `${categoryObj.name} Projects | Beyond Interior Design Studio`,
    description: categoryObj.description,
  };
}

// ---------- PAGE ----------
export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const categoryObj = categories.find((c) => c.slug === params.category);

  if (!categoryObj) {
    notFound();
  }

  const selectedSub = searchParams.sub;

  // FILTER PROJECTS
  let categoryProjects = projects.filter((p) => p.category === params.category);

  if (selectedSub) {
    categoryProjects = categoryProjects.filter((p) => p.subcategory === selectedSub);
  }

  return (
    <div className="container mx-auto px-4 py-1">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          {categoryObj.name}
        </h1>

        {selectedSub && (
          <p className="mt-2 text-lg text-muted-foreground">
            Showing: <strong>{selectedSub}</strong>
          </p>
        )}

        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          {categoryObj.description}
        </p>
      </div>

      {categoryProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
