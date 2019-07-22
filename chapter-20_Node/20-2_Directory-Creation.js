// Node exercises can not be ran in the browser,
// but you can look at their solution here.
// You can use the function that implements the DELETE method as a blueprint for the MKCOL method. When no file is found, try to create a directory with mkdir. When a directory exists at that path, you can return a 204 response so that directory creation requests are idempotent. If a nondirectory file exists here, return an error code. Code 400 (“bad request”) would be appropriate.
const { mkdir } = require('fs').promises;

// methods.MKCOL = async function(request) {
//   let path = urlPath(request.url);
//   let stats;
//   try {
//     stats = await stat(path);
//   } catch (error) {
//     if (error.code != 'ENOENT') throw error;
//     await mkdir(path);
//     return {status: 204};
//   }
//   if (stats.isDirectory()) return { status: 204 };
//   return { status: 400, body: 'Not a directory' };
// };