import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import Client from './Client'

const builder = imageUrlBuilder(Client);

export default function urlFor(source) {
  return builder.image(source)
}