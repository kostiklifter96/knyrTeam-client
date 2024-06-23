import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { ProgramsPage } from "./components/ProgramsPage/ProgramsPage";
import { Footer } from "./layout/footer/Footer";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/main/Main";

function App() {
    return (
        <>
            <BrowserRouter basename='/knyrTeam-client'>
                <Header />
                <Routes>
                    <Route path='/' element={<Main />} />
                    <Route path='/programs/:id' element={<ProgramsPage />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
