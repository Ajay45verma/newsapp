import React, { Component } from "react";
export default class NewsItems extends Component {
    render() {
        let { item } = this.props;
        return ( <div>
            <div className = "card" style = {{ width: "18rem" } } >
            <img src = { item.urlToImage } className = "card-img-top" alt = "..." / >
            <div className = "card-body" >
            <h5 className = "card-title" > { item.title} </h5> 
            <p className = "card-text" > { item.description} </p> 
            <a href = { item.url } className = "btn btn-primary" > Get More </a> 
            </div>
             </div>
              </div>
        )
    }
}