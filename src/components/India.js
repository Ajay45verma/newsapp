import React, { Component } from "react";
import NewsItems from "./NewsItems";
class MyComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey=59a95514bd574bad81f683bcda16b389")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              items: result.articles
            });
           
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
   
    render() {
      const { error, isLoaded, items } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else { 
        return (
          
          <div className="container my-3">
            <div className="row">
            {items.map(item => (
            
              <div className="col-md-4 col-lg-3" key={item.url}>

               <NewsItems item={item} />
                
            </div>
              
            ))}
            </div>
          </div>
        );
      }
    }
  }
  export default MyComponent;