export const Header = () => {
    return (
        <>
           <header className = "fixed top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg z-50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center">
                    <div className="flex items-center gap-4 rounded-2xl">
                        <img 
                        src="/src/assets/Logo.png"
                        alt="WorkNest Logo"
                        className="h-12 w-12 mr-2 rounded-lg" />
                    </div>
                    <div>
                    <h1 className="text-3xl font-bold text-white">WorkNest</h1>
                      <p className="text-sm mt-1 text-blue-100">Employee Management System</p>
                    </div>
                </div>
            </div>
              
           </header>
        </>
    )
} 