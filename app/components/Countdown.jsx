var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');
var CountdownDropdown = require('CountdownDropdown');
var Presets = require('Presets');

var Countdown = React.createClass({
  getInitialState: function () {
    return {
      count: 0,
      countdownStatus: 'stopped',
      title: ''
    };
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch (this.state.countdownStatus) {
        case 'started':
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
  // componentWillUpdate: function(nextProps, nextState) {
  //   // Gets fired before the update
  //
  // },
  // componentDidMount: function () {
  //   //Will fire after it is rendered in the DOM
  //   console.log('componentDidMount');
  // },
  // componentWillMount: function () {
  //   // This will fire when the component is first mounted/added to the page
  //   console.log('componentWillMount')
  // },
  componentWillUnmount: function () {
    // This will fire when the component is unmounted/removed from the page
    // console.log('componentDidUnmount');
    // Clearing the timer!
    clearInterval(this.timer);
    this.timer = undefined;
  },
  startTimer: function () {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount === 0) {
        this.setState({countdownStatus: 'stopped'});
      }
    }, 1000);
  },
  handleSetCountdown: function(seconds){
    this.setState({
      count: seconds,
      countdownStatus: 'started',
      title: 'Custom Countdown'
    });
  },
  handlePresetCountdown: function(index){
    console.log('handlePresetCountdown: ', Presets[index]);
    this.setState({
      count: Presets[index].time,
      countdownStatus: 'started',
      title: Presets[index].name
    });
  },
  handleStatusChange: function (newStatus) {
    this.setState({countdownStatus: newStatus});
  },
  renderTitle: function () {
    return (
      <p className="text-center">{this.state.title}</p>
    )
  },
  render: function () {
    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      if(countdownStatus !== 'stopped') {
        return (
          <div>
            <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>

          </div>
        )} else {
        return (
          <div>
            <CountdownForm onSetCountdown={this.handleSetCountdown}/>
            <CountdownDropdown list={Presets} selected={this.handlePresetCountdown}/>
          </div>
        )};
    };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        {this.renderTitle()}
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
  )},
});

module.exports = Countdown;