import ImageShow from './ImageShow'

function ImageList({ images }) {
  return (
    <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
      {images.map(({ id, alt_description, width, height, urls: { small } }) => {
        return <ImageShow src={small} altText={alt_description} key={id} />
      })}
    </ul>
  )
}

export default ImageList
