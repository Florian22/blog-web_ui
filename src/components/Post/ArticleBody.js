import React from "react";

var bodyStyle = {
    maxHeight: "inherit",
    maxWidth: "inherit",
    margin: "auto",
    padding: "0px 10px 0px 10px",
    textAlign: "justify",
    textJustify: "inter-word",
    wordWrap: "break-word",
    overflow: "-webkit-paged-x",
};

export default class ArticleBody extends React.Component {

  render() {
   // const markup = { __html: marked(this.props.content, { sanitize: true }) };
    const markup = { __html:this.props.content,};
    return (
        <div style={bodyStyle}>
         <div dangerouslySetInnerHTML={markup}></div>
        </div>       
    );
  }
}