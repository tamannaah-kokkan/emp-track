export const Header = () => {
    return (
        <>
           <header className = "bg-gradient-to-r from-blue-800 to-purple-600 text-white text-lg shadow-lg shadow-gray-400 p-4 mb-4">
            <div className="max-w-7xl">
                <div className = "max-w-55 ">
                    <h1 className="text-3xl font-bold">EmployeeTrack</h1>
                <p style={{ fontSize: '12px'}} className="text-sm text-gray-300 font-extralight italic">Employee Management System</p>
                </div>
            </div>
              
           </header>
        </>
    )
}