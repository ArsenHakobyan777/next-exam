import Link from "next/link";
export default function Home() {
  return (
  <main className="min-h-screen bg-gray-50 pb-16">
      <section className="bg-blue-600 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto flex flex-col items-center gap-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Welcome To MOTS Shop
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-xl">
            Discover a wide selection of high-quality products at the best prices.          </p>
          <Link
            href="/products"
            className="mt-4 px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-gray-100 transition-colors"
          >
            Go to catalog 🛍️
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="text-4xl mb-3">🚚</div>
          <h3 className="font-bold text-gray-800 text-lg">Fast Delivery</h3>
          <p className="text-sm text-gray-500 mt-1">Nationwide delivery</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="text-4xl mb-3">🛡️</div>
          <h3 className="font-bold text-gray-800 text-lg">Quality assurance</h3>
          <p className="text-sm text-gray-500 mt-1">Only authentic products</p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
          <div className="text-4xl mb-3">🎧</div>
          <h3 className="font-bold text-gray-800 text-lg">Support 24/7</h3>
          <p className="text-sm text-gray-500 mt-1">Ready to help at any time.</p>
        </div>
      </section>
    </main>
  );
}
