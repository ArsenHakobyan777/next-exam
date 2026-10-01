import { NextResponse } from "next/server";

 export interface Product  {
 id: number,
 title:string,
 price:number,
 category:string,
 image:string
}

const products:Product[] = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 59.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 89.99,
    category: "Wearables",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30"
  },
  {
    id: 3,
    title: "Mechanical Keyboard",
    price: 74.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3"
  },
  {
    id: 4,
    title: "Wireless Mouse",
    price: 29.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db"
  },
  {
    id: 5,
    title: "Bluetooth Speaker",
    price: 45.99,
    category: "Audio",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1"
  },
  {
    id: 6,
    title: "Smartphone",
    price: 699.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
  },
  {
    id: 7,
    title: "Laptop",
    price: 999.99,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853"
  },
  {
    id: 8,
    title: "Gaming Headset",
    price: 79.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1599669454699-248893623440"
  },
  {
    id: 9,
    title: "Gaming Mouse",
    price: 49.99,
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1563297007-0686b7003af7"
  },
  {
    id: 10,
    title: "USB-C Charger",
    price: 24.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0"
  },
  {
    id: 11,
    title: "Power Bank",
    price: 34.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1609592424841-0a4b8e9b8f6e"
  },
  {
    id: 12,
    title: "Tablet",
    price: 349.99,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
  },
  {
    id: 13,
    title: "Digital Camera",
    price: 549.99,
    category: "Photography",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32"
  },
  {
    id: 14,
    title: "Webcam",
    price: 69.99,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1587826080692-f439cd0b70da"
  },
  {
    id: 15,
    title: "LED Desk Lamp",
    price: 39.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c"
  },
  {
    id: 16,
    title: "Laptop Stand",
    price: 44.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36"
  },
  {
    id: 17,
    title: "Portable SSD",
    price: 119.99,
    category: "Storage",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b"
  },
  {
    id: 18,
    title: "Monitor",
    price: 299.99,
    category: "Computers",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf"
  },
  {
    id: 19,
    title: "Smart LED Bulb",
    price: 19.99,
    category: "Home",
    image: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2"
  },
  {
    id: 20,
    title: "Phone Case",
    price: 14.99,
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1601593346740-925612772716"
  }
];
 
export async function GET (){
    return NextResponse.json(products)
}