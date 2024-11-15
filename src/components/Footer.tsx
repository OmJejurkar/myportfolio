import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-2xl font-bold mb-4 md:mb-0">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="https://github.com/OmJejurkar" className="hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/om-jejurkar" className="hover:text-purple-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="work.jejurkarom@gmail.com" className="hover:text-purple-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}