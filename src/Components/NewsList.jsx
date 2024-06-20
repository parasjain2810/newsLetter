import React from 'react'
import CustomPagination from "./CustomPagination";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Card, Col, Container, Row } from "react-bootstrap";
import useNewsData from '../Hooks/useNewsData';
import {useDispatch} from 'react-redux'
const NewsList = ({category, searchTerm}) => {
const dispatch=useDispatch();
const navigate=useNavigate();
const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  const onPageChange = (pageNumber) => setCurrentPage(pageNumber);
  const {error,loading,newsData}=useNewsData(category,searchTerm);
  console.log(newsData)
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const totalArticles = newsData.length;
  const totalPages = Math.ceil(totalArticles / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentArticles = newsData.slice(startIndex, endIndex);
 
//  this is news list part filter according to the preference
  const handleDetail=(urlToImage,title,description,url,content,name,author)=>{
    // this is the redux where the state management occurs for the detail view of the news
    dispatch({type:'addToNewsCart',payload:{urlToImage,title,description,url,content,source:name,author}});
  }
  const naviagetionHandler=()=>{
    navigate('/detail');
  }
  return (
    <Container>
      <Row>
        {currentArticles.map((article)=>(
            <Col xs={12} md={6} lg={4} key={article.url}>
                <Card>
                    <Card.Img src={article.urlToImage} variant="top"/>
                    <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <button type="button" class="btn btn-link" onClick={()=>{
                      handleDetail(article.urlToImage,article.title,article.description,article.url,article.content,article.source.name,article.author)
                      naviagetionHandler();
                    }}>Summary</button>
              </Card.Body>
                </Card>
            </Col>
        ))}
      </Row>
      {/* this handle the pagination */}
      <CustomPagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </Container>
  )
}

export default NewsList
