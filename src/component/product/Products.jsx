import React from 'react'
import ProductCard from '../ProductCard'
import { useQuery } from '@tanstack/react-query';
import { BASE_URL, API_URL } from '../../constants/contant';
import axios from 'axios';
import ProductCardShimmer from '../ProductCardShimmer';

const Products = ({search}) => {

    const { data, isLoading, isError } = useQuery({
        queryKey: ['shop-list'],
        queryFn: () => axios.get(`${BASE_URL}${API_URL.products}`).then(res => res.data.data)
    });

    const filteredData = data?.filter(item =>
        item.name?.toLowerCase().includes(search.toLowerCase())
    );    

    return (
        <div className="shop-item-wrap item-4">
            <div className="row g-4">
                {   
                    isLoading ? (
                        [...Array(6)].map((_, idx) => (
                            <div key={idx} className="col-md-6 col-lg-4">
                                <ProductCardShimmer />
                            </div>
                        ))
                    ) : isError ? (
                        <p>Product Not Found</p>
                    ) : (
                        filteredData && filteredData.length>0? (
                            filteredData.map((item, index) => (
                                <div key={index} className="col-md-6 col-lg-4">
                                    <ProductCard data={item} />
                                </div>
                            ))
                        ):(
                            <h1>No Product Found</h1>
                        )
                    )
                    
                }
            </div>
        </div>
    )
}

export default Products
