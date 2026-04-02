'use client'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO at TechFlow',
    avatar: 'SC',
    avatarColor: 'from-blue-400 to-primary-500',
    content:
      'Nexus completely transformed how our team ships products. We went from 2-week release cycles to deploying multiple times a day. The performance improvements alone justified the switch.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Lead Developer at Startup Hub',
    avatar: 'MJ',
    avatarColor: 'from-purple-400 to-pink-500',
    content:
      "The integrations are seamless and the analytics dashboard gives us insights we never had before. Our team's productivity has increased by 40% since we started using Nexus.",
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Product Manager at Scale Inc',
    avatar: 'PP',
    avatarColor: 'from-green-400 to-teal-500',
    content:
      "I've tried dozens of platforms, and Nexus stands out for its simplicity and power. The onboarding was smooth and we were up and running in under an hour. Highly recommended!",
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'Founder at BuildFast',
    avatar: 'DK',
    avatarColor: 'from-orange-400 to-red-500',
    content:
      'As a solo founder, Nexus gives me the capabilities of an entire engineering team. The automation features save me hours every week, letting me focus on what matters most.',
    rating: 5,
  },
  {
    name: 'Emma Wilson',
    role: 'Engineering Manager at DataSync',
    avatar: 'EW',
    avatarColor: 'from-yellow-400 to-orange-500',
    content:
      'Security was our biggest concern when evaluating platforms. Nexus exceeded our expectations with enterprise-grade security features that kept our compliance team happy.',
    rating: 5,
  },
  {
    name: 'Alex Rivera',
    role: 'Full Stack Developer',
    avatar: 'AR',
    avatarColor: 'from-cyan-400 to-blue-500',
    content:
      'The developer experience is outstanding. The documentation is clear, the APIs are intuitive, and the support team responds within minutes. This is how developer tools should work.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-primary-50 text-primary-600 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Loved by
            <span className="gradient-text"> developers</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            Don&apos;t just take our word for it. Here&apos;s what our community has to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 leading-relaxed mb-6">&ldquo;{testimonial.content}&rdquo;</p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonial.avatarColor} flex items-center justify-center text-white text-sm font-bold`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-b border-gray-100">
          {[
            { value: '10K+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '200+', label: 'Integrations' },
            { value: '4.9/5', label: 'Average Rating' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold gradient-text mb-1">{stat.value}</p>
              <p className="text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
