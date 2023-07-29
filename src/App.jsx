import { useState } from 'react'

import ImageList from './components/ImageList'
import SearchBar from './components/SearchBar'
import searchImages from './lib/unsplash'
import './styles/index.css'

function App() {
  const [images, setImages] = useState([])

  const handleSubmit = async query => {
    const results = await searchImages(query)
    if (results) setImages(results)
  }

  return (
    <div className="m-6">
      <div className="mx-auto max-w-2xl text-center px-6 pb-8">
        <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          foto-finder
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <SearchBar handleSubmit={handleSubmit} />

        {images.length > 0 && <ImageList images={images} />}
      </div>
    </div>
  )
}

export default App
