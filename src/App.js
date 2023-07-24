import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Wrapper from "./components/Wrapper";

function App() {

    return (
        <BrowserRouter>
            <Wrapper>
                <AppRouter />
            </Wrapper>
        </BrowserRouter>
    );
}

export default App;
