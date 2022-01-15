import '@styles/marquee.css'

export default function ProductSlider() {
  const sampleData = [
    {
      name: 'Beanie',
      source:
        'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F115%2F489%2FHat-front-black__72990.1603748583.png&w=2048&q=85',
    },
    {
      name: 'T-Shirt',
      source:
        'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F117%2F534%2FMen-TShirt-Black-Front__70046.1603748348.png&w=1920&q=85',
    },
    {
      name: 'Jacket',
      source:
        'https://demo.vercel.store/_next/image?url=https%3A%2F%2Fcdn11.bigcommerce.com%2Fs-qfzerv205w%2Fimages%2Fstencil%2Foriginal%2Fproducts%2F116%2F512%2FMen-Jacket-Front-Black__15466.1603283963.png&w=2048&q=85',
    },
  ]

  return (
    <div className="relative py-8 bg-black text-white">
      <div className="flex gap-32 items-center justify-center">
        {sampleData.map(item => (
          <React.Fragment>
            <img src={item.source} alt={item.name} className="w-48" />
            <h1 className="py-2 px-8 text-xl bg-white text-black font-bold whitespace-nowrap">
              {item.name}
            </h1>
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
