// Fetch data from the ABS Indicator API
export default async function fetchABSIndicatorAPI(endpoint: string) {

    // define request headers
    const headers = {
      // header required by ABS
      "x-api-key": `${process.env.ABS_API_INDICATOR_KEY}`,
      // request data response in JSON format
      "accept": "application/json",
      // ensure latest ABS data is fetched
      "Cache-Control": "no-cache",
    };

    // define the API endpoint to fetch from
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_ABS_INDICATOR_BASE_URL}/${endpoint}`,
      { headers }
    );

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    // convert response to json and return
    return res.json();
  }