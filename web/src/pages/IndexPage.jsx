import BaseLayout from '@layouts/BaseLayout'

import ProductGrid from '@components/product/ProductGrid'
import ProductSlider from '@components/product/ProductSlider'
import Hero from '@components/ui/Hero'
import RelatedProducts from '@components/product/RelatedProducts'

export default function IndexPage() {
  return (
    <BaseLayout>
      <ProductGrid />
      <ProductSlider />
      <Hero
        title="Lorem ipsum dolor"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem esse laboriosam voluptates aut eum totam molestias perferendis odit delectus?"
      />
      <ProductGrid />
      <div className="my-8 mx-8">
        <h1 className="text-3xl mb-4 font-bold tracking-tighter">
          Recommended for you
        </h1>
        <RelatedProducts />
      </div>
    </BaseLayout>
  )
}
