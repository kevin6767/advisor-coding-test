const LISTING_URL = "http://demo2255213.mockable.io/listings"
const LISTING_AVAILABILITY_URL = "https://demo2255213.mockable.io/advisor-availability?advisorId="

export const ListingAPI = {
  get: async function () {
    const response = await fetch(LISTING_URL, {
      method: "GET",
      cache: "no-cache",
    })

    return await response.json()
  },
}

export const ListingAvaibilityAPI = {
  get: async function (id) {
    const response = await fetch(`${LISTING_AVAILABILITY_URL}${id}`, {
      method: "GET",
      cache: "no-cache",
    })
    return await response.json()
  },
}
