/**
 * Function to format the url in web uri format
 * @param {string} url
 */
function formatUrl(url) {
  if (!url.startsWith("https://") && !url.startsWith("http://"))
    return `https://${url}`;
  else return url;
}
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    console.log("Failed to copy", error.message);
  }
}
export { formatUrl, copyToClipboard };
