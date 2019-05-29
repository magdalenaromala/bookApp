import React, { Component } from "react";
import Header from "../header/header";
import Footer from "../footer/footer";
import BookSection from "../books-section/book-section";
import axios from "axios"

class BookSectionPage extends Component {
  constructor(props){
    super(props);
    this.state={
      books:[],
      isLoading:true
    }
  }

  componentDidMount(){
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.props.categoryName + "&key=AIzaSyBXi7_S9aeCMk-IoIHQPuZDeVdL-_XrNyw")
    .then((response) => {
        this.setState({
            books: response.data.items,
            isLoading: false,
        })
    })
}
componentDidUpdate(previousProps){
    if(previousProps.categoryName !== this.props.categoryName){
        this.setState({
            isLoading:true,
        })
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.props.categoryName + "&key=AIzaSyBXi7_S9aeCMk-IoIHQPuZDeVdL-_XrNyw")
        .then((response) => {
            this.setState({
                books: response.data.items,
                isLoading: false,
            })
        })
    }
}
  render() {
   
      
      return (
        <div className="has-fixed-footer">
          <Header />
          {this.state.isLoading?
          <p>Is loading..</p> :
          <BookSection title={this.props.categoryName} books={this.state.books} />}
          <Footer />
        </div>
      );

    }
  
  }


BookSectionPage.defaultProps = {
  categoryName: "All"
};

export default BookSectionPage;
