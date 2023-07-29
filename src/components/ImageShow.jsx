function ImageShow({ src, altText }) {
  return (
    <div className="relative group aspect-square block w-full overflow-hidden rounded-lg bg-gray-100">
      <img
        src={src}
        alt={altText}
        className="absolute object-cover object-center w-full h-full pointer-events-none group-hover:opacity-75"
      />
    </div>
  )
}

export default ImageShow
