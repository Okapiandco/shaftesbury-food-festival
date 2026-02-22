import imageUrlBuilder from '@sanity/image-url'
import { client } from './sanity'

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export function urlForImage(source: any, width = 800, height = 600) {
  return builder.image(source).width(width).height(height).auto('format').url()
}
