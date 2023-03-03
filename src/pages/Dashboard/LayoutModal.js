import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function LayoutModal({ children }) {
    return (
        <section className="w-full h-screen fixed sm:block">
            <motion.div
                initial={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                className="w-1/3 md:w-1/2 bg-white right-0 top-0 absolute h-screen z-10 px-4 py-5 sm:w-full"
            >
                <div className="flex h-full w-full">
                    <div className="flex w-full h-[80%] sm:h-[70%] sm:justify-around justify-center flex-col gap-6 md:gap-5 max-sm:gap-2">
                        {children}
                    </div>
                </div>
            </motion.div>
            <div className="w-2/3 md:w-1/2 h-screen bg-black opacity-50">
                <Link to={'/dashboard'} className={'w-full h-screen block'}></Link>
            </div>
        </section>
    );
}

export default LayoutModal;
