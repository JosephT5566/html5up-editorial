import React from 'react';

import Header from '../Header';
import Banner from '../Banner';

export default function Main() {
    return (
        <div id="main">
            <div className="inner">
                <Header />
                <Banner />
                <section>
                    <header className="major">
                        <h2>Erat lacinia</h2>
                    </header>
                    <div className="features">
                        <article>
                            <span className="icon fa-gem"></span>
                            <div className="content">
                                <h3>Portitor ullamcorper</h3>
                                <p>
                                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                                </p>
                            </div>
                        </article>
                        <article>
                            <span className="icon solid fa-paper-plane"></span>
                            <div className="content">
                                <h3>Sapien veroeros</h3>
                                <p>
                                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                                </p>
                            </div>
                        </article>
                        <article>
                            <span className="icon solid fa-rocket"></span>
                            <div className="content">
                                <h3>Quam lorem ipsum</h3>
                                <p>
                                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                                </p>
                            </div>
                        </article>
                        <article>
                            <span className="icon solid fa-signal"></span>
                            <div className="content">
                                <h3>Sed magna finibus</h3>
                                <p>
                                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                    facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                                </p>
                            </div>
                        </article>
                    </div>
                </section>

                <section>
                    <header className="major">
                        <h2>Ipsum sed dolor</h2>
                    </header>
                    <div className="posts">
                        <article>
                            <a href="#" className="image">
                                <img src="images/pic01.jpg" alt="" />
                            </a>
                            <h3>Interdum aenean</h3>
                            <p>
                                Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="#" className="button">
                                        More
                                    </a>
                                </li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image">
                                <img src="images/pic02.jpg" alt="" />
                            </a>
                            <h3>Nulla amet dolore</h3>
                            <p>
                                Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="#" className="button">
                                        More
                                    </a>
                                </li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image">
                                <img src="images/pic03.jpg" alt="" />
                            </a>
                            <h3>Tempus ullamcorper</h3>
                            <p>
                                Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="#" className="button">
                                        More
                                    </a>
                                </li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image">
                                <img src="images/pic04.jpg" alt="" />
                            </a>
                            <h3>Sed etiam facilis</h3>
                            <p>
                                Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="#" className="button">
                                        More
                                    </a>
                                </li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image">
                                <img src="images/pic05.jpg" alt="" />
                            </a>
                            <h3>Feugiat lorem aenean</h3>
                            <p>
                                Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="#" className="button">
                                        More
                                    </a>
                                </li>
                            </ul>
                        </article>
                        <article>
                            <a href="#" className="image">
                                <img src="images/pic06.jpg" alt="" />
                            </a>
                            <h3>Amet varius aliquam</h3>
                            <p>
                                Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam
                                facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.
                            </p>
                            <ul className="actions">
                                <li>
                                    <a href="#" className="button">
                                        More
                                    </a>
                                </li>
                            </ul>
                        </article>
                    </div>
                </section>
            </div>
        </div>
    );
}
