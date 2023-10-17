//https://newsapi.org/v2/top-headlines?apiKey=59a95514bd574bad81f683bcda16b389&q=world

import React, {Component} from "react";
import NewsItems from "./NewsItems";
export default class WorldNews extends Component{
    constructor(props){
        super(props);
        this.state={
            error:null,
            isLoaded:false,
            items:[]
        }
    };
        componentDidMount(){
            fetch("https://newsapi.org/v2/top-headlines?apiKey=59a95514bd574bad81f683bcda16b389&q=all")
            .then(response => response.json())
            .then(
                (result) =>{
                    this.setState({
                        isLoaded:true,
                        items:result.articles
                    })
                },
                (error) =>{
                    this.setState({
                        isLoaded:true,
                        error:error
                    })
                }
            )
        }
        render(){
            const {error, isLoaded, items}=this.state
            if(error){
                return(
                    <div>Error Message:{error.message}</div>
                )
            }
            else if(!isLoaded){
                return(
                    <div>Loading....</div>
                )

            }
            else{ 
                return(
                    <div className="container-fluid world">
                        <div className="row">
                            {items.map(item =>(
                                <div className="col-lg-2 col-md-4" key={item.url}>
                                    <NewsItems item={item} />
                                </div>
                            ))

                            }
                        </div>
                    </div>
                )
            }
        }
    }
