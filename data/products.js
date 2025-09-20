export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) =>{
    if(product.id === productId){
      matchingProduct = product;
    }
  });
  return matchingProduct;
}
//data structure
//it structure or organizes the data
export const products = [
  
  {
    id: "d28e0d6c-53c1-4954-97d8-4ea419adf51b",
    image: "images/product_gallery/product-f-1/product-f-1.jpeg",
    name: "Solid Embroidered Pink Saree",
    company: "EthniCraft",
    description: "A beautifully crafted saree with intricate patterns, perfect for festive occasions.",
    product_gallery_img: [
      "images/product_gallery/product-f-1/product-f-1.jpeg",
      "images/product_gallery/product-f-1/2.jpeg",
      "images/product_gallery/product-f-1/3.jpeg",
      "images/product_gallery/product-f-1/4.jpeg"
    ],
    rating: { stars: 5.0, count: 312 },
    priceCents: 4990,
  },
  {
    id: "c44fbcc8-7681-4956-98e0-df7ac672a93d",
    image: "images/product_gallery/product-m-2/product-m-2.jpeg",
    name: "Beige Casual Shirt",
    company: "UrbanFit",
    description: "A versatile beige casual shirt that pairs well with jeans or trousers.",
    product_gallery_img: [
      "images/product_gallery/product-m-2/product-m-2.jpeg",
      "images/product_gallery/product-m-2/2.jpeg",
      "images/product_gallery/product-m-2/3.jpeg",
      "images/product_gallery/product-m-2/4.jpeg"
    ],
    rating: { stars: 4.0, count: 119 },
    priceCents: 2590,
  },
  {
    id: "b7e3a4f1-8417-49a6-8d55-428f69a7c7c1",
    image: "images/product_gallery/product-f-3/product-f-3.jpeg",
    name: "Floral Printed Empire Maxi Dress",
    company: "SpringBloom",
    description: "An elegant floral wrap dress with flowy sleeves for a breezy look.",
    product_gallery_img: [
      "images/product_gallery/product-f-3/product-f-3.jpeg",
      "images/product_gallery/product-f-3/3.jpeg",
      "images/product_gallery/product-f-3/4.jpeg",
      "images/product_gallery/product-f-3/5.jpeg"
    ],
    rating: { stars: 4.0, count: 214 },
    priceCents: 4290,
  },
  {
    id: "a12b9a53-29f3-4f9c-8213-d41f639f6f4c",
    image: "images/product_gallery/product-f-4/product-f-4.jpeg",
    name: "Women Puff and Flare Dress",
    company: "Belle Vogue",
    description: "A vibrant red flare dress with a chic design, perfect for parties.",
    product_gallery_img: [
      "images/product_gallery/product-f-4/product-f-4.jpeg",
      "images/product_gallery/product-f-4/2.jpeg",
      "images/product_gallery/product-f-4/3.jpeg",
      "images/product_gallery/product-f-4/4.jpeg"
    ],
    rating: { stars: 4.5, count: 167 },
    priceCents: 3790,
  },
  {
    id: "f3a6db65-72d8-4db0-836a-f6acfe43a1cf",
    image: "images/product_gallery/product-m-5/product-m-5.jpeg",
    name: "Tailored Fit Casual Blazer",
    company: "Elite Threads",
    description: "A tailored cream blazer that adds sophistication to any formal look.",
    product_gallery_img: [
      "images/product_gallery/product-m-5/product-m-5.jpeg",
      "images/product_gallery/product-m-5/2.jpeg",
      "images/product_gallery/product-m-5/3.jpeg",
      "images/product_gallery/product-m-5/4.jpeg"
    ],
    rating: { stars: 4.5, count: 134 },
    priceCents: 4590,
  },
  {
    id: "e56f7d91-2d3e-4bb5-bd65-82d3f4c928ff",
    image: "images/product_gallery/product-f-6/product-f-6.jpeg",
    name: "Denim High-Waist Shorts",
    company: "BlueWave",
    description: "Trendy high-waist denim shorts designed for casual outings and summer wear.",
    product_gallery_img: [
      "images/product_gallery/product-f-6/product-f-6.jpeg",
      "images/product_gallery/product-f-6/2.jpeg",
      "images/product_gallery/product-f-6/3.jpeg",
      "images/product_gallery/product-f-6/4.jpeg"
    ],
    rating: { stars: 3.5, count: 231 },
    priceCents: 2290,
  },
  {
    id: "d83f50af-9c34-46c5-bddf-4e52d322f2b8",
    image: "images/product_gallery/product-m-7/product-m-7.jpeg",
    name: "Mauve Casual T-shirt",
    company: "BasicWear",
    description: "A classic mauve T-shirt made from breathable cotton for everyday comfort.",
    product_gallery_img: [
      "images/product_gallery/product-m-7/product-m-7.jpeg",
      "images/product_gallery/product-m-7/2.jpeg",
      "images/product_gallery/product-m-7/3.jpeg",
      "images/product_gallery/product-m-7/4.jpeg"
    ],
    rating: { stars: 3.0, count: 92 },
    priceCents: 1590,
  },
  {
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image: "images/product_gallery/product-m-8/product-m-8.jpeg",
    name: "White Oversized Hoodie",
    company: "StreetStyle Co.",
    description: "A soft oversized white hoodie with a relaxed fit for daily wear.",
    product_gallery_img: [
      "images/product_gallery/product-m-8/product-m-8.jpeg",
      "images/product_gallery/product-m-8/3.jpeg",
      "images/product_gallery/product-m-8/4.jpeg",
      "images/product_gallery/product-m-8/5.jpeg"
    ],
    rating: { stars: 4.5, count: 178 },
    priceCents: 2990,
  },
  {
    id: "b72f9cd2-35c4-48ae-9bbf-5c14b927f8d1",
    image: "images/product_gallery/product-f-9/product-f-9.jpeg",
    name: "Navy GAP Hoodie",
    company: "GAP",
    description: "A cozy navy blue hoodie with GAP branding, ideal for casual comfort.",
    product_gallery_img: [
      "images/product_gallery/product-f-9/product-f-9.jpeg",
      "images/product_gallery/product-f-9/2.jpeg",
      "images/product_gallery/product-f-9/3.jpeg",
      "images/product_gallery/product-f-9/4.jpeg"
    ],
    rating: { stars: 4.5, count: 256 },
    priceCents: 3490,
  },
  {
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: "images/product_gallery/product-f-10/product-f-10.jpeg",
    name: "Polka Dot Sleeveless Top",
    company: "Urban Trendz",
    description: "A stylish sleeveless top with playful polka dots, perfect for summer outings.",
    product_gallery_img: [
      "images/product_gallery/product-f-10/product-f-10.jpeg",
      "images/product_gallery/product-f-10/2.jpeg",
      "images/product_gallery/product-f-10/3.jpeg",
      "images/product_gallery/product-f-10/4.jpeg"
    ],
    rating: { stars: 4.0, count: 143 },
    priceCents: 1890,
  },
  {
    id: "c83af9b7-f86f-4f60-9347-9c1c6734b217",
    image: "images/product_gallery/product-m-11/product-m-11.jpeg",
    name: "Pastel Purple Kurta",
    company: "ChillWear",
    description: "A relaxed-fit pastel purple T-shirt with a modern, minimalistic design.",
    product_gallery_img: [
      "images/product_gallery/product-m-11/product-m-11.jpeg",
      "images/product_gallery/product-m-11/2.jpeg",
      "images/product_gallery/product-m-11/4.jpeg"
    ],
    rating: { stars: 4.0, count: 144 },
    priceCents: 1790,
  },
  {
    id: "b09d95a2-6f02-45af-b1a7-8134ac0a1a65",
    image: "images/product_gallery/product-m-12/product-m-12.jpeg",
    name: "Black Athletic Shorts",
    company: "ActiveCore",
    description: "Breathable black athletic shorts designed for workouts and casual wear.",
    product_gallery_img: [
      "images/product_gallery/product-m-12/product-m-12.jpeg",
      "images/product_gallery/product-m-12/2.jpeg",
      "images/product_gallery/product-m-12/3.jpeg",
      "images/product_gallery/product-m-12/4.jpeg"
    ],
    rating: { stars: 2.5, count: 298 },
    priceCents: 1890,
  },
  {
    id: "a21c46e7-7b4a-4a8b-9b0c-6cbf297d48d7",
    image: "images/product_gallery/product-m-13/product-m-13.webp",
    name: "Wide-Leg Denim Jeans",
    company: "DenimWorks",
    description: "Comfortable wide-leg denim jeans with a trendy retro appeal.",
    product_gallery_img: [
      "images/product_gallery/product-m-13/product-m-13.webp",
      "images/product_gallery/product-m-13/2.jpeg",
      "images/product_gallery/product-m-13/3.jpeg"
    ],
    rating: { stars: 2.0, count: 165 },
    priceCents: 3090,
  },
  {
    id: "f62bcfd5-d8a0-43a6-82c2-229d9b36c492",
    image: "images/product_gallery/product-f-14/product-f-14.jpeg",
    name: "Beige Sleeveless Jumpsuit",
    company: "TrendFlair",
    description: "A chic sleeveless jumpsuit in beige with a belt for a modern edge.",
    product_gallery_img: [
      "images/product_gallery/product-f-14/product-f-14.jpeg",
      "images/product_gallery/product-f-14/2.jpeg",
      "images/product_gallery/product-f-14/3.jpeg",
      "images/product_gallery/product-f-14/4.jpeg"
    ],
    rating: { stars: 3.0, count: 87 },
    priceCents: 2690,
  },
  {
    id: "e9f36d41-1634-4a6b-8b8b-5c1b68af67e3",
    image: "images/product_gallery/product-f-15/product-f-15.jpeg",
    name: "Navy Blue Ethnic Motifs Kurti",
    company: "GlamWear",
    description: "A floor-length maxi dress with a bold navy design for evening occasions.",
    product_gallery_img: [
      "images/product_gallery/product-f-15/product-f-15.jpeg",
      "images/product_gallery/product-f-15/2.jpeg",
      "images/product_gallery/product-f-15/3.jpeg",
      "images/product_gallery/product-f-15/5.jpeg"
      
    ],
    rating: { stars: 3.5, count: 201 },
    priceCents: 3890,
  },
  {
    id: "f0d1c9e8-7a3f-4a59-9c8e-1b7d9a3b6e2c",
    image: "images/product_gallery/product-m-16/product-m-16.jpeg",
    name: "Blue Cotton Casual Shirt",
    company: "Eleni Trendz",
    description: "Turquoise blue vertical stripes striped opaque Casual shirt has a spread collarbutton placket 1 pocket long regular sleeves curved hem ",
    product_gallery_img: [
      "images/product_gallery/product-m-16/product-m-16.jpeg",
      "images/product_gallery/product-m-16/2.jpeg",
      "images/product_gallery/product-m-16/3.jpeg"
    ],
    rating: { stars: 3.0, count: 165 },
    priceCents: 3090,
  },
  {
    id: "7c4d92af-93d2-4b8e-8d2a-2f7b5b6fbe73",
    image: "images/product_gallery/product-m-17/product-m-17.jpeg",
    name: "Collar Acrylic Striped Sweatear",
    company: "Roadster",
    description: "Green and cream-coloured striped pullover, has a spread collar, long sleeves, ribbed hem",
    product_gallery_img: [
      "images/product_gallery/product-m-17/product-m-17.jpeg",
      "images/product_gallery/product-m-17/2.jpeg",
      "images/product_gallery/product-m-17/3.jpeg",
      "images/product_gallery/product-m-17/4.jpeg"
    ],
    rating: { stars: 4.5, count: 165 },
    priceCents: 3090,
  },
  {
    id: "1f3b9a64-4d28-4e6c-8a1d-5f44d7e18c6f",
    image: "images/product_gallery/product-f-18/product-f-18.jpeg",
    name: "Abstract Printed Tasselled Shrug",
    company: "PURYS",
    description: "White and black abstract printed open front shrug, has three-quarter sleeves, tasselled detail, straight hem",
    product_gallery_img: [
      "images/product_gallery/product-f-18/product-f-18.jpeg",
      "images/product_gallery/product-f-18/2.jpeg",
      "images/product_gallery/product-f-18/3.jpeg",
      "images/product_gallery/product-f-18/4.jpeg"
    ],
    rating: { stars: 3.5, count: 201 },
    priceCents: 3890,
  }
  
  
];