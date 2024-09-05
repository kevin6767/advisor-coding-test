import { ListingAPI } from "./api/listings/route"
import { ListingGroup } from "./components/listing-group/ListingGroup"
import "./homepage.css"

export default async function HomePage() {
  const listings = await ListingAPI.get()
  if (!listings) return <div>Something went wrong!</div>

  return (
    <div className="home-page-container">
      <ListingGroup initialData={listings} />
    </div>
  )
}
