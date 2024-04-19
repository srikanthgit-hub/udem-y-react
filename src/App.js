import Navbar  from "./components/Navbar"
import Category from "./components/Category"
import Saleimage from "./components/Saleimage"
import Recommended from "./components/Recommended"
import Topic from "./components/Topic"
import Popular from "./components/Popular"
import Footer from "./components/Footer"

function App()
 {
    return (
        <div>
            <Navbar></Navbar>
            <Category></Category>
            <Saleimage></Saleimage>
            <Recommended></Recommended>
            <Topic></Topic>
            <Popular></Popular>
            <Footer></Footer>
        </div>
    )

}

export default App