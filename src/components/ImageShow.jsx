function ImageShow({ image }) {
  const {
    alt_description,
    urls: { regular },
  } = image

  return <img src={regular} alt={alt_description} />
}

export default ImageShow
