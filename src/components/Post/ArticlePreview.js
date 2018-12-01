import React from "react";

import { Link } from 'react-router-dom';
import PostOverview from "./ArticleOverview";
import PostBody from "./ArticleBody";
import PostMetaData from "./ArticleMetaData";
import constant from "../../config/constants";

//CSS
import "./ArticlePreview.css";




class ArticlePreview extends React.Component {
 
  render() {
    return (
        <div className = "preview_card">
        <Link to={`/article/${this.props.post._id}`} style={{ textDecoration: 'none', color: 'black' }}> 
            <PostOverview url = {this.props.post.imgURL}/>
            <PostMetaData post = {this.props.post}/>
            <h2 className = "title">{this.props.post.title}</h2>
            <PostBody content = {this.props.post.body.substring(0,constant.articleProperties.bodyPreviewLenght)}/>
            </Link>
        </div>
    );
 
}
}
//             <Link to={`/article/${this.props.post.slug}`}><span>Read more...</span></Link>
export default ArticlePreview;