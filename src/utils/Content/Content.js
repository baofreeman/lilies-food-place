import React, { lazy, Suspense, useEffect, useState } from 'react';
import Loader from '../../components/Loader';
import { useSelector } from 'react-redux';

// import Product from './Product';

const Product = lazy(() => import('./Product'));

function Content({ data }) {
    const [productList, setProductList] = useState();
    const [field, setFiels] = useState(false);
    const getQty = useSelector((state) => state.cartReducer.totalQty);
    const getData = useSelector((state) => state.cartReducer.carts);

    useEffect(() => {
        if (data) {
            setFiels(true);
            setProductList(data);
            console.log(data);
        }
    }, [data]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(getData));
        localStorage.setItem('qty', JSON.stringify(getQty));
    }, [getQty]);

    console.log(productList);

    const handleChange = (e) => {
        if (e.target.value === 'burgers') {
            const filterProducts = data.filter((product) => product.category === 'burgers');
            setProductList(filterProducts);
        }
        if (e.target.value === 'drinks') {
            const filterProducts = data.filter((product) => product.category === 'drinks');
            setProductList(filterProducts);
        }
        if (e.target.value === 'bowls') {
            const filterProducts = data.filter((product) => product.category === 'bowls');
            setProductList(filterProducts);
        }
        if (e.target.value === 'desserts') {
            const filterProducts = data.filter((product) => product.category === 'desserts');
            setProductList(filterProducts);
        }
        if (e.target.value === 'salads') {
            const filterProducts = data.filter((product) => product.category === 'salads');
            setProductList(filterProducts);
        }
        if (e.target.value === 'kidsMenu') {
            const filterProducts = data.filter((product) => product.category === 'kidsMenu');
            setProductList(filterProducts);
        }
        if (e.target.value === 'family') {
            const filterProducts = data.filter((product) => product.category === 'family');
            setProductList(filterProducts);
        }
        if (e.target.value === 'select') {
            setProductList(data);
        }
    };

    return (
        <div className="grid w-full bg-white px-5 py-5 h-screen">
            <div className="grid overflow-y-scroll overflow-x-hidden gap-4">
                <select
                    className="w-[20%] max-lg:w-[40%] max-md:w-full outline-none text-sm max-md:text-xs p-2 rounded-md cursor-pointer text-black border border-regal-yellow"
                    onChange={handleChange}
                >
                    <option value="select" className="text-sm max-md:text-xs text-black">
                        Filter By Category
                    </option>
                    <option value="burgers" className="text-sm max-md:text-xs text-black">
                        Burgers
                    </option>
                    <option value="salads" className="text-sm max-md:text-xs text-black">
                        Salads
                    </option>
                    <option value="desserts" className="text-sm max-md:text-xs text-black">
                        Desserts
                    </option>
                    <option value="bowls" className="text-sm max-md:text-xs text-black">
                        Bowls
                    </option>
                    <option value="kidsMenu" className="text-sm max-md:text-xs text-black">
                        Kids Menu
                    </option>
                    <option value="family" className="text-sm max-md:text-xs text-black">
                        Family
                    </option>
                </select>
                {field && productList.length ? (
                    <Suspense fallback={<Loader />}>
                        <Product data={productList} />
                    </Suspense>
                ) : (
                    <Loader />
                )}
            </div>
        </div>
    );
}

export default Content;
