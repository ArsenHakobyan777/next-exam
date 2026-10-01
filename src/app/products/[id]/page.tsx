'use client'

import { Product } from "@/app/api/products/route"
import TruckLoader from "@/app/components/truckLoader"
import { use, useEffect, useState } from "react"
import Link from "next/link"
function Single ({params}:{params: Promise<{id: string}>}) {
    const baseUrl = 'http://localhost:3000/api/products'
    const resolvedParams = use(params)
    const id = resolvedParams.id
    const [product,setProduct] = useState <Product | null> (null)
    const [loading,setLoading] = useState<boolean>(true)
    useEffect(()=>{
        const timer = setTimeout(()=>{

            fetch(baseUrl)
            .then((res)=> res.json())
            .then((data : Product[])=>{
                const found = data.find((item) => String(item.id) === String(id))
                setProduct(found || null)
                setLoading(false)
            })
            .catch((err)=>{
                console.error("Eroro feching product",err)
                setLoading(false)
            })
        },1000)
    },[id])
    if(loading){
       return <TruckLoader/>
    }
    if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-4">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/" className="px-4 py-2 bg-blue-600 text-white rounded-xl">
          Back
        </Link>
      </div>
    )
  }
    return(
       <div className="max-w-4xl mx-auto px-6 py-10">
      <Link href="/products" className="inline-block mb-6 text-blue-600 hover:underline">
        ← Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-2xl shadow-sm border">
        <div className="w-full h-80 flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="max-h-full object-contain rounded-xl"
          />
        </div>

        <div className="flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-100 px-3 py-1 rounded-full w-fit">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <p className="text-2xl font-bold text-blue-600">${product.price}</p>
          
          <button className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-colors w-full cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    )
}

export default Single