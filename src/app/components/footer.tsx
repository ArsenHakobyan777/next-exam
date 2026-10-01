import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 pt-12 pb-8 border-t border-gray-800 mt-auto relative z-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold text-white tracking-wide">MOTS</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your one-stop destination for high-quality products at the best prices. Discover top tech, fashion, and everyday essentials.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-blue-400 transition-colors">Products</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-white">Customer Care</h3>
          <ul className="flex flex-col gap-2 text-sm text-gray-400">
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Shipping Policy</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Returns & Refunds</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Terms of Service</li>
            <li className="hover:text-blue-400 cursor-pointer transition-colors">Privacy Policy</li>
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-white">Get in Touch</h3>
          <p className="text-sm text-gray-400">📍 123 Commerce St, Yerevan, Armenia</p>
          <p className="text-sm text-gray-400">📞 +374 (33) 00-00-00</p>
          <p className="text-sm text-gray-400">✉️ support@motsshop.com</p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} MOTS Shop. All rights reserved.
      </div>
    </footer>
  )
}