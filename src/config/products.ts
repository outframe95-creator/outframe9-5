export interface Product {
  id: string
  titleKey: string
  descKey: string
  price: string
  image: string
  link: string
}

export const products: Product[] = [
  {
    id: "product-1",
    titleKey: "products.items.0.title",
    descKey: "products.items.0.desc",
    price: "$49",
    image: "/images/product-1.jpg",
    link: "https://gumroad.com"
  },
  {
    id: "product-2",
    titleKey: "products.items.1.title",
    descKey: "products.items.1.desc",
    price: "$79",
    image: "/images/product-2.jpg",
    link: "https://gumroad.com"
  },
  {
    id: "product-3",
    titleKey: "products.items.2.title",
    descKey: "products.items.2.desc",
    price: "$99",
    image: "/images/product-3.jpg",
    link: "https://gumroad.com"
  },
]
