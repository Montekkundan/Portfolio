import { useRouter } from 'next/router';
import Link from 'next/link';
import navLinks from '../utils/navlinks';

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-0 w-full z-50">
      <div className="max-w-screen-lg mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="shadow-md rounded-md bg-white">
          <nav className="flex items-center justify-around">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={`px-4 py-2 rounded-md text-gray-700 ${
                  router.pathname === link.href
                    ? 'bg-gray-200'
                    : 'hover:bg-gray-100'
                } transition duration-150 ease-in-out`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
