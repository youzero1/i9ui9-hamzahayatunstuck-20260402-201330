export default function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800 p-12 md:p-20 text-center">
          {/* Background decorations */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 opacity-10 rounded-full translate-x-1/3 translate-y-1/3" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
            <div className="w-full h-full opacity-5" style={{
              backgroundImage: 'radial-gradient(circle at 25% 25%, white 2px, transparent 2px), radial-gradient(circle at 75% 75%, white 2px, transparent 2px)',
              backgroundSize: '60px 60px'
            }} />
          </div>

          <div className="relative z-10">
            <span className="inline-block bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 border border-white/20">
              🚀 Start building today
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Ready to build your
              <br />
              <span className="text-primary-200">next big thing?</span>
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-primary-100 mb-10">
              Join over 10,000 developers and teams who are already building amazing products with Nexus.
              Start your free trial today — no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                className="w-full sm:w-auto bg-white text-primary-700 px-10 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-200"
              >
                Start Free Trial
              </a>
              <a
                href="#"
                className="w-full sm:w-auto border-2 border-white/40 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white transition-all duration-200"
              >
                Schedule a Demo
              </a>
            </div>
            <p className="mt-6 text-primary-200 text-sm">
              14-day free trial &bull; No credit card required &bull; Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
