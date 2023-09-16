import { BookList } from "./components/BookList";
import { WithLogging } from "./components/WithLogging";
import ThemeSwitcher from "./components/ThemeSwitcher";
function App() {
  const BookListWithLogging = WithLogging(BookList);
  return (
    <div className={`App`}>
      <ThemeSwitcher />
      <BookListWithLogging />
    </div>
  );
}

export default App;
