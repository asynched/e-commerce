import Header from '@components/ui/Header'
import ProductGrid from '@components/product/ProductGrid'
import ProductSlider from '@components/product/ProductSlider'
import Hero from '@components/ui/Hero'
import Cart from '@components/cart/Cart'

export default function IndexPage() {
  return (
    <main>
      <Cart />
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
