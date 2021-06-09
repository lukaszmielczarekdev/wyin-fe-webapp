const api = {
  getHistoryEvents: async (time) => {
    const params = { t: time };
    const endpoint = "/history/event";
    const qs = getQueryString(params);
    const url = qs.length > 0 ? `${endpoint}?${qs}` : endpoint;
    const base = process.env.REACT_APP_WYIN_BE_FEED_API;

    const uri = new URL(url, base);
    return getApiResponse(uri);
  },

  getHistoryRandomEvent: async () => {
    const endpoint = "/history/event/random";
    const base = process.env.REACT_APP_WYIN_BE_FEED_API;

    const uri = new URL(endpoint, base);
    return getApiResponse(uri);
  },
};

export default api;

async function getApiResponse(uri) {
    const response = await fetch(uri);
    throwOnErrorStatusCode(response.status);
    return response.json();
}

function getQueryString(params) {
  const queryStrings = Object.entries(params).map((p) => {
    const [key, value] = p;
    return `${key}=${encodeURIComponent(value)}`;
  });
  return queryStrings.join("&");
}

function throwOnErrorStatusCode(statusCode) {
  if (statusCode >= 400) {
    throw new Error(`API responded with: ${statusCode}`);
  } else if (!statusCode) {
    throw new Error("Woops, there is no status code");
  }
}
