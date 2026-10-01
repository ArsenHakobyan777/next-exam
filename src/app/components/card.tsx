import { Product } from "../api/products/route";
import Link from "next/link";
interface CardProps {
  product: Product;
}

function Card({ product }: CardProps) {
  return (
    <div className="flex flex-col max-w-xs rounded-2xl bg-white p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-64 overflow-hidden rounded-xl bg-gray-50 flex items-center justify-center p-2">
       <Link href={`/products/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="w-75 h-75  hover:scale-105 transition-transform duration-300"
          />
          </Link>
      </div>

      <div className="mt-4 flex flex-col gap-2 flex-grow justify-between">
        <h2 className="text-base font-semibold text-gray-800 line-clamp-2 min-h-[3rem]">
          {product.title}
        </h2>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100 mt-auto">
          <span className="text-xl font-bold text-blue-600">
            ${product.price}
          </span>

          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-xl transition-colors">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;