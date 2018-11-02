import React from "react";

const divStyle = {
    width: "100%",
    maxWidth: "inherit",
    maxHeight: "inherit",
    height: "250px",
    borderTopRightRadius: "3px",
    borderTopLeftRadius: "3px",
    marginBottom: "2em",
    backgroundSize: "cover",
    backgroundPosition: "center",
    //backgroundImage: "url(https://cosmic-s3.imgix.net/99d93c80-23f5-11e7-875c-3f5dc9c15c2b-paradise.jpg)"
    };

export default class ArticleOverview extends React.Component {
 

  render() {
    if(this.props.url){
      return (
        <div style={{...divStyle, backgroundImage: `url(${this.props.url})`}}/>
    );
    }
    return (
        <div style={divStyle}/>
    );
  }
}