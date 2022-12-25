import './index.css'

const PasswordItem = props => {
  const {PasswordDetails, deletedPassword, showPassword} = props
  const {
    websiteName,
    username,
    password,
    id,
    randomBackgroundColor,
  } = PasswordDetails

  const callDeletePassword = () => {
    deletedPassword(id)
  }

  return (
    <li className="password-Item">
      <div className="password-text-container">
        <div className="first-letter-container">
          <p className={`first-letter ${randomBackgroundColor}`}>
            {websiteName.slice(0, 1)}
          </p>
        </div>
        <div className="password-details-container">
          <p className="website-name password-text">{websiteName}</p>
          <p className="userName password-text">{username}</p>
          {showPassword ? (
            <p className="password password-text">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              className="stars"
              alt="stars"
            />
          )}
        </div>
      </div>
      <button
        className="delete-btn"
        type="button"
        onClick={callDeletePassword}
        /* testid="delete" */
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt=" delete"
          className="delete-img"
        />
      </button>
    </li>
  )
}

export default PasswordItem
