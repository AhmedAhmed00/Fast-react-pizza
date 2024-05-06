import { Link } from "react-router-dom";

export default function LinkButton({ children, to }) {
    return (
        <Link to={to} className='bg-blue-500 text-sm text-white p-2 rounded-lg
          hover:bg-blue-700 transition'>{children}</Link>

    )
}
