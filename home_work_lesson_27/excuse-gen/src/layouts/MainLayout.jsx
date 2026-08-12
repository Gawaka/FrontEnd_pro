import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

function MainLayout() {
    return(
        <div className="app-container">
            <Header/>
            <ErrorBoundary>
                <main className="main-content">
                    <Outlet/>
                </main>
            </ErrorBoundary>
        </div>
    )
};

export default MainLayout