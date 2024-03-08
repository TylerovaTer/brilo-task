
import { Footer } from '../footer';
import { Menu } from '../menu';

type PropTypes = {
    children: React.ReactNode;
}

export const MainLayout = ({ children }: PropTypes) => {
    return (
        <div>
            <Menu />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}