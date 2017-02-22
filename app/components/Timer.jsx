var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var CountdownForm = require('CountdownForm');

var Timer = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      timerStatus: 'stopped'
    };
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch (this.state.timerStatus) {
        case 'started':
          // console.log('this.state.count',this.state.count);
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },
  componentWillUnmount: function () {
    // Clearing the timer!
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      this.setState({
        count: this.state.count + 1
      });
      if(this.state.count === 33000) {
        this.setState({timerStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSetCountdown: function(seconds){
    // console.log('seconds: ',seconds);
    if(isNaN(seconds)){
      // console.log("not a number")
      seconds = 0;
    } else {
      // console.log('its a number');
    }
    this.setState({
      count: seconds,
      timerStatus: 'started'
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({timerStatus: newStatus});
  },
  render: function () {
    var {count, timerStatus} = this.state;

    return (
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;