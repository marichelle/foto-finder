import { useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

function SearchBar({ handleSubmit }) {
  const [query, setQuery] = useState('')

  const handleChange = e => setQuery(e.target.value)

  const handleFormSubmit = e => {
    e.preventDefault()
    handleSubmit(query)
  }

  return (
    <form className="flex flex-1 justify-center" onSubmit={handleFormSubmit}>
      <div className="w-full">
        <label htmlFor="search" className="sr-only">
          Search
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="h-8 w-8 text-gray-400"
            />
          </div>
          <input
            type="search"
            name="search"
            placeholder="Search"
            value={query}
            onChange={handleChange}
            className="block w-full rounded-md border border-gray-400 py-1.5 pl-14 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 text-4xl lowercase font-mono"
          />
        </div>
      </div>
    </form>
  )
}

export default SearchBar
