import { BookList } from "./components/BookList";
import { WithLogging } from "./components/WithLogging";

function App() {
  const BookListWithLogging = WithLogging(BookList);
  return (
    <div className="App">
      <BookListWithLogging />
    </div>
  );
}

export default App;
