import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './App.css'

class App extends Component {
  state = {inputValue: '', inputData: '', dataList: []}

  onChangeInput = event => {
    this.setState({
      inputValue: event.target.value,
      inputData: event.target.value,
    })
  }

  onClickAdd = event => {
    event.preventDefault()

    const {inputData} = this.state
    const newData = {
      id: uuidv4(),
      value: inputData,
    }

    this.setState(prevState => ({
      dataList: [...prevState.dataList, newData],
    }))
    this.setState({inputValue: ''})
  }

  render() {
    const {inputValue, dataList} = this.state

    return (
      <div className="bg-custom">
        <div className="card">
          <div className="countCon">
            <h1 className="countHead">Count the characters like a Boss...</h1>
            {dataList.length !== 0 && (
              <ul className="listsCon">
                {dataList.map(each => (
                  <li key={each.id}>
                    <p className="countPara">{`${each.value}: ${each.value.length}`}</p>
                  </li>
                ))}
              </ul>
            )}
            {dataList.length === 0 && (
              <div className="emptyCon">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                  alt="no user inputs"
                  className="userImg"
                />
              </div>
            )}
          </div>
          <div className="inputCon">
            <h1 className="inputHead">Character Counter</h1>
            <form className="addCon" onSubmit={this.onClickAdd}>
              <input
                type="text"
                placeholder="Enter the Characters here"
                value={inputValue}
                onChange={this.onChangeInput}
                className="inputCustom"
              />
              <button type="submit" className="btn">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
