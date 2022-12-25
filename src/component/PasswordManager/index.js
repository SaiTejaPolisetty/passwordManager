import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import EmptyPasswordsView from '../EmptyPasswordsView'

import PasswordItem from '../PasswordItem'

import './index.css'

class PasswordManager extends Component {
  state = {
    showPassword: false,
    website: '',
    username: '',
    password: '',
    searchInput: '',
    passwordsList: [],
  }

  displayPasswordFunc = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  setWebsiteName = event => {
    this.setState({website: event.target.value})
  }

  setUserName = event => {
    this.setState({username: event.target.value})
  }

  setPassword = event => {
    this.setState({password: event.target.value})
  }

  deletedPassword = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(obj => obj.id !== id),
    }))
  }

  addPasswordDetails = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    if (website !== '' && username !== '' && password !== '') {
      const getBackgroundColor = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
      ]
      const randomChoice = Math.floor(Math.random() * getBackgroundColor.length)
      const randomBackgroundColor = getBackgroundColor[randomChoice]
      const newObj = {
        id: uuidv4(),
        websiteName: website,
        username,
        password,
        randomBackgroundColor,
      }

      this.setState(prevState => ({
        website: '',
        username: '',
        password: '',
        passwordsList: [...prevState.passwordsList, newObj],
      }))
    }
  }

  setSearchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      website,
      username,
      password,
      showPassword,
      passwordsList,
      searchInput,
    } = this.state

    const filteredPasswords = passwordsList.filter(obj => {
      const websiteName = obj.websiteName.toLowerCase()
      const lowerSearchValue = searchInput.toLowerCase()
      return websiteName.includes(lowerSearchValue)
    })

    const renderPassword = () => {
      const renderdPasswordItems = filteredPasswords.map(obj => (
        <PasswordItem
          PasswordDetails={obj}
          deletedPassword={this.deletedPassword}
          showPassword={showPassword}
          key={obj.id}
        />
      ))

      return renderdPasswordItems
    }

    return (
      <div className="bg-container">
        <div className="card">
          <img
            src="
https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="web-logo"
          />
          <div className="password-form-section">
            <div className="password-manager-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
                alt="password manager"
                className="password-manger-img"
              />
            </div>
            <div className="password-form-container">
              <form className="password-form">
                <h1 className="password-section-heading form-heading">
                  Add New Password
                </h1>
                <div className="input-box-container">
                  <div className="input-img-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                      alt="website"
                      className="input-logo"
                    />
                  </div>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Website"
                    value={website}
                    onChange={this.setWebsiteName}
                  />
                </div>
                <div className="input-box-container">
                  <div className="input-img-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                      alt="username"
                      className="input-logo"
                    />
                  </div>
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter Username"
                    value={username}
                    onChange={this.setUserName}
                  />
                </div>
                <div className="input-box-container">
                  <div className="input-img-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                      alt="password"
                      className="input-logo"
                    />
                  </div>
                  <input
                    type="password"
                    className="input"
                    placeholder="Enter Password"
                    value={password}
                    onChange={this.setPassword}
                  />
                </div>
                <button
                  className="add-btn"
                  type="submit"
                  onClick={this.addPasswordDetails}
                >
                  Add
                </button>
              </form>
            </div>
          </div>
          <div className="password-items-section">
            <div className="password-section-header">
              <div className="section-header-tex">
                <h1 className="password-section-heading">Your Passwords</h1>
                <p className="password-count">{passwordsList.length}</p>
              </div>
              <div className="password-search-container">
                <div className="input-img-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                    alt="search"
                    className="input-logo search-logo"
                  />
                </div>
                <input
                  type="search"
                  className="input search-input"
                  placeholder="Search"
                  onChange={this.setSearchValue}
                />
              </div>
            </div>
            <div className="show-password-container">
              <input
                type="checkbox"
                className="checkbox"
                onChange={this.displayPasswordFunc}
                id="checkbox"
              />
              <label className="checkbox-label" htmlFor="checkbox">
                Show passwords
              </label>
            </div>
            {filteredPasswords.length === 0 ? (
              <EmptyPasswordsView />
            ) : (
              <ul className="password-list-container">{renderPassword()}</ul>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
