import { Link, useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { logout, reset } from "../features/auth/authSlice"
function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  const onLogOut = () => {
    dispatch(logout())
    dispatch(reset())
    navigate("/")
  }
  return (
    <header className="header">
      <div className="logo">
        <Link to={"/"}>GoalSetter</Link>
      </div>
      <ul>
        {user ? (
          <>
            <button className="btn" onClick={onLogOut}>
              logout
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/register"}>Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
