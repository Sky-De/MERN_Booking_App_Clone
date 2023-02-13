
import SearchForm from "../../components/search/searchForm/SearchForm";
import SearchResultList from "../../components/search/searchResultList/SearchResultList";
import "./searchPage.scss";

const List = () => {
  return (
    <main className="searchPageMain">
    <SearchForm/>
    <SearchResultList/>
    </main>
  )
}

export default List