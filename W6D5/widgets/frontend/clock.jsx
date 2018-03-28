import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date()};
    this._tick = this._tick.bind(this);
  }

  _tick() {
    this.state.time.setSeconds(this.state.time.getSeconds() + 1);
    this.setState({time: this.state.time});
  }

  render() {

    return (<section className="clocky">

    <ul className="clock-headers">
      <li>Time: </li>
      <li> Date: </li>
    </ul>

    <ul>
      <li>
        {this.state.time.getHours()}:{this.state.time.getMinutes()}:{this.state.time.getSeconds()} {this.state.time.toLocaleTimeString('en-us',{timeZoneName:'short'}).split(' ')[2]}
      </li>
      <li>
        {this.state.time.toLocaleTimeString('en-us', { weekday: "short" }).slice(0,3)} {this.state.time.toLocaleTimeString('en-us', { month: "short" }).slice(0,3)} {this.state.time.getDate()} {this.state.time.getFullYear()}
      </li>
    </ul>
  </section>);
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this._tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

}


export default Clock;
