function Loader() {
    return (
        <div className="loading-card">
            <div className="loading-header">Loading...</div>
            <div className="loading-body">
                <div className="skeleton-bar">
                    <div className="skeleton-line dark" style={{width: '75%'}}></div>
                    <div className="skeleton-line light" style={{width: '55%'}}></div>
                </div>
                <div className="skeleton-bar">
                    <div className="skeleton-line dark" style={{width: '85%'}}></div>
                    <div className="skeleton-line light" style={{width: '60%'}}></div>
                </div>
            </div>
        </div>
    );
}

export default Loader;