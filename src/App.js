import { CarouselContainer } from "./container/carousel";
import { CategoriesContainer } from "./container/categories";
import { HeaderContainer } from "./container/header";

  require("./mocks");


function App() {
  return (
    <>
      <HeaderContainer />
      <CarouselContainer />
      <CategoriesContainer />
    </>
  );
}

export default App;
