import React from 'react';
import { HeaderArea } from './styled';
const Header = () => {

    return (
        <HeaderArea>
            <div className="container">
                <div className="logo">

                    <Link to="/">
                        <span className="logo-1">49-</span>
                        <span className="logo-2">T</span>
                        <span className="logo-3">B</span>
                        <span className="logo-4">D</span>
                    </Link>

                </div>
            </div>
        </HeaderArea>
    );
}

export default Header;