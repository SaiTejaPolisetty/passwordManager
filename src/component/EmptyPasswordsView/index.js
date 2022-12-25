import './index.css'

const EmptyPasswordsView = () => (
  <div className="no-passwords-img-container">
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
      className="no-passwords-img"
      alt="no passwords"
    />
    <p className="no-pass">No Passwords</p>
  </div>
)

export default EmptyPasswordsView
