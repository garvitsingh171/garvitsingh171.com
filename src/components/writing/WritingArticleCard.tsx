import type { WritingArticle, WritingCategory } from "../../types/writing";
import { Button, Card } from "../ui";
import { WritingArticleStatusBadge } from "./WritingArticleStatusBadge";

export type WritingArticleCardProps = {
  article: WritingArticle;
  category: WritingCategory;
  articleHref?: string;
};

const formatPublishedDate = (publishedAt?: string) => {
  if (!publishedAt) {
    return undefined;
  }

  const publishedDate = new Date(publishedAt);

  if (Number.isNaN(publishedDate.getTime())) {
    return undefined;
  }

  return new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(publishedDate);
};

function getArticleNote(article: WritingArticle, articleHref?: string) {
  if (article.status === "published" && articleHref) {
    return null;
  }

  if (article.status === "draft") {
    return "Draft in review";
  }

  if (article.status === "coming-soon") {
    return "Article planned";
  }

  return null;
}

export function WritingArticleCard({
  article,
  category,
  articleHref,
}: WritingArticleCardProps) {
  const publishedDate = formatPublishedDate(article.publishedAt);
  const metadata = [publishedDate, article.readingTime].filter(Boolean);
  const articleNote = getArticleNote(article, articleHref);

  return (
    <Card className="h-full min-w-0 shadow-sm">
      <div className="flex h-full min-w-0 flex-col">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <p className="min-w-0 text-sm font-semibold leading-6 text-blue-200">
            {category.label}
          </p>
          <WritingArticleStatusBadge status={article.status} />
        </div>

        <h3 className="mt-4 min-w-0 break-words text-xl font-semibold text-white">
          {article.title}
        </h3>

        <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
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

        {metadata.length > 0 ? (
          <p className="mt-5 text-sm leading-6 text-slate-400">
            {metadata.join(" · ")}
          </p>
        ) : null}

        <div className="mt-auto pt-6">
          {article.status === "published" && articleHref ? (
            <Button
              as="link"
              to={articleHref}
              variant="outline"
              className="w-full sm:w-auto"
              aria-label={`Read ${article.title}`}
            >
              Read Article
            </Button>
          ) : articleNote ? (
            <p className="text-sm font-semibold leading-6 text-slate-400">
              {articleNote}
            </p>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
