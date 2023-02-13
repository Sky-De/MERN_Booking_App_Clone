import React from "react"
import { useContext } from 'react';
import { SearchContext } from '../../../context/SearchContext';
import useFetch from '../../../hooks/useFetch';
import HotelListItemSkeleton from '../../skeleton/HotelListItemSkeleton';
import SearchResultItem from './searchResultItem/SearchResultItem';
import './searchResultList.scss';

const SearchResultList = () => {
  const { destination } = useContext(SearchContext)
  const { data, error, loading } = useFetch(`/v1/hotels?city=${destination}`)
  console.log(data);
  console.log(error);
  return (
    <ul className='resultList'>
      {loading && <HotelListItemSkeleton/>}
      {
        data.map((item) => <SearchResultItem key={item._id} {...item}/>)
      }
    </ul>
  )
}

export default SearchResultList