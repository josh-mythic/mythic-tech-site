import { BlogCard } from './blog-card';

/**
 * BlogList component renders a grid of BlogCard components.
 *
 * @example
 * // Usage:
 * import { BlogList } from 'components/blog-list';
 * const posts = [
 *   { title: "Post 1", excerpt: "Excerpt for post 1", image: "/images/blog1.jpg", slug: "post-1" },
 *   // More posts...
 * ];
 * <BlogList posts={posts} />
 *
 * @param {Object} props - Component properties.
 * @param {Array<Object>} props.posts - Array of blog post objects.
 * @returns {JSX.Element} A rendered BlogList component.
 */
export function BlogList({ posts }) {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-heading font-bold text-center mb-12">
        Latest Blog Posts
      </h2>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </div>
    </section>
  );
}
