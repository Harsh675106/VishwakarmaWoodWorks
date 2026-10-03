export function cloudinaryImage(path?: string, width = 1200) {
  if (!path) return ''
  if (/^https?:\/\//.test(path)) return path
  const base = import.meta.env.VITE_CLOUDINARY_BASE_URL || (import.meta.env.VITE_CLOUDINARY_CLOUD_NAME ? `https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload` : '')
  return base ? `${base}/f_auto,q_auto,w_${width}/${path}` : ''
}
