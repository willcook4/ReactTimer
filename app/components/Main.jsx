var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div>
      <div>
        <Nav></Nav>
        <p>Main.jsx Rendered</p>
        {props.children}
      </div>
    </div>
  );
}


module.exports = Main;

