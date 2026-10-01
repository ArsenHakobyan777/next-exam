import Link from 'next/link'

export default function ServicesPage() {
  const services = [
    {
      icon: "🚚",
      title: "Fast & Free Delivery",
      description: "Nationwide shipping available. Free delivery on all orders over $100."
    },
    {
      icon: "🔄",
      title: "Easy Returns & Exchanges",
      description: "Not satisfied with your purchase? Return or exchange any item within 14 days."
    },
    {
      icon: "🛡️",
      title: "Secure Payments",
      description: "Your transactions are encrypted and 100% protected with modern security standards."
    },
    {
      icon: "🛠️",
      title: "Warranty & Support",
      description: "Official manufacturer warranty and dedicated after-sales support on all products."
    },
    {
      icon: "💬",
      title: "24/7 Customer Service",
      description: "Our support team is available around the clock to assist with any questions."
    },
    {
      icon: "🎁",
      title: "Gift Packaging",
      description: "Complementary premium packaging available upon request for special occasions."
    }
  ]

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800">Our Services</h1>
          <p className="text-gray-500 text-lg mt-2 max-w-2xl mx-auto">
            We deliver top-tier customer experience to ensure your shopping is smooth, safe, and enjoyable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 flex flex-col items-start"
            >
              <div className="text-5xl mb-4 bg-blue-50 p-4 rounded-2xl">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 text-white rounded-3xl p-10 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-3">Have Any Questions?</h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            Get in touch with our support team and we will be happy to assist you.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
          >
            Contact Us 📞
          </Link>
        </div>
      </div>
    </main>
  )
}