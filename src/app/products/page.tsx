'use client'

import { useEffect, useState } from "react"
import Card from "../components/card"
import { Product } from "../api/products/route";
import TruckLoader from "../components/truckLoader";

const BaseUrl = '/api/products'; 

function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectCategory, setSelectCategory] = useState<string>("All");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetch(BaseUrl)
        .then(res => res.json())
        .then((data) => {
          setProducts(data);
          setLoading(false);
        });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <TruckLoader />;
  }

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectCategory === "All" || p.category === selectCategory;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-6 overflow-x-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 mb-6">
        <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
          {categories.map((p) => (
            <button
              key={p}
              onClick={() => setSelectCategory(p)}
              className={`px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-colors shrink-0 ${
                selectCategory === p
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        <div className="w-full md:w-72">
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Product..."
            className="w-full px-4 py-2 rounded-2xl border border-gray-300 outline-none focus:border-blue-500 text-[15px] bg-white shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {filteredProducts.map((e, i) => (
          <Card
            key={e.id || i}
            product={e}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;