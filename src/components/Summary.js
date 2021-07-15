import React, { Component } from 'react'

class Summary extends Component{
    render(){
        const {summary, currentDate} = this.props;
        return(
            <div className = "row">
                <div className = "NewConfirmed">
                    <h3 style={{marginLeft:"70px" , color:"orange"}}>New Confirmed</h3>
                    <h1 style={{marginLeft:"70px", color:"red"}}>{summary.NewConfirmed}</h1>
                    <h4 style={{marginLeft:"70px", color:"green"}}>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div className = "TotalConfirmed">
                    <h3 style={{marginLeft:"50px" , color:"orange"}}>Total Confirmed</h3>
                    <h1 style={{marginLeft:"50px" , color:"red"}}>{summary.TotalConfirmed}</h1>
                    <h4 style={{marginLeft:"50px" , color:"green"}} >{new Date(currentDate).toDateString()}</h4>
                </div>
                <div>
                <h3 style={{marginLeft:"50px" , color:"orange"}}>New Deaths</h3>
                    <h1 style={{marginLeft:"50px" , color:"red"}}>{summary.NewDeaths}</h1>
                    <h4 style={{marginLeft:"50px" , color:"green"}}>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div>
                <h3 style={{marginLeft:"50px" , color:"orange"}}>Total Deaths</h3>
                    <h1 style={{marginLeft:"50px" , color:"red"}}>{summary.TotalDeaths}</h1>
                    <h4 style={{marginLeft:"50px" , color:"green"}}>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div>
                <h3 style={{marginLeft:"50px" , color:"orange"}}>New Recovered</h3>
                    <h1 style={{marginLeft:"50px" , color:"red"}}>{summary.NewRecovered}</h1>
                    <h4 style={{marginLeft:"50px" , color:"green"}}>{new Date(currentDate).toDateString()}</h4>
                </div>
                <div>
                <h3 style={{marginLeft:"50px" , color:"orange"}}>Total Recovered</h3>
                    <h1 style={{marginLeft:"50px" , color:"red"}}>{summary.TotalRecovered}</h1>
                    <h4 style={{marginLeft:"50px" , color:"green"}}>{new Date(currentDate).toDateString()}</h4>
                </div>



            </div>

        )
    }
};
export default Summary;