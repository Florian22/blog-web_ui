import React from "react";

import { Link } from 'react-router-dom';
import PostOverview from "./ArticleOverview";
import PostBody from "./ArticleBody";
import PostMetaData from "./ArticleMetaData";
import constant from "../../config/constants";

const divStyle = {
    background: "#fff",
    boxShadow: "0 1px 4px rgba(0,0,0,.04)",
    border: "1px solid rgba(0,0,0,.09)",
    borderRadius: "3px",
    cursor: "pointer",
    marginLeft: "8%",
    marginRight: "8%",
    //margin: "0 auto",
    marginBottom: "40px",
    };


class ArticlePreview extends React.Component {
 
  render() {
    return (
        <div style={divStyle}>
        <Link to={`/article/${this.props.post._id}`} style={{ textDecoration: 'none', color:'black' }}>
            <PostOverview url = {this.props.post.imgURL}/>
            <PostMetaData post = {this.props.post}/>
            <h2 style={{marginTop:"0.1em", marginLeft:"0.2em"}}>{this.props.post.title}</h2>
            <PostBody content = {this.props.post.body.substring(0,constant.articleProperties.bodyPreviewLenght)}/>
            </Link>
        </div>
    );
 
}
}
//             <Link to={`/article/${this.props.post.slug}`}><span>Read more...</span></Link>
export default ArticlePreview;