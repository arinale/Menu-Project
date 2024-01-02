import NavBar from "./components/NavBar";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import { Category } from "./components/Category";
import { ItemsList } from "./components/ItemsList";
import "./index.css";

function App() {
  return (
    <>
      <NavBar />
      <Container>
        <Header />
        <Category />
        <ItemsList />
      </Container>
    </>
  );
}
export default App;
