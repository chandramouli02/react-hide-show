// Write your code here
import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstNameClicked: false, lastNameClicked: false}

  firstNameClick = () => {
    const {firstNameClicked} = this.state
    if (firstNameClicked) {
      return this.setState({firstNameClicked: false})
    }
    return this.setState({firstNameClicked: true})
  }

  lastNameClick = () => {
    const {lastNameClicked} = this.state
    if (lastNameClicked) {
      return this.setState({lastNameClicked: false})
    }
    return this.setState({lastNameClicked: true})
  }

  render() {
    const {firstNameClicked, lastNameClicked} = this.state
    //  console.log(firstNameClicked, lastNameClicked)
    return (
      <div className="main-container">
        <h1>Show/Hide</h1>
        <div className="buttons-container">
          <div className="button-container-1">
            <button
              className="btn-1"
              type="button"
              onClick={this.firstNameClick}
            >
              Show/Hide Firstname
            </button>
            {firstNameClicked && (
              <div className="container-click">
                <h1 className="heading">Joe</h1>
              </div>
            )}
          </div>
          <div className="button-container-2">
            <button type="button" onClick={this.lastNameClick}>
              Show/Hide Lastname
            </button>
            {lastNameClicked && (
              <div className="container-click">
                <h1 className="heading">Jonas</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
