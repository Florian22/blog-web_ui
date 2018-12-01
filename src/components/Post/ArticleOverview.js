import React from "react";
import { Image } from 'react-bootstrap';

//CSS
import "./ArticleOverview.css";

export default class ArticleOverview extends React.Component {
 

  render() {
    if(this.props.url){
      return (
        <Image src={this.props.url} className = "article_picture"/>
    );
    }
    return (
        <div className = "article_picture"/>
    );
  }
}