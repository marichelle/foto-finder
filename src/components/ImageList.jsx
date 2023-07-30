import ImageShow from './ImageShow'

function ImageList({ images }) {
  return (
    <ul className="columns-2 gap-3 sm:columns-4">
      {images.map(image => {
        return (
          <li key={image.id} className="w-full mb-3">
            <ImageShow image={image} />
          </li>
        )
      })}
    </ul>
  )
}

export default ImageList
