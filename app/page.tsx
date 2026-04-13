export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
            allxgen
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#why" className="text-slate-300 hover:text-white transition-colors">
              Why allxgen
            </a>
            <a href="#contact" className="text-slate-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen pt-20 px-6 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated gradient text */}
          <div className="mb-8 inline-block">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 text-cyan-300 text-sm font-medium">
              ✨ The Future of AI Generation
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Unlimited Creative
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Possibilities
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the power of next-generation AI. Generate content, create designs, and transform your ideas into reality with allxgen.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg">
              Get Started Free
            </button>
            <button className="px-8 py-4 rounded-lg border border-slate-600 text-white font-semibold hover:border-slate-500 hover:bg-slate-800/50 transition-all">
              Watch Demo
            </button>
          </div>

          {/* Floating cards effect */}
          <div className="grid md:grid-cols-3 gap-4 mt-20">
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-colors">
              <div className="text-3xl mb-2">🚀</div>
              <p className="text-slate-300">Lightning Fast</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-colors">
              <div className="text-3xl mb-2">🎨</div>
              <p className="text-slate-300">Highly Creative</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:border-cyan-500/50 transition-colors">
              <div className="text-3xl mb-2">🔐</div>
              <p className="text-slate-300">Always Secure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-center">
            Powerful Features
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "AI-Powered Generation",
                desc: "Advanced algorithms that understand context and create relevant content",
              },
              {
                title: "Multi-Format Support",
                desc: "Generate text, images, code, and more in one unified platform",
              },
              {
                title: "Real-Time Collaboration",
                desc: "Work together seamlessly with your team in real-time",
              },
              {
                title: "Customizable Templates",
                desc: "Choose from hundreds of templates or create your own",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800/80"
              >
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">allxgen</span>?
          </h2>

          <div className="space-y-6">
            {[
              "Industry-leading accuracy and performance",
              "Affordable pricing with flexible plans",
              "24/7 dedicated customer support",
              "Always up-to-date with latest AI models",
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 flex items-center justify-center">
                  <span className="text-white text-sm">✓</span>
                </div>
                <p className="text-lg text-slate-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-500/30 rounded-2xl p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Join thousands of users already creating amazing content with allxgen
          </p>
          <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 shadow-lg">
            Start Free Trial
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 py-8 px-6 bg-slate-900/50">
        <div className="max-w-6xl mx-auto text-center text-slate-400">
          <p>&copy; 2026 allxgen. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
