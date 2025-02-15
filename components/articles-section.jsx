import { ArticleCard } from './article-card';

/**
 * ArticlesSection component renders a section of article cards in a responsive grid.
 *
 * @example
 * // Usage:
 * import { ArticlesSection } from 'components/articles-section';
 * const articles = [
 *   { title: "Article 1", excerpt: "Excerpt for article 1", image: "/images/article1.jpg", link: "/blog/article-1" },
 *   // More articles...
 * ];
 * <ArticlesSection articles={articles} />
 *
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.articles - Array of article objects.
 * @returns {JSX.Element} A rendered articles section.
 */
export function ArticlesSection({ articles }) {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-heading font-bold text-center mb-12">
        Latest Articles
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
