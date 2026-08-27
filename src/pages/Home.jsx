import React from 'react';
import { ArrowRight, Sparkles, Target, Compass } from 'lucide-react';
import FeatureCard from '../components/FeatureCard';
import Disclaimer from '../components/Disclaimer';

const Home = ({ onStart }) => {
  return (
    <div className="min-h-screen gradient-subtle">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gradient">MindBridge AI</span>
          </div>
          <a href="#" className="text-sm font-medium text-gray-600 hover:text-primary-600 transition-colors">
            How It Works
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Understand Your <span className="text-gradient">Thinking</span>.
              <br />
              Understand <span className="text-gradient">Yourself</span>.
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              MindBridge AI helps you reflect on your thinking patterns, cognitive load, and personal strengths through a short, structured self-awareness assessment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onStart}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-smooth button-glow"
              >
                <span>Start Assessment</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-smooth">
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="hidden lg:flex justify-center animate-fade-in">
            <div className="relative w-96 h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl opacity-20"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-32 h-32 text-primary-600 opacity-40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What You'll Discover</h2>
          <p className="text-lg text-gray-600">A personalized self-awareness journey in just 10 minutes.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={Target}
            title="Reflect"
            description="Understand patterns in how you think and respond to challenges."
          />
          <FeatureCard
            icon={Compass}
            title="Discover"
            description="Identify personal strengths and areas that may deserve attention."
          />
          <FeatureCard
            icon={Sparkles}
            title="Grow"
            description="Explore practical strategies and resources based on your responses."
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick & Thoughtful</h3>
              <p className="text-gray-600 leading-relaxed">
                The complete assessment takes less than 10 minutes. One question at a time, at your own pace. There are no right or wrong answers—just your genuine experience.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Personalized Insights</h3>
              <p className="text-gray-600 leading-relaxed">
                Your responses generate a personalized report with practical reflection prompts and resources tailored to your unique patterns and strengths.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="bg-gradient-subtle py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Disclaimer />
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Ready to Begin?</h2>
          <p className="text-lg text-gray-600 mb-8">Start your self-awareness journey today.</p>
          <button
            onClick={onStart}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 gradient-primary text-white font-semibold rounded-lg hover:shadow-lg transition-smooth button-glow"
          >
            <span>Start Assessment</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-primary-200">
            © 2024 MindBridge AI. A non-clinical mental wellness tool.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
