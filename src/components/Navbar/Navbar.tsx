import Image from 'next/image';
import logo from "@/assets/images/logo.jpg";
import { Button } from '../ui/button';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='sticky top-0 z-50 w-full bg-white shadow-sm'>
            <div className='mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 lg:px-4'>
                <Link href="/">
                    <figure>
                        <Image src={logo} height={40} width={100} alt='Logo' />
                    </figure>
                </Link>
                <div>
                    <Button variant="outline">Exit</Button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;