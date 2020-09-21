import React from 'react';

export default function Search() {
    return (
        <section id="search" className="alt">
            <form method="post" action="#">
                <input type="text" name="query" id="query" placeholder="Search" />
            </form>
        </section>
    );
}
