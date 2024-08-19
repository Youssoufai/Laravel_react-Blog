import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
    const { user } = useContext()
    return (
        <>
            <header>
                <nav>
                    <Link to="/" className="nav-link">Home</Link>
                    {user ? (
                        <div>
                            {user.name}
                        </div>
                    ) : (
                        <div className="space-x-4">
                            <Link to="/register" className="nav-link">Register</Link>
                            <Link to="/login" className="nav-link">Login</Link>
                        </div>
                    )

                    }

                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
