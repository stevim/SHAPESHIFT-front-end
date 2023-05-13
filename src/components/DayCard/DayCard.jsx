
// npm modules
import { Link } from "react-router-dom"


const DayCard = ({ day }) => {

  
  return (
    <>
      <div>
        <Link to={`/days/${day._id}`}>
          <h4>{day.date.slice(0,10)}</h4>
        </Link>
        <h4>Rating: {day.rating}/5</h4>
        {console.log(day.owner)}
      </div>
    </>
  )
}

export default DayCard