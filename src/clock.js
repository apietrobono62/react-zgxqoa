import React from "react";

/*function clock(props){
  const tempo = Date.now() + props.timezone * 3600000;
  const data = new Date(tempo)
  const paese = props.country;
  return <h2> in {paese} Today is  { data.toLocaleDateString()  + ' ' + data.toLocaleTimeString() }</h2>
};*/
//export default clock;

class Clock_2 extends React.Component{

  constructor (props){
    super(props);
  //  this.toggleWatch = this.toggleWatch.bind(this);
    this.state = {
      date: new Date(),
      timezone: 1,
      stopped: false
    };
  };
  render(){
    const tempo = this.state.date.getTime() + this.props.timezone * 3600000;
    const data = new Date(tempo);
    const paese = this.props.country;
    return <h2> in {paese} Today is  { data.toLocaleDateString()  + ' ' + data.toLocaleTimeString() + ' ' }
              <button onClick={this.toggleWatch}>{this.state.stopped?'Start':'Stop'}</button>
           </h2>
  };
  toggleWatch = (e) => {
     this.setState((state,props) => {
       state.stopped? this.startWatch() : clearInterval(this.interval);
       return {stopped: !state.stopped}
     })
  };
  tick = () => {
    this.setState({
      date: new Date()
    });
    this.setState((precState,props) => {
        return{
          timezone: precState.timezone + 1
        }
      });
  }
  startWatch(){
       this.interval = setInterval(this.tick,this.props.milsecs);
  }
  componentDidMount(){
       this.startWatch();
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
};
export default Clock_2;