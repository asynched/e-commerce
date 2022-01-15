import React from 'react'

export default function RelatedProducts() {
  const products = [
    {
      name: 'Beanie',
      images: [
        'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F115%2F489%2FHat-front-black__72990.1603748583.png&w=1920&q=85',
      ],
    },
    {
      name: 'Jacket',
      images: [
        'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F116%2F512%2FMen-Jacket-Front-Black__15466.1603283963.png&w=1920&q=85',
      ],
    },
    {
      name: 'T-Shirt',
      images: [
        'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F117%2F534%2FMen-TShirt-Black-Front__70046.1603748348.png&w=1920&q=85',
      ],
    },
    {
      name: 'Mask',
      images: [
        'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F118%2F508%2FSurgical-Mask-Black__89554.1603756821.png&w=1920&q=85',
      ],
    },
  ]

  return (
    <div className="flex gap-16">
      {products.slice(0, 4).map(product => (
        <div className="border p-8">
          <img
            className="transition ease-in-out duration-300 hover:scale-110"
            src={product.images[0]}
            alt={product.name}
          />
        </div>
      ))}
    </div>
  )
}
