import ProductCard from './ProductCard'

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2">
      <ProductCard
        image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F115%2F489%2FHat-front-black__72990.1603748583.png&w=2048&q=85"
        background="bg-purple-600"
        price="10.20"
        title="Beanie"
      />
      <div className="grid grid-rows-2">
        <ProductCard
          image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F116%2F512%2FMen-Jacket-Front-Black__15466.1603283963.png&w=2048&q=85"
          background="bg-pink-600"
          price="10.20"
          title="Jacket"
        />
        <ProductCard
          image="https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F117%2F534%2FMen-TShirt-Black-Front__70046.1603748348.png&w=1920&q=85"
          background="bg-black"
          price="10.20"
          title="T-Shirt"
        />
      </div>
    </div>
  )
}
