import Link from 'next/link';
import Image from 'next/image';

/**
 * ArticleCard component displays a preview of a blog article.
 *
 * @example
 * // Usage:
 * import { ArticleCard } from 'components/article-card';
 * const article = {
 *   title: "Article Title",
 *   excerpt: "A short excerpt from the article.",
 *   image: "/images/article1.jpg",
 *   link: "/blog/article-title"
 * };
 * <ArticleCard article={article} />
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.article - The article data.
 * @param {string} props.article.title - The title of the article.
 * @param {string} props.article.excerpt - A short excerpt of the article.
 * @param {string} props.article.image - The URL for the article image.
 * @param {string} props.article.link - The URL for the full article.
 * @returns {JSX.Element} A rendered article card.
 */
export function ArticleCard({ article }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      {article.image && (
        <div className="relative h-48">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-heading font-bold mb-2">{article.title}</h3>
        <p className="text-lg mb-4">{article.excerpt}</p>
        <Link href={article.link} className="font-bold text-primary no-underline hover:underline">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}
