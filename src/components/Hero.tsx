import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">John Doe</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
            I create beautiful, functional, and user-friendly digital experiences
            that help businesses grow and succeed in the modern world.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-purple-600" />
        </div>
      </div>
    </section>
  );
}