'use client'

import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = heroRef.current?.querySelectorAll('.animate-on-scroll')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-purple-50" />

      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-on-scroll inline-flex items-center bg-white border border-primary-100 rounded-full px-4 py-2 mb-8 shadow-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
          <span className="text-sm font-medium text-gray-600">Now in public beta &mdash; Try it free</span>
        </div>

        {/* Headline */}
        <h1 className="animate-on-scroll text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
          Build something
          <span className="block gradient-text">truly amazing</span>
        </h1>

        {/* Subheadline */}
        <p className="animate-on-scroll max-w-2xl mx-auto text-xl text-gray-500 mb-10 leading-relaxed">
          Nexus gives your team the tools to design, build, and ship products faster than ever before.
          Trusted by 10,000+ developers worldwide.
        </p>

        {/* CTA Buttons */}
        <div className="animate-on-scroll flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href="#"
            className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-200"
          >
            Start for Free
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-md hover:border-gray-300 transition-all duration-200"
          >
            <svg className="w-5 h-5 text-primary-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Watch Demo
          </a>
        </div>

        {/* Hero Image / Dashboard Preview */}
        <div className="animate-on-scroll relative max-w-5xl mx-auto">
          <div className="glass-card rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Fake Browser Bar */}
            <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 ml-4 bg-white rounded-md px-3 py-1 text-xs text-gray-400 border border-gray-200">
                app.nexus.io/dashboard
              </div>
            </div>
            {/* Dashboard Content */}
            <div className="bg-white p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: 'Total Users', value: '24,521', change: '+12%', color: 'blue' },
                  { label: 'Revenue', value: '$84,200', change: '+8%', color: 'purple' },
                  { label: 'Active Projects', value: '142', change: '+5%', color: 'green' },
                ].map((stat) => (
                  <div key={stat.label} className="bg-gray-50 rounded-xl p-4">
                    <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <span className="text-xs text-green-500 font-medium">{stat.change} this month</span>
                  </div>
                ))}
              </div>
              <div className="bg-gray-50 rounded-xl p-4 h-32 flex items-end gap-2">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-gradient-to-t from-primary-500 to-purple-400 rounded-t-sm opacity-80"
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
          {/* Shadow */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gray-900 opacity-10 blur-xl rounded-full" />
        </div>

        {/* Social Proof */}
        <div className="animate-on-scroll mt-16 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-yellow-400'].map((color, i) => (
                <div key={i} className={`w-8 h-8 rounded-full ${color} border-2 border-white flex items-center justify-center text-white text-xs font-bold`}>
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span>10,000+ developers</span>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1">4.9/5 rating</span>
          </div>
          <span className="hidden sm:block text-gray-300">|</span>
          <span>No credit card required</span>
        </div>
      </div>
    </section>
  )
}
