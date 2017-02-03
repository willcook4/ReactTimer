var React = require('react');


var CountdownDropdown = React.createClass({
  renderListItems: function() {
    // itemsArray is the list of Presets from passed in through props
    const itemsArray = this.props.list;
    // Creating an array of items in jsx format to display.
    // Note the key for identity in React
    const itemsReadyToDisplay = itemsArray.map((item, index)=> {
      // return (
      //   <div onClick={this.select.bind(null, item)} key={index.toString()}>
      //     <span>{item.name}, {item.time}</span>
      //   </div>
      // );
      return (
        <option key={index.toString()} value={item.time}>{item.name}</option>
      );
    });
    return itemsReadyToDisplay;
  },
  // Add item to props if selected
  select: function(item) {
    console.log('item selected: ', item.time);
    this.props.selected(item.time);
  },
  render: function(){
    return (
      <div>
        <p>Or select a common timer</p>
        {/* {this.renderListItems()} */}
        <form>
          <select>
            {this.renderListItems()}
          </select>
        </form>
      </div>
    )
  }
});

module.exports = CountdownDropdown;