var React = require('react');
var expect = require('expect');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var CountdownDropdown = require('CountdownDropdown');
// var Presets = require('Presets');

describe('CountdownDropdown', () => {
  it('should exist', () => {
    expect(CountdownDropdown).toExist();
  });

  describe('Render', () => {
    it('should render a dropdown select with a name', () => {
      //Preset to test with
      var list = [{
        name: "Test name",
        time: 40
        },{
        name: "Test name2",
        time: 60
      }];

      var dropdown = TestUtils.renderIntoDocument(<CountdownDropdown selected={function(){console.log('Selected ran');}} list={list}/>);

      var selector = $(ReactDOM.findDOMNode(dropdown).querySelector('option'));
      var selectorText = selector.text();

      expect(selectorText).toBe('Test name');
    });

    it('should render a dropdown select with a value', () => {
      //Preset to test with
      var list = [{
        name: "Test name",
        time: 40
        },{
        name: "Test name2",
        time: 60
      }];

      var dropdown = TestUtils.renderIntoDocument(<CountdownDropdown selected={function(){console.log('Selected ran');}} list={list}/>);

      var selector = $(ReactDOM.findDOMNode(dropdown).querySelector('option'));
      var selectorText = selector.text();

      expect(parseInt($(selector[0], this).attr('value'))).toBe(0);
    });
  });

  /* Currently not working...
  it('should call "selected" function when an option is selected', ()=>{

    //Preset to test with
    var list = [{
      name: "Test name",
      time: 40
      },{
      name: "Test name2",
      time: 60
    }];

    var spy = expect.createSpy();
    var countdownDropdown = TestUtils.renderIntoDocument(
      <CountdownDropdown selected={spy} list={list}/>);

    var $el = $(ReactDOM.findDOMNode(countdownDropdown));
    // console.log($el[0]); - FINE

    var input = $el.find('select');
    console.log('input',input);
    TestUtils.Simulate.change(input, {'target': {'value': 1}});
    // var option = $el.find('option')[0];
    // TestUtils.Simulate.click(option);

    expect(spy).toHaveBeenCalled();
  });
*/
});
