import Image from 'next/image';
import Link from 'next/link';
import mythicLogo from 'public/mythic-logo-stacked-alabaster.svg';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'About', href: '/image-cdn' },
    { linkText: 'Portfolio', href: '/edge' }
];

// const navItems = [
//     { linkText: 'Home', href: '/' },
//     { linkText: 'Revalidation', href: '/revalidation' },
//     { linkText: 'Image CDN', href: '/image-cdn' },
//     { linkText: 'Edge Function', href: '/edge' },
//     { linkText: 'Blobs', href: '/blobs' },
//     { linkText: 'Classics', href: '/classics' }
// ];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-5 sm:pt-12 md:pb-5">
            <Link href="/">
                <Image
                    src={mythicLogo}
                    alt="Mythic Technology logo"
                    width={100}
                    height={50}
                />
            </Link>
            {navItems?.length > 0 && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block no-underline px-4 py-2 border border-primary rounded-full text-primary-content transition duration-200 hover:bg-primary hover:border-secondary-content hover:text-secondary-content uppercase"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            <div className="flex-grow justify-end hidden lg:flex lg:mr-1">
                <Link
                    href="https://github.com/netlify-templates/next-platform-starter"
                    className="inline-block no-underline px-4 py-2 border border-primary rounded-full text-primary-content transition duration-200 hover:bg-primary hover:border-secondary-content hover:text-secondary-content uppercase"
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}