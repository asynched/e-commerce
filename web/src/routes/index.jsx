import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Loader from '@components/common/Loader'

const IndexPage = React.lazy(() => import('@pages/IndexPage'))

export default function ApplicationRoutes() {
  return (
    <React.Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </BrowserRouter>
    </React.Suspense>
  )
}
