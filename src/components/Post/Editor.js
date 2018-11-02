import React from "react";
import { Link } from 'react-router-dom';

//import {EditorState, convertToRaw, ContentState} from "draft-js";

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
//import draftToHtml from 'draftjs-to-html';
//import htmlToDraft from 'html-to-draftjs';

//Redux
import {connect} from "react-redux";
//import { Field, reduxForm, formValueSelector } from 'redux-form';
import * as actionCreators from "../../actions/index";
import { Editor } from '@tinymce/tinymce-react';


const mapStatetoProps = (state) => {
    return state;
  }

class ArticleEditor extends React.Component {

    componentWillMount() {
        if(this.props.match.params.id){
            this.props.loadArticle(this.props.match.params.id);
            }
        }

        componentWillUnmount() {
            this.props.onUnloadArticle();
        }

    constructor(props){
        super(props);
        this.onTitleChange = ev => {
            this.setState({...this.state, article_title: ev.target.value});
        }
        this.onBackgroundURLChange = ev => {
            this.setState({...this.state, article_background_url: ev.target.value});
        }
        this.state = {articlecontent : "", api_response: false};
        }
   
    update(id, contentToSave, url_background){
        if(this.props.currentuser){
            console.log("update saving...");
            this.props.updateArticle(id, {data: {title: this.props.article.title , body: contentToSave, imgURL:  url_background}, token: this.props.currentuser.token});
        }else{
            alert("Not loggedIn");
        }
    }

    create(article_title, article_body, background_url){
        if(this.props.currentuser){
            console.log("create saving...");
            this.props.createArticle({data: {title: article_title , body: article_body, imgURL: background_url}, token: this.props.currentuser.token});
        }else{
            alert("Not loggedIn");
        }
    }

    handleEditorChange = (e) => {
        this.setState({articlecontent: e.target.getContent()});
      }
   
     render() {
         if(this.props.match.params.id){
                if(this.props.article){
                    // Only if it's the first time I get data from rest API, I don't want to to this if I press keys
                    if((this.state.articlecontent === "") && (this.state.api_response === false)){
                        const html = this.props.article.body;
                        if (html) {
                            //this.state = {articlecontent: html};
                            this.setState({articlecontent: html});
                        }
                        //this.state.api_response = true;
                        this.setState({api_response: true});
                    }

            return (
                <div>
                    <img alt = "article_pict" src = {this.props.article.imgURL} height="200"></img>
                    <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      value = {this.props.article.imgURL}
                      onChange={this.onBackgroundURLChange.bind(this)} 
                      />
                    </fieldset>
                   <h2>{this.props.article.title}</h2>
                <Editor
                apiKey= {"vm6crp29hy1ie0rvlxixdf0bmwobcolypychmon56bfh70k7"}
                initialValue= {this.state.articlecontent}
                init={{
                    plugins: 'link image code',
                    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
                    branding: true,
                    height : '300',
                    }}
                onChange={this.handleEditorChange}
                    />
                    <button onClick={() => {this.update(this.props.article._id, this.state.articlecontent,  this.state.article_background_url) }} >Save</button>
                </div>
            );
            }else{
                return(null);
                }
            // Case new article
            }else{
                return(
                
                    <div>
                <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Title"
                      onChange={this.onTitleChange.bind(this)} 
                      />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Background URL"
                      onChange={this.onBackgroundURLChange.bind(this)} 
                      />
                  </fieldset>
                
                <Editor
                apiKey= {"vm6crp29hy1ie0rvlxixdf0bmwobcolypychmon56bfh70k7"}
                init={{
                 plugins: 'link image code',
                 toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code',
                 branding: true,
                 height : '300',
                 }}
                onChange={this.handleEditorChange}
                 />
                 <Link to="/"><button onClick={() => {this.create(this.state.article_title, this.state.articlecontent, this.article_background_url ) }}>Create</button>
                 </Link>
                </div>
                );
            }
        }
    }

    export default connect(mapStatetoProps,actionCreators)(ArticleEditor);