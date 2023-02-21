import { useEffect, useState } from 'react';
import Product from './Product';

import { products } from '../../data';

function Content() {
    const [data, setData] = useState([]);
    console.log(data);
    useEffect(() => {
        const getProducts = products.map((product) => product);
        setData(getProducts);
    }, []);
    return (
        <div className="grid w-full bg-white px-5 py-5 max-md:my-3 h-screen">
            <div className="grid overflow-y-scroll overflow-x-hidden">
                <Product data={data} />
            </div>
        </div>
    );
}

export default Content;
