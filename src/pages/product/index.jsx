import React, { useState } from 'react'
import Filters from '../../component/product/Filters'
import Header from '../../component/product/Header'
import Products from '../../component/product/Products'
import Pagination from '../../component/product/Pagination'

const index = () => {

    const [search,setSearch] = useState('');

    const handleSearchInput = (input) => {
        setSearch(input);
    }

  return (
    <>
        <main className="main">
            <div className="shop-area bg py-90">
                <div className="container">
                    <div className="row">
                        <Filters onSearchChange={handleSearchInput}/>
                        <div className="col-lg-9">
                            <Header />
                            <Products search={search}/>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </main>

    </>
  )
}

export default index
