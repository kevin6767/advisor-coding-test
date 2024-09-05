const LISTING_URL = "http://demo2255213.mockable.io/listings"

export const ListingAPI = {
  get: async function () {
    const response = await fetch(LISTING_URL, {
      method: "GET",
      cache: "no-cache",
    })

    return await response.json()
  },
}
