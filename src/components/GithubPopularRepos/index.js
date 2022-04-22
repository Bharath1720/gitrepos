// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import LanguageFilterItem from '../LanguageFilterItem'
import './index.css'
import RepositoryItem from '../RepositoryItem'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    reposData: [],
    isLoading: false,
    activeId: languageFiltersData[0].id,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    this.setState({
      isLoading: true,
    })
    const {activeId} = this.state
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(url)
    const data = await response.json()
    const updatedData = data.popular_repos.map(eachData => ({
      avatarUrl: eachData.avatar_url,
      forksCount: eachData.forks_count,
      id: eachData.id,
      issuesCount: eachData.issues_count,
      name: eachData.name,
      starsCount: eachData.stars_count,
    }))
    console.log(updatedData)
    this.setState({
      reposData: updatedData,
      isLoading: false,
    })
  }

  parentSendData = language => {
    // console.log(`${language} clicked`)
    this.setState(
      {
        activeId: language,
      },
      this.getData,
    )
  }

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading, reposData} = this.state
    return (
      <ul className="main-container">
        <h1 className="main-heading">Popular</h1>
        <ul className="header-ul">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              key={each.id}
              header={each}
              parentSendData={this.parentSendData}
            />
          ))}
        </ul>
        {isLoading ? (
          this.renderLoader()
        ) : (
          <ul className="item-ul">
            {reposData.map(eachRepo => (
              <RepositoryItem key={eachRepo.id} item={eachRepo} />
            ))}
          </ul>
        )}
      </ul>
    )
  }
}

export default GithubPopularRepos
