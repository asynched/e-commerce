import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Loader from '@components/common/Loader'

const IndexPage = React.lazy(() => import('@pages/IndexPage'))
const ContextPage = React.lazy(() => import('@pages/ContextPage'))
const ProductPage = React.lazy(() => import('@pages/ProductPage'))

export default function ApplicationRoutes() {
  return (
    <React.Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/context" element={<ContextPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}
