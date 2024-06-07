import { getAllCategories } from '@/lib/actions/category.actions'
import React from 'react'
import FilterClientComponent from './FilterClientComponent'

const FilterServerComponent = async() => {
  const allCategories = await getAllCategories()

  return (
    <>
        <FilterClientComponent allCategories={JSON.parse(JSON.stringify(allCategories))}/>
    </>
  )
}

export default FilterServerComponent