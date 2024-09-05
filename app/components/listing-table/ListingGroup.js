"use client"

import { Avatar, Button, Divider } from "@mui/material"
import PhoneIcon from "@mui/icons-material/Phone"
import ChatIcon from "@mui/icons-material/Chat"
import "./styles/ListingGroup.css"
import { useEffect, useState } from "react"
import { ListingAPI } from "@/app/api/listings/route"

const API_INTERVAL = 30000

export const ListingGroup = ({ initialData }) => {
  const [listingData, setListingData] = useState(initialData.data)

  useEffect(() => {
    const interval = setInterval(async () => {
      const listings = await ListingAPI.get()
      setListingData(listings.data)
    }, API_INTERVAL)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="listing-group-container">
      <div className="listing-group-header">
        <h3>Advisor Availability</h3>
        <div className="listing-group">
          {listingData.map((listing) => {
            return (
              <div className="advisor-group-container" key={listing.id}>
                <AdvisorGroup {...{ listing }} />
                <Divider />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const AdvisorGroup = ({ listing }) => {
  return (
    <div className="advisor-container" key={listing.id}>
      <div className="advisor-personal-information-container">
        <div className="advisor-avatar">
          <Avatar
            alt={listing.name}
            src={listing.pictureUrl}
            sx={{ width: 128, height: 128 }}
          />
        </div>
        <div className="advisor-name">{listing.name}</div>
      </div>
      <div className="advisor-contact-information-container">
        <div className="advisor-price">{listing.price}</div>
        <div className="advisor-call-now">
          <Button
            disabled={listing["call-availability"] === "offline"}
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#09adaf" }}
          >
            <PhoneIcon /> Call Now
          </Button>
        </div>
        <div className="advisor-chat-now">
          <Button
            disabled={listing["chat-availability"] === "offline"}
            variant="contained"
            size="small"
            sx={{ backgroundColor: "#09adaf" }}
          >
            <ChatIcon /> Chat Now
          </Button>
        </div>
      </div>
    </div>
  )
}
