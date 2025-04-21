import React from 'react'

const Header = () => {
  return (
    <>
        <div className="col-md-12">
            <div className="shop-sort">
                <div className="shop-sort-box">
                    <div className="shop-sorty-label">Sort By:</div>
                    <select className="select">
                        <option value="{1}">Default Sorting</option>
                        <option value="{5}">Latest Items</option>
                        <option value="{2}">Best Seller Items</option>
                        <option value="{3}">Price - Low To High</option>
                        <option value="{4}">Price - High To Low</option>
                    </select>
                    <div className="shop-sort-show">Showing 1-10 of 50 Results</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header
