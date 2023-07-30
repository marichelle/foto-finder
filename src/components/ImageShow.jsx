function ImageShow({ image }) {
  const {
    alt_description,
    urls: { regular },
  } = image

  return (
    <div className="relative group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100">
      <img
        src={regular}
        alt={alt_description}
        className="absolute object-cover object-center w-full h-full pointer-events-none group-hover:opacity-75"
      />
    </div>
  )
}

export default ImageShow
