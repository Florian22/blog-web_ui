import React from "react";
import moment from "moment";

import { Image } from 'react-bootstrap';
//CSS
import "./ArticleMetaData.css";


export default class ArticleMetaData extends React.Component {
 

  render() {
    const article_date = (moment(this.props.post.createdAt).format("DD MMMM YYYY HH:mm","fr")).toString();
    return (
        <div>
          {/* A JSX comment   <h2>{this.props.post.title}</h2> */}
            <Image className = "profil_picture" src={`url(${this.props.post.user.picture})`} ></Image>
            <div className = "author_name"> {article_date} by {this.props.post.user.username}</div>
        </div>
    );
  }
}

