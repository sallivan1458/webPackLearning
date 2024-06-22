import {Link, Outlet} from "react-router-dom";


export const App = () => {

    return (
        <div data-testid="App.DataTestId">
            <div>ADMIN MODULE</div>
            <Outlet/>
        </div>
    );
};

