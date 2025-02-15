import Link from 'next/link';
import Image from 'next/image';

/**
 * BlogCard component displays a preview of a blog post with an image, title, excerpt, and a link to the full post.
 *
 * @example
 * // Usage:
 * import { BlogCard } from 'components/blog-card';
 * const post = {
 *   title: "Blog Post Title",
 *   excerpt: "A short excerpt from the blog post...",
 *   image: "/images/blog1.jpg",
 *   slug: "blog-post-title"
 * };
 * <BlogCard post={post} />
 *
 * @param {Object} props - Component properties.
 * @param {Object} props.post - The blog post object.
 * @param {string} props.post.title - The title of the blog post.
 * @param {string} props.post.excerpt - A brief excerpt of the post.
 * @param {string} props.post.image - The image URL for the blog post.
 * @param {string} props.post.slug - The unique slug for the blog post.
 * @returns {JSX.Element} A rendered BlogCard component.
 */
export function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      {post.image && (
        <div className="relative h-48">
          <Image 
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-2xl font-heading font-bold mb-2">{post.title}</h3>
        <p className="text-lg mb-4">{post.excerpt}</p>
        <Link href={`/blog/${post.slug}`} className="font-bold text-primary no-underline hover:underline">
          Read More &rarr;
        </Link>
      </div>
    </div>
  );
}
