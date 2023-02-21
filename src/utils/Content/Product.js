import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/Button';
import { addCart } from '../../redux/actions';

function Product({ data }) {
    console.log(data);
    const getData = useSelector((state) => state.cartReducer.carts);
    const dispatch = useDispatch();
    const handleAddCart = (product) => {
        dispatch(addCart(product));
    };
    console.log(getData);
    return (
        <div className="w-full h-screen max-md:mt-16">
            <div className="grid grid-cols-3 gap-2 max-lg:grid-cols-2" to={'/dashboard/product'}>
                {data.map((product) => (
                    <section
                        key={product.id}
                        className={
                            'bg-regal-white-400 hover:bg-regal-white-200 hover:cursor-pointer rounded flex flex-col'
                        }
                    >
                        <Link to={`product/${product.id}`}>
                            <div
                                className={
                                    'text-center flex items-center flex-col px-10 py-5 max-lg:px-5 max-md:px-1 max-md:py-2 '
                                }
                            >
                                <img src={product.img} width={80} height={80} className={'rounded-full'} />
                                <div className="w-full">
                                    <h2 className="wrap_1 mt-3 text-base font-bold max-md:text-sm">{product.name}</h2>
                                    <h4 className="wrap mt-3 text-sm font-thin px-8 text-left max-md:text-xs max-md:px-2">
                                        {product.des}
                                    </h4>
                                </div>
                            </div>
                        </Link>
                        <div className="mt-1 flex justify-between items-center w-full px-10 pb-5 max-lg:px-5 max-md:px-1 max-md:flex-col">
                            <span className="text-base font-semibold max-md:mb-2">{product.price}</span>
                            <div className="w-full pl-12 max-md:pl-0">
                                <Button
                                    size={'buttonSmall'}
                                    style={'buttonPrimary'}
                                    onClick={() => handleAddCart(product)}
                                >
                                    Add to cart
                                </Button>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

export default Product;
