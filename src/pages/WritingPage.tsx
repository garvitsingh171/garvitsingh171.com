import { useState } from "react";
import {
  FeaturedWritingArticle,
  WritingArticleCard,
  WritingCategoryFilter,
  type WritingFilter,
} from "@/components/writing";
import {
  getWritingCategoryById,
  writingArticles,
  writingCategories,
} from "@/data/writing";
import type { WritingCategory, WritingCategoryId } from "@/types/writing";
import { AnimatedSection } from "@/components/animation";
import { SEO } from "@/components/seo";
import { EmptyState } from "@/components/ui";
import { staticRouteSeo } from "@/data/seo";

const fallbackCategory = (id: WritingCategoryId): WritingCategory => ({
  id,
  label: "Writing",
  description: "Writing entry",
});

const resolveWritingCategory = (id: WritingCategoryId) =>
  getWritingCategoryById(id) ?? fallbackCategory(id);

const getEntryCountLabel = (count: number) =>
  `${count} ${count === 1 ? "entry" : "entries"}`;

export default function Writing() {
  const [selectedCategory, setSelectedCategory] =
    useState<WritingFilter>("all");

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
      <SEO {...staticRouteSeo.writing} />
      <div className="space-y-12 sm:space-y-16">
      <AnimatedSection aria-labelledby="writing-page-heading">
        <header className="max-w-3xl">
          <p className="text-label text-accent">
            Writing
          </p>

          <h1
            id="writing-page-heading"
            className="mt-4 text-display-2 text-primary"
          >
            Notes from building, contributing, and learning.
          </h1>

          <p className="mt-5 text-body-lg text-secondary">
            Reflections on software projects, backend engineering, open-source
            collaboration, DSA, and the systems I use to improve as a developer.
          </p>
        </header>
      </AnimatedSection>

      {featuredArticle ? (
        <AnimatedSection
          className="section-divider"
          aria-labelledby="featured-writing-heading"
        >
          <div className="mb-6">
            <p className="text-label text-accent">
              Featured
            </p>
            <h2
              id="featured-writing-heading"
              className="mt-3 text-heading-2 text-primary"
            >
              Featured Writing
            </h2>
          </div>

          <FeaturedWritingArticle
            article={featuredArticle}
            category={resolveWritingCategory(featuredArticle.category)}
          />
        </AnimatedSection>
      ) : null}

      <AnimatedSection
        className="section-divider"
        aria-labelledby="writing-library-heading"
      >
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-label text-accent">
              Library
            </p>
            <h2
              id="writing-library-heading"
              className="mt-3 text-heading-2 text-primary"
            >
              Articles and Notes
            </h2>
            <p className="mt-3 text-base leading-7 text-secondary">
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
            <EmptyState
              title="No writing has been added yet"
              description="Technical notes and project reflections will appear here as they are prepared."
              headingLevel="h3"
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
            <EmptyState
              title="No articles are available in this category yet"
              description="Choose another category or return to the complete writing library."
              headingLevel="h3"
              announce
              primaryAction={{
                type: "button",
                label: "View all writing",
                onClick: () => setSelectedCategory("all"),
              }}
            />
          ) : null}
        </div>
      </AnimatedSection>
      </div>
    </>
  );
}
