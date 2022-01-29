import React, { useEffect, useRef, useState } from 'react';
import { Container, ListGroup, Row, Spinner } from 'react-bootstrap';

function TodosPage() {

  const [todos, setTodos] = useState([]);
  const spinnerRef = useRef(); // useRef hook ile elemente document.getElementById gibi bağlanmış oluyoruz. useRef hook bir react elementi yakalamızı onu referansına erişmemiz sağlayan bir yöntem;

  // jquerydeki document ready gibi sayfa ilk açıldığında apiden veri çekebilmemizi sağlayan hook useEffect hook diyoruz.
  // useEffect(() => {

  //   fetch('https://jsonplaceholder.typicode.com/todos')
  //   .then(response => {
  //     return response.json();
  //   }).then(data => {
  //     console.log('data', data);
  //     setTodos(data); // todos state data bilgisini jsx'e taşıdık.
  //   });

  // }, []);

  useEffect(async () => {

    // ECMAScript 7.0 verisyonu ile Promise yapısı then catch yapısı yerine async await yapısı gelid yukarıdaki kod ile tümüyşle aynı işi yapar.
    // show loading 

    let response = await fetch('https://jsonplaceholder.typicode.com/todos');
    let data = await response.json();
    setTodos(data);
    // spinnerRef.current ile elemente erişi sanki jquery yada js ile kodluyormuş gibi attribute ekleye çıkarabilir class verip kaldırabiliriz.
    spinnerRef.current.setAttribute("hidden","hidden") // gizle

   
    // hide loading

  }, [])


  return <Container>
    <Row className="justify-content-center">
    <Spinner ref={spinnerRef} animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    <ListGroup>
      {
        todos.map((item, key) => {
          return <ListGroup.Item key={key}>{item.title}</ListGroup.Item>
        })
      }
    </ListGroup>
    </Row>
  </Container>;
}

export default TodosPage;
