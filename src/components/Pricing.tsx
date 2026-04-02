'use client'

import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: 'Perfect for individuals and small projects.',
    features: [
      '3 Projects',
      '10GB Storage',
      'Basic Analytics',
      'Community Support',
      'API Access',
    ],
    notIncluded: ['Team Collaboration', 'Advanced Security', 'Priority Support'],
    cta: 'Get Started Free',
    popular: false,
    gradient: 'from-gray-100 to-gray-50',
    buttonStyle: 'bg-gray-900 text-white hover:bg-gray-700',
  },
  {
    name: 'Pro',
    monthlyPrice: 29,
    yearlyPrice: 23,
    description: 'For growing teams that need more power.',
    features: [
      'Unlimited Projects',
      '100GB Storage',
      'Advanced Analytics',
      'Priority Support',
      'API Access',
      'Team Collaboration',
      'Advanced Security',
    ],
    notIncluded: [],
    cta: 'Start Pro Trial',
    popular: true,
    gradient: 'from-primary-600 to-purple-700',
    buttonStyle: 'bg-white text-primary-600 hover:bg-gray-100',
  },
  {
    name: 'Enterprise',
    monthlyPrice: 99,
    yearlyPrice: 79,
    description: 'For large organizations with custom needs.',
    features: [
      'Unlimited Everything',
      '1TB Storage',
      'Custom Analytics',
      'Dedicated Support',
      'Full API Access',
      'SSO & SAML',
      'Custom Integrations',
      'SLA Guarantee',
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    popular: false,
    gradient: 'from-gray-100 to-gray-50',
    buttonStyle: 'bg-gray-900 text-white hover:bg-gray-700',
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-white text-primary-600 text-sm font-semibold px-4 py-2 rounded-full mb-4 shadow-sm">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Simple,
            <span className="gradient-text"> transparent pricing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-500 mb-8">
            No hidden fees. No surprises. Choose the plan that works best for you.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-sm border border-gray-200">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                !isYearly ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isYearly ? 'bg-gray-900 text-white shadow' : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Yearly
              <span className="ml-2 bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-semibold">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl overflow-hidden ${
                plan.popular ? 'shadow-2xl scale-105' : 'shadow-md'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 text-center py-2 bg-gradient-to-r from-primary-500 to-purple-600">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">Most Popular</span>
                </div>
              )}

              <div
                className={`h-full p-8 bg-gradient-to-br ${plan.gradient} ${
                  plan.popular ? 'pt-12 text-white' : ''
                }`}
              >
                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${plan.popular ? 'text-primary-100' : 'text-gray-500'}`}>
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className={`text-5xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className={`text-sm ml-1 ${plan.popular ? 'text-primary-100' : 'text-gray-500'}`}>
                    /month
                  </span>
                  {isYearly && plan.monthlyPrice > 0 && (
                    <p className={`text-xs mt-1 ${plan.popular ? 'text-primary-200' : 'text-gray-400'}`}>
                      Billed annually
                    </p>
                  )}
                </div>

                <a
                  href="#"
                  className={`block w-full text-center py-3 px-6 rounded-full font-semibold transition-all duration-200 hover:shadow-lg hover:scale-105 mb-8 ${plan.buttonStyle}`}
                >
                  {plan.cta}
                </a>

                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <svg
                        className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-green-300' : 'text-green-500'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={`text-sm ${plan.popular ? 'text-primary-50' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 opacity-40">
                      <svg
                        className="w-5 h-5 flex-shrink-0 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-sm text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Note */}
        <p className="text-center text-gray-500 mt-10">
          All plans include a 14-day free trial. No credit card required.{' '}
          <a href="#" className="text-primary-600 font-medium hover:underline">
            View full comparison →
          </a>
        </p>
      </div>
    </section>
  )
}
