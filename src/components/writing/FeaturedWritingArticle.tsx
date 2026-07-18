import type { WritingArticle, WritingCategory } from "../../types/writing";
import { Button, Card } from "../ui";
import { WritingArticleStatusBadge } from "./WritingArticleStatusBadge";

export type FeaturedWritingArticleProps = {
  article: WritingArticle;
  category: WritingCategory;
  articleHref?: string;
};

export function FeaturedWritingArticle({
  article,
  category,
  articleHref,
}: FeaturedWritingArticleProps) {
  return (
    <Card className="min-w-0 p-6 sm:p-8">
      <div className="flex min-w-0 flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="min-w-0 max-w-3xl">
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-sm font-semibold leading-6 text-blue-200">
              {category.label}
            </p>
            <WritingArticleStatusBadge status={article.status} />
          </div>

          <h3 className="mt-4 break-words text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {article.title}
          </h3>

          <p className="mt-4 text-base leading-7 text-slate-300">
            {article.summary}
          </p>

          {article.tags.length > 0 ? (
            <ul
              aria-label={`${article.title} tags`}
              className="mt-5 flex flex-wrap gap-2"
            >
              {article.tags.map((tag) => (
                <li
                  key={tag}
                  className="min-w-0 max-w-full rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-xs font-medium text-slate-300 break-words"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {articleHref ? (
          <Button
            as="link"
            to={articleHref}
            variant="outline"
            className="w-full shrink-0 sm:w-auto"
            aria-label={`Read ${article.title}`}
          >
            Read Article
          </Button>
        ) : null}
      </div>
    </Card>
  );
}
