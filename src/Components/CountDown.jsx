import React from "react";
import "../index.css"


export class CountdownClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        useDatePicker:false,
        deadline: '31,December '+new Date().getFullYear(),
        newDeadline: '',
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
      
          this.checkDatePicker = this.checkDatePicker.bind(this);
  
    }
  
    checkDatePicker(event){
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      this.setState({
        useDatePicker: value
      })
    }
    componentWillMount() {
      this.getTimeUntil(this.state.deadline);
    }
  
    componentDidMount() {
      setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
    }
  
    leadingZero(num) {
      return num < 10 ? '0' + num : num;
    }
  
    getTimeUntil(deadline) {
      const totalTime = Date.parse(deadline) - Date.parse(new Date());
      const seconds = Math.floor((totalTime / 1000) % 60);
      const minutes = Math.floor((totalTime / 1000 / 60) % 60);
      const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
      const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));
      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  
    changeDeadline() {
      console.log('state', this.state);
      this.setState({
        deadline: this.state.newDeadline
      });
    }
    render() {
      var x = this.state.deadline;
      var y = new Date(Date.parse(x)).getMonth();
      var w = new Date(Date.parse(x)).getDate();
      var z = new Date(Date.parse(x)).getFullYear();
  
      var monthNames = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ];
  
      return (
    
     <div className="col-lg-6 col-md-6">
        <div className="row">
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="CountdownBox">
               <span>{this.leadingZero(this.state.hours)}</span>
               <span>Hours</span>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="CountdownBox">
               <span>{this.leadingZero(this.state.minutes)}</span>
               <span>Hours</span>
            </div>
          </div>
          <div className="col-lg-4 d-flex justify-content-center">
            <div className="CountdownBox">
               <span>{this.leadingZero(this.state.seconds)}</span>
               <span>Hours</span>
            </div>
          </div>
        </div>
      </div>





      );
    }
  }
