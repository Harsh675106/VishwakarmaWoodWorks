export function cloudinaryImage(path?: string, width = 1200) {
  if (!path) return ''
  const transforms = `f_auto,q_auto:good,c_limit,w_${width}`

  // Project data contains full Cloudinary URLs. Insert transformations into
  // those URLs too, rather than returning the original large PNG unchanged.
  if (/^https?:\/\//.test(path)) {
    return path.replace(
      /(\/image\/upload)(\/)/,
      `$1/${transforms}$2`,
    )
  }
  const base = import.meta.env.VITE_CLOUDINARY_BASE_URL || (import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ? `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload` : '')
  return base ? `${base}/${transforms}/${path}` : ''
}
