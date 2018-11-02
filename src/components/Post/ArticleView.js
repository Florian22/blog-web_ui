import React from "react";
import { Link } from 'react-router-dom';
import {connect} from "react-redux";
import { Row , Grid, Col, Button} from 'react-bootstrap';
import ReactDisqusComments from "react-disqus-comments";

import PostOverview from "./ArticleOverview";
import PostBody from "./ArticleBody";
import PostMetaData from "./ArticleMetaData";
import * as actionCreators from "../../actions/index";

import "./ArticleView.css";

const mapStatetoProps = (state) => {
      return state;
    }


class ArticleView extends React.Component {
 
    componentWillMount() {
        this.props.loadArticle(this.props.match.params.id);
        }

    componentWillUnmount() {
        this.props.onUnloadArticle();
        }

    delete(article_id){
        if(this.props.currentuser){
                this.props.deleteArticle(article_id, {token: this.props.currentuser.token});
            }else{
                alert("Not loggedIn");
            }
        }
    handleNewComment = (e) => {
        console.log(e.text);
    }

    handleDelete = (e) => {
        console.log(e);
    }

  render() {
    if(this.props.article){
        return (
            <Grid>
                <Row>
                    <Col sm={12} md={9}>
                        <h2>{this.props.article.title}</h2>
                        <PostOverview url = {this.props.article.imgURL}/>
                    </Col>
                    <Col sm={0} md={3}>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} md={9}>
                        <PostBody content = {this.props.article.body}/>
                            <ReactDisqusComments
                            shortname="blog-florian-bonniec"
                            identifier = {this.props.article._id}
                            title = {this.props.article.title}
                            url = {window.location.href}
                            onNewComment={this.handleNewComment}/>
                    </Col>
                    <Col sm={12} md={3}>
                            <PostMetaData post = {this.props.article}/>
                            {((this.props.currentuser) && (this.props.currentuser.username === this.props.article.user.username)) ?
                            (<div>
                                <Button bsStyle="primary"><Link to={`/editor/${this.props.article._id}`}>Edit...</Link></Button>
                                <Button bsStyle="primary"><Link to={`/`} onClick={() => {this.delete(this.props.article._id)}}>Delete</Link></ Button>
                            </div>) : (<span></span>)
                            }
                    </Col>
                </Row>
            </Grid>
        );
  }else{return(null)}
}
}

export default connect(mapStatetoProps,actionCreators)(ArticleView);