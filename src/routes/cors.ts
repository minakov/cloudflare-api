import { Request } from 'itty-router';

const cors = (_: Request, { request: { headers } }: FetchEvent) => {
  const origin = headers.get('Origin');
  const requestMethod = headers.get('Access-Control-Request-Method');
  const requestHeaders = headers.get('Access-Control-Request-Headers');
  // Make sure the necessary headers are present for this to be a valid pre-flight request
  if (origin !== null && requestMethod !== null && requestHeaders !== null) {
    // Handle CORS pre-flight request.
    return new Response(null, {
      status: 204,
      headers: {
        'Content-Length': '0',
        'Access-Control-Allow-Origin': origin || '*',
        'Access-Control-Allow-Methods': 'GET,POST,DELETE,OPTIONS',
        'Access-Control-Max-Age': '86400',
        // Allow all future content Request headers to go back to browser
        // such as Authorization (Bearer) or X-Client-Name-Version
        'Access-Control-Allow-Headers': requestHeaders || '',
      },
    })
  }
  return new Response('Non CORS options request not allowed', {
    status: 405,
    statusText: 'Method Not Allowed',
  })
};

export default cors;
