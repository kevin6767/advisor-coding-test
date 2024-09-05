import { Avatar, Button, Divider } from "@mui/material"
import PhoneIcon from "@mui/icons-material/Phone"
import ChatIcon from "@mui/icons-material/Chat"
import "./styles/ListingGroup.css"

export const ListingGroup = ({ listingData }) => {
  const { data } = listingData
  return (
    <div className="listing-group-container">
      <div className="listing-group-header">
        <h3>Advisor Availability</h3>
        <div className="listing-group">
          {data.map((listing) => {
            return (
              <div className="advisor-group-container" key={listing.id}>
              {getAdvisorGroup({ listing })}
              <Divider />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

const getAdvisorGroup = ({ listing }) => {
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
          >
            <PhoneIcon /> Call Now
          </Button>
        </div>
        <div className="advisor-chat-now">
          <Button
            disabled={listing["chat-availability"] === "offline"}
            variant="contained"
            size="small"
          >
            <ChatIcon /> Chat Now
          </Button>
        </div>
      </div>
    </div>
  )
}
