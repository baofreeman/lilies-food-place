import { useState } from 'react';

import MenuLeft from './MenuLeft';
import Header from '../../components/Header';
import Button from '../../components/Button';

function Sidebar() {
    const [navbar, setNavbar] = useState(false);
    const list = [
        { path: '/', display: 'Home' },
        { path: '/dashboard', display: 'DashBoard' },
        { path: '/dashboard/profile', display: 'Profile' },
        { path: '/dashboard/order', display: 'Order', module: '1' },
        { path: '/dashboard/add', display: 'Your Cart', module: '0' },
    ];

    return (
        <>
            <MenuLeft />
            <div className="hidden max-md:flex max-md:flex-col">
                <Header />
            </div>
            {navbar ? (
                <section className="w-full flex flex-col bg-regal-green-500 items-center justify-center z-10 absolute top-20 right-0 left-0">
                    {list.map((item, id) => {
                        return (
                            <div className="w-28 max-md:w-full my-2 text-center max-md:flex">
                                <Button
                                    key={id}
                                    onClick={() => setNavbar(!navbar)}
                                    size={'linkSmallRounded'}
                                    style={'linkPrimary'}
                                    to={item.path}
                                >
                                    {item.display}
                                </Button>
                            </div>
                        );
                    })}
                </section>
            ) : null}
        </>
    );
}

export default Sidebar;