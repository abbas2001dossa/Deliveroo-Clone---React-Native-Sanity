import {createClient} from '@sanity/client'
import { ImageUrlBuilder } from "@sanity/image-url";

const Client = createClient({
    projectId: '0rtshdta',
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2021-10-12', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  });


export default Client;