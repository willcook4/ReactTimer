var React = require('react');

var CountdownDropdown = React.createClass({
  renderListItems: function() {
    // itemsArray is the list of Presets from passed in through props
    const itemsArray = this.props.list;
    // Creating an array of items in jsx format to display.
    // Note the key for identity in React
      return (
        <select onChange={this.handleChange} className="dropdown">
          {itemsArray.map((item, index) => {
          return <option key={index.toString()} value={index}>{item.name}</option>
        })}
        </select>
  )},
  handleChange(e) {
    // console.log('Selected: ', e.target.value);
    // Pass to the prop the index of the Preset selected.
    this.props.selected(e.target.value);
  },
  render: function(){
    return (
      <div>
        <p>Or select a common timer:</p>
        <form>
          {this.renderListItems()}
        </form>
      </div>
    )
  }
});

module.exports = CountdownDropdown;