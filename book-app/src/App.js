import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NotFound from "./components/pages/page-not-found";
import BookDetailPage from "./components/pages/book-detail-page";
import BookSectionPage from "./components/pages/book-section-page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={BookSectionPage} />
        <Route
          path="/book/category/:categoryName"
          exact
          render={props => {
            return <BookSectionPage categoryName={props.match.params.categoryName} />;
          }}
        />
        <Route path="/book/:book.id" component={BookDetailPage} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
