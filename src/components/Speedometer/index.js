import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onBrakeButton = () => {
    const {speed} = this.state

    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  onAccelerateButton = () => {
    const {speed} = this.state

    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  render() {
    const {speed} = this.state

    return (
      <div className="container">
        <div className="speedo-container">
          <h1 className="heading">SPEEDOMETER</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
            alt="speedometer"
            className="image"
          />
          <h1 className="description">Speed is {speed}mph</h1>
          <p className="details">Min Limit is 0mph, Max Limit is 200mph</p>
          <div className="btn-container">
            <button
              type="button"
              className="button1 button"
              onClick={this.onAccelerateButton}
            >
              Accelerate
            </button>

            <button
              type="button"
              className="button2 button"
              onClick={this.onBrakeButton}
            >
              Apply Brake
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Speedometer
