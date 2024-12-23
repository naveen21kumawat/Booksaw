// import React from 'react';
import { useLocation } from 'react-router-dom';

import st from './BookDetailsPage.module.css'
const BookDetailsPage = () => {
  const location = useLocation();

  // Parse query parameters
  const params = new URLSearchParams(location.search);
  const title = params.get('title');
  const description = params.get('description');

  return (
    <div>
      <div className={st.bookDetailsMin}>
       <h2 className={st.slogan}>Welcome To BookSaw </h2>
       <h3 className={st.slogan}>Feel Free To Read </h3>
      </div>
      <h1 className={st.title}>{title}</h1>
      
        <p className={st.bookdescription}>{description}</p>
        
    </div>
  );
};

export default BookDetailsPage;