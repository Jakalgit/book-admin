import {CREATE_BOOK_ROUTE, PANEL_ROUTE, SIGNIN_ROUTE} from "./utils/consts";
import SignIn from "./pages/signin";
import Panel from "./pages/panel";
import CreateBook from "./pages/create-book";

export const routes = [
    {
        path: SIGNIN_ROUTE,
        Component: SignIn
    },
    {
        path: PANEL_ROUTE,
        Component: Panel
    },
    {
        path: CREATE_BOOK_ROUTE,
        Component: CreateBook,
    }
]