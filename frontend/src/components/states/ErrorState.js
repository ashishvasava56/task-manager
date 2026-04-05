function ErrorState() {
    return (
        <div className="error-container">
            <div className="error-icon-wrapper">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <path d="M40 8L4 72h72L40 8z" fill="#f59e0b"/>
                    <path d="M40 8L4 72h72L40 8z" stroke="#d97706" strokeWidth="2" fill="none"/>
                    <rect x="37" y="30" width="6" height="22" rx="3" fill="white"/>
                    <circle cx="40" cy="60" r="3.5" fill="white"/>
                </svg>
            </div>
            <h2 className="error-title">Something went wrong</h2>
            <p className="error-desc">Please try again later</p>
        </div>
    );
}

export default ErrorState;