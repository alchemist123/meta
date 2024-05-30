const { getMetadata } = require('page-metadata-parser');
const domino = require('domino');
async function getMetadataFromUrl(url) {
  try {
    // Dynamically import node-fetch
    const fetch = await import('node-fetch');
    
    const response = await fetch.default(url); // Accessing the default export
    const html = await response.text();
    const doc = domino.createWindow(html).document;
    const metadata = getMetadata(doc, url);
    return metadata;
  } catch (error) {
    throw new Error('Failed to fetch metadata');
  }
}


// Example usage:
const url = 'https://www.npmjs.com/package/page-metadata-parser';
getMetadataFromUrl(url)
  .then(metadata => {
    console.log(metadata);
  })
  .catch(error => {
    console.error(error);
  });

