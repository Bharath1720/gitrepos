import './index.css'

// const data = [

// avatar_url: "https://avatars.githubusercontent.com/u/9892522?v=4"
// forks_count: 28503
// id: 28457823
// issues_count: 148
// name: "freeCodeCamp"
// stars_count: 344409

// ]

const RepositoryItem = props => {
  const {item} = props
  const {avatarUrl, id, forksCount, issuesCount, name, starsCount} = item
  return (
    <li className="item-li">
      <div className="avatar-container">
        <img className="avatar_image" src={avatarUrl} alt={id} />
      </div>
      <p className="title">{name}</p>
      <div className="section">
        <img
          className="logo"
          src=" https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
        />
        <span>{`${starsCount} stars`}</span>
      </div>

      <div className="section">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
        />
        <span>{`${forksCount} forks`}</span>
      </div>

      <div className="section">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="issues"
        />

        <span>{`${issuesCount} open issues`}</span>
      </div>
    </li>
  )
}

export default RepositoryItem
