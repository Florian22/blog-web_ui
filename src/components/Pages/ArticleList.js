import React from "react";
import {CircleArrow as ScrollUpButton} from "react-scroll-up-button";
import { Timeline } from 'react-twitter-widgets';
import {connect} from "react-redux";
import { Row , Grid, Col, Image} from 'react-bootstrap';
//CSS
import "./ArticleList.css"
//CustomPages
import * as actionCreators from "../../actions/index";
import ArticlePreview from "../Post/ArticlePreview";

const mapStatetoProps = (state) => {
  return state;
}

class ArticleList extends React.Component {

  componentWillReceiveProps(){
  }
  
  componentWillMount() {
    this.props.loadArticles();
  }

  componentWillUnmount() {
    this.props.unloadArticles();
  }

  componentDidUpdate () {
  }

  render() {
    if(this.props.articles){
    return (
      <div>
        {/*Image header*/}
        <Row>
          <Col xsHidden smHidden>
            <Image src="assets/header-crop.jpg" className="header-image"/>
          </Col>
        </Row>
        {/*Page*/}
        <Grid fluid={true}>
        <Row>
          <Col xsHidden smHidden md={1}>
          </Col>
          <Col sm={12} md={7}>
              {
                this.props.articles.map(article => {
                  return (
                    <Row key = {article._id}>
                        <ArticlePreview post={article} key={article._id} />
                    </Row>
                  );
                })
              }
            </Col>
            <Col xsHidden smHidden md={3}>
            {/*Generate net::ERR_BLOCKED_BY_CLIENT ERROR*/}
              <Timeline dataSource={{
                            sourceType: 'profile',
                            screenName: 'FlorianBonniec'
                          }}
                          options={{
                            username: 'FlorianBonniec',
                            height: '500'
                          }}
                          /*onLoad={() => }*//>
            </Col>
            <Col xsHidden smHidden md={1}>
            </Col>
        </Row>
        <ScrollUpButton />
      </Grid>
      </div>
    );
  }else{
    return (
      <span></span>
    );
  }
}
}

export default connect(mapStatetoProps,actionCreators)(ArticleList);