import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    list: {},
    item: ''
  }

  clearList = () => {
    this.setState({
      list: {},
      item: ''
    })
  }

  getCurrentItemCount = () => {
    const { list, item } = this.state;
    if(list[item]) return list[item].count
    return 0;
  } 

  addToList =  () => {
    const { list, item } = this.state
    const count = this.getCurrentItemCount()
    if(item) {
      this.setState({
        list: {
          ...list,
          [item]: {
            count: count + 1,
            purchased: false
          }
        },
        item: ''
      })
    }
  }

  onChangeInput = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  togglePurchaseItem = (item) => {
    const { list } = this.props;
    this.setState({
      list: {
        ...list,
        [item]: {
          ...list[item],
          purchased: !list[item].purchased
        }
      }
    })
  }

  renderItem = (key) => {
    const {list} = this.state;
    if(list[key].purchased) return <li className="purchased"> {key} {list[key].count}</li>
    return <li> {key} {list[key].count}</li>
  }

  render() {
    const {item, list} = this.state
    return (
      <div className="App">
        <div className="TopContainer">
          <div className="InputContainer">
            <input type="text" name="firstname" value={item} onChange={this.onChangeInput}/>
          </div>
          <div onClick={this.addToList} className="Button">
            <div>Add</div>
          </div>
          <div onClick={this.clearList} className="Button">
            <div >Reset</div>
          </div>
        </div>
      <div className="Heading">
      GROCERY"S LIST
      </div>
      <div className="ListContainer">
        {
          Object.keys(list).map(key => (this.renderItem(key)))
        }
      </div>
      </div>
    )
  }
}

export default App;
