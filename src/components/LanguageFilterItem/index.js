import './index.css'

const LanguageFilterItem = props => {
  const {header, parentSendData} = props
  const {id, language} = header
  const ChildData = () => {
    parentSendData(id)
  }
  return (
    <ul>
      <li className="header-li">
        <button onClick={ChildData} className="btn" type="button">
          {language}
        </button>
      </li>
    </ul>
  )
}

export default LanguageFilterItem
