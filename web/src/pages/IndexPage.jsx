import Header from '@components/common/Header'
import ProductCard from '@components/product/ProductCard'
import ProductGrid from '@components/product/ProductGrid'
import ProductSlider from '@components/product/ProductSlider'

export default function IndexPage() {
  return (
    <main>
      <Header />
      <ProductGrid />
      <ProductSlider />
    </main>
  )
}
