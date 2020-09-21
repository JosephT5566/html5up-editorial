import React from 'react';
import { useNavigation } from 'react-navi';

export default function Menu() {
    const navigation = useNavigation();
    return (
        <nav id="menu">
            <header className="major">
                <h2>Menu</h2>
            </header>
            <ul>
                <li>
                    <a onClick={() => navigation.navigate('/')}>Homepage</a>
                </li>
                <li>
                    <a onClick={() => navigation.navigate('/generic')}>Generic</a>
                </li>
                <li>
                    <span className="opener">Submenu</span>
                    <ul>
                        <li>
                            <a href="#">Lorem Dolor</a>
                        </li>
                        <li>
                            <a href="#">Ipsum Adipiscing</a>
                        </li>
                        <li>
                            <a href="#">Tempus Magna</a>
                        </li>
                        <li>
                            <a href="#">Feugiat Veroeros</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
    );
}
