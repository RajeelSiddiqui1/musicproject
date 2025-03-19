import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-8">
        {/* About Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            Music School is a premier institution dedicated to teaching the art and science of music.
            We nurture talent from the ground up, fostering a vibrant community of musicians.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {['Home', 'About', 'Courses', 'Contact'].map((link, index) => (
              <li key={index}>
                <a
                  href={`#${link.toLowerCase()}`} // Replace with actual URLs or <Link> if using React Router
                  className="hover:text-white transition duration-300 block"
                  aria-label={`Navigate to ${link} page`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-6">
            <a href="https://facebook.com" className="hover:text-white transition duration-300" aria-label="Follow us on Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" className="hover:text-white transition duration-300" aria-label="Follow us on Twitter">
              <FaTwitter size={20} />
            </a>
            <a href="https://instagram.com" className="hover:text-white transition duration-300" aria-label="Follow us on Instagram">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">Karachi, Pakistan</p>
          <p className="text-sm">Pakistan 10001</p>
          <p className="text-sm">Email: <a href="mailto:info@musicschool.com" className="hover:text-white">info@musicschool.com</a></p>
          <p className="text-sm">Phone: <a href="tel:1234567890" className="hover:text-white">(123) 456-7890</a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-6">
        <p className="text-center text-sm">© {currentYear} Music School. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;