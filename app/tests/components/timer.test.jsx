var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('should exist',() => {
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    // Make the timer start
    timer.handleStatusChange('started');
    // Timer should be 0 to start with
    expect(timer.state.count).toBe(0);
    setTimeout(() =>{
      // Timer state should have changed and count increased
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    }, 1001);
  });

  it('should pause timer on paused status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    //Give a count to start with
    timer.setState({count: 10});
    // Make sure the test starts
    timer.handleStatusChange('started');
    // Make the test pause
    timer.handleStatusChange('paused');

    setTimeout(() => {
      /* Timer state should not have changed and count stayed the same */
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(10);
      done();
    }, 1001);
  });

  it('should clear count on stopped status', (done) => {
    var timer = TestUtils.renderIntoDocument(<Timer/>);
    //Give a count to start with
    timer.setState({count: 10});
    // Make sure the test starts
    timer.handleStatusChange('started');
    // Make the test pause
    timer.handleStatusChange('stopped');

    setTimeout(() => {
      /* Timer state should not have changed and count stayed the same */
      expect(timer.state.timerStatus).toBe('stopped');
      expect(timer.state.count).toBe(0);
      done();
    }, 1001);
  });
});