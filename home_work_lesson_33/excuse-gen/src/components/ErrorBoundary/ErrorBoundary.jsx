import React, {Component} from "react";
import '../ErrorBoundary/errorBoundary.scss';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            hasError: false,
            error: null,
        };
    };

    static getDerivedStateFromError(error) {
        return { hasError: true, error};
    };

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    };
    
    render() {
        if (this.state.hasError) {
            return (
                <div className="error-boundary">
                    <h2 className="error-title">Упс! Щось пішло не так.</h2>
                    <p className="error-msg">{this.state.error?.message || "Невідома помилка"}</p>
                    <button 
                        className="btn-secondary" 
                        onClick={() => window.location.reload()}
                    >
                        Спробувати знову
                    </button>
                </div>
            );
        }
        return this.props.children
    };
};

export default ErrorBoundary