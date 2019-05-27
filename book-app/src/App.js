import React  from 'react';
import Header from "./components/header/header"
import Footer from './components/footer/footer';
import NotFound from "./components/pages/page-not-found"
import BookDetails from "./components/pages/book-details"
import BookSection from "./components/pages/book-section"




function App () {
  
  
  return (
    <div >
  <Header/>
  <BookSection/>
  <Footer/>
  <NotFound/>
  <BookDetails/>
      
    </div>
  );
}

export default App;
