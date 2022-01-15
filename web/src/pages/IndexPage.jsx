import React from 'react'

import Header from '@components/ui/Header'
import ProductGrid from '@components/product/ProductGrid'
import ProductSlider from '@components/product/ProductSlider'
import Hero from '@components/ui/Hero'

export default function IndexPage() {
  return (
    <main>
      <Header />
      <ProductGrid />
      <ProductSlider />
      <Hero
        title="Lorem ipsum dolor"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat rem esse laboriosam voluptates aut eum totam molestias perferendis odit delectus?"
      />
      <ProductGrid />
    </main>
  )
}
