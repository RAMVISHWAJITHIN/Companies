import React from "react";

const Footer = () => {
  return (
    <footer className=" text-blue-500 mt-12">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-2">MyCompany</h2>
          <p className="text-gray-600">
            A platform to showcase top companies, their products, and services.
            Connect, explore, and grow with us.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <a
                href="/"
                className="hover:underline hover:text-gray-300 transition"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/add-company"
                className="hover:underline hover:text-gray-300 transition"
              >
                Add Company
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:underline hover:text-gray-300 transition"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:underline hover:text-gray-300 transition"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-blue-500 mt-4 py-4 text-center text-gray-600 text-sm">
        &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
