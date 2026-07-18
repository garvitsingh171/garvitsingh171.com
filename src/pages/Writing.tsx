import { useEffect, useState } from "react";
import {
  FeaturedWritingArticle,
  WritingArticleCard,
  WritingCategoryFilter,
  type WritingFilter,
} from "../components/writing";
import {
  getWritingCategoryById,
  writingArticles,
  writingCategories,
} from "../data/writing";
import type { WritingCategory, WritingCategoryId } from "../types/writing";
import { Button } from "../components/ui";

const writingPageTitle = "Writing | Garvit Singh";

const fallbackCategory = (id: WritingCategoryId): WritingCategory => ({
  id,
  label: "Writing",
  description: "Writing entry",
});

const resolveWritingCategory = (id: WritingCategoryId) =>
  getWritingCategoryById(id) ?? fallbackCategory(id);

const getEntryCountLabel = (count: number) =>
  `${count} ${count === 1 ? "entry" : "entries"}`;

type WritingEmptyStateProps = {
  title: string;
  description: string;
  onReset?: () => void;
};

function WritingEmptyState({
  title,
  description,
  onReset,
}: WritingEmptyStateProps) {
  return (
    <div
      role="status"
      className="rounded-lg border border-slate-800 bg-slate-900/60 p-8 text-center"
    >
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-300">
        {description}
      </p>

      {onReset ? (
        <div className="mt-6">
          <Button
            as="button"
            type="button"
            variant="outline"
            onClick={onReset}
          >
            View All Writing
          </Button>
        </div>
      ) : null}
    </div>
  );
}

export default function Writing() {
  const [selectedCategory, setSelectedCategory] =
    useState<WritingFilter>("all");

  useEffect(() => {
    const previousTitle = document.title;
    document.title = writingPageTitle;

    return () => {
      document.title = previousTitle;
    };
  }, []);

  const filteredArticles =
    selectedCategory === "all"
      ? writingArticles
      : writingArticles.filter(
          (article) => article.category === selectedCategory,
        );

  const featuredArticle = writingArticles.find(
    (article) => article.featured && article.status === "published",
  );

  const visibleGridArticles = featuredArticle
    ? filteredArticles.filter((article) => article.slug !== featuredArticle.slug)
    : filteredArticles;

  const selectedCategoryLabel =
    selectedCategory === "all"
      ? "All"
      : (getWritingCategoryById(selectedCategory)?.label ?? "this category");

  const hasWritingContent = writingArticles.length > 0;
  const hasFilteredArticles = filteredArticles.length > 0;
  const hasGridArticles = visibleGridArticles.length > 0;

  return (
    <>
      <section aria-labelledby="writing-page-heading">
        <header className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Writing
          </p>

          <h1
            id="writing-page-heading"
            className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Notes from building, contributing, and learning.
          </h1>

          <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Reflections on software projects, backend engineering, open-source
            collaboration, DSA, and the systems I use to improve as a developer.
          </p>
        </header>
      </section>

      {featuredArticle ? (
        <section
          className="mt-12 border-t border-slate-800 pt-10 sm:mt-16 sm:pt-12"
          aria-labelledby="featured-writing-heading"
        >
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Featured
            </p>
            <h2
              id="featured-writing-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Featured Writing
            </h2>
          </div>

          <FeaturedWritingArticle
            article={featuredArticle}
            category={resolveWritingCategory(featuredArticle.category)}
          />
        </section>
      ) : null}

      <section
        className="mt-12 border-t border-slate-800 pt-10 sm:mt-16 sm:pt-12"
        aria-labelledby="writing-library-heading"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Library
            </p>
            <h2
              id="writing-library-heading"
              className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Articles and Notes
            </h2>
            <p className="mt-3 text-base leading-7 text-slate-300">
              {selectedCategoryLabel} · {getEntryCountLabel(filteredArticles.length)}
            </p>
          </div>
        </div>

        <div className="mt-8">
          <WritingCategoryFilter
            categories={writingCategories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        <div className="mt-10">
          {!hasWritingContent ? (
            <WritingEmptyState
              title="No writing has been added yet."
              description="Technical notes and project reflections will appear here as they are prepared."
            />
          ) : hasGridArticles ? (
            <div className="grid gap-6 md:grid-cols-2">
              {visibleGridArticles.map((article) => (
                <WritingArticleCard
                  key={article.slug}
                  article={article}
                  category={resolveWritingCategory(article.category)}
                />
              ))}
            </div>
          ) : !hasFilteredArticles ? (
            <WritingEmptyState
              title="No articles are available in this category yet."
              description="Choose another category to continue browsing."
              onReset={() => setSelectedCategory("all")}
            />
          ) : null}
        </div>
      </section>
    </>
  );
}
