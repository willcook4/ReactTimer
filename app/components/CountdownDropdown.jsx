var React = require('react');

var CountdownDropdown = React.createClass({
  renderListItems: function() {
    // itemsArray is the list of Presets from passed in through props
    const itemsArray = this.props.list;
    // Creating an array of items in jsx format to display.
    // Note the key for identity in React
      return (
        // <select ref="itemSelected">{itemsArray.map((item, index) => {
        <select onChange={this.handleChange}>{itemsArray.map((item, index) => {
          return <option key={index.toString()} value={index}>{item.name}</option>
        })}
        </select>
  )},
  // Add item to props if selected
  formSubmit: function(e) {
    e.preventDefault();
    //This form never submits

    // console.log('event', this.refs.itemSelected.value);
    // console.log('item selected: ', item.time);
    // this.props.selected(item.time);
  },
  handleChange(e) {
    console.log('Selected: ', e.target.value);
    // Pass the prop of the index of the Preset selected.
    this.props.selected(e.target.value);
  },
  render: function(){
    return (
      <div>
        <p>Or select a common timer</p>
        <form onSubmit={this.formSubmit}>
          {this.renderListItems()}
        </form>
      </div>
    )
  }
});

module.exports = CountdownDropdown;