import ImageShow from './ImageShow'

function ImageList({ images }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {images.map(image => {
        return (
          <li key={image.id}>
            <ImageShow image={image} />
          </li>
        )
      })}
    </ul>
  )
}

export default ImageList
