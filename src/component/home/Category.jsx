import React from 'react'
import Slider from "react-slick";

const Category = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768, // screen width below 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };
    

    const categories = [
        {
            name: "Medicine",
            items: "30",
            image: "public/assets/img/icon/medicine.svg"
        },
        {
            name: "Healthcare",
            items: "25",
            image: "public/assets/img/icon/health-care.svg"
        },
        {
            name: "Beauty Care",
            items: "15",
            image: "public/assets/img/icon/beauty-care.svg"
        },
        {
            name: "Sexual Wellness",
            items: "05",
            image: "public/assets/img/icon/sexual.svg"
        }, {
            name: "Fitness",
            items: "15",
            image: "public/assets/img/icon/fitness.svg"
        }, {
            name: "Lab Test",
            items: "12",
            image: "public/assets/img/icon/lab-test.svg"
        }, {
            name: "Baby & Mom Care",
            items: "08",
            image: "assets/img/icon/baby-mom-care.svg"
        }, {
            name: "Supplement",
            items: "14",
            image: "public/assets/img/icon/supplements.svg"
        },{
            name: "Food & Nutrition",
            items: "19",
            image: "public/assets/img/icon/food-nutrition.svg"
        },{
            name: "Equipments",
            items: "05",
            image: "public/assets/img/icon/medical-equipements.svg"
        },{
            name: "Medical Supplies",
            items: "14",
            image: "public/assets/img/icon/medical-supplies.svg"
        },{
            name: "Pet Care",
            items: "16",
            image: "public/assets/img/icon/pet-care.svg"
        },
    ];
    
    
  return (
    <div className="category-area pt-80 pb-100">
        <div className="container">
            <div className="row">
                <div className="col-12 wow fadeInDown" data-wow-delay=".25s">
                    <div className="site-heading-inline">
                        <h2 className="site-title">Top Category</h2>
                        <a href="#"> View More <i className="fas fa-angle-double-right" /> </a>
                    </div>
                </div>
            </div>
            <div >
                
                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <div className="" key={index}>
                            <a href="#">
                                <div className="category-info">
                                    <div className="icon">
                                        <img src={category.image} alt={category.name} />
                                    </div>
                                    <div className="content">
                                        <h4>{category.name}</h4>
                                        <p>{category.items} Items</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    </div>


  )
}

export default Category
