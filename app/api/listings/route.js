const LISTING_URL = "http://demo2255213.mockable.io/listings"

export const ListingAPI = {
  get: async function (options = undefined) {
    const response = await fetch(LISTING_URL, {
      method: "GET",
      ...options,
      next: {revalidate: 10}
    })

    return await response.json()
  },
}

