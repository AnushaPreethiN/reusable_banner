// Write your code here.
import './index.css'

const SeasonsProfile = props => {
  const {seasonDetails} = props
  const {headerText, description, className} = seasonDetails

  return (
    <li className="season-card-container">
      <div className="season-details-container">
        <div className={className}>
          <li>
            <h1 className="name">{headerText}</h1>
            <p className="desc"> {description} </p>
            <button type="button" className="Button">
              Show More
            </button>
          </li>
        </div>
      </div>
    </li>
  )
}
export default SeasonsProfile
