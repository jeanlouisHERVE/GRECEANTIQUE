import React from 'react';
import './styles.scss';

export default function Header() {
    return (
        <div className="nav-container">
            <nav className="navbar">
                <div className="navbar--title--container">
                    <img src="<?= $absoluteUrl ?>assets/img/achillecarre.jpg" alt="" width="50px" height="50px" className="d-inline-block align-text-top achille" /> 
                    <a href="<?= $router->generate('main-home') ?>"><h1 id="navbar-logo">GreceAntique.fr</h1></a>
                    <img src="<?= $absoluteUrl ?>assets/img/vieuxcarre.jpg" alt="" width="50px" height="50px" className="d-inline-block align-text-top vieux" />
                </div>
                <div className="menu-toggle" id="mobile-menu">  
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className="nav-menu">
                    <li><a href="<?= $router->generate('main-home') ?>" className="nav-links">Home</a></li>
                    <li><a href="<?= $router->generate('article-list') ?>" className="nav-links">Articles</a></li>
                    <li><a href="<?= $router->generate('article-categories') ?>" className="nav-links">Categories</a></li>
                    <li><a href="<?= $router->generate('contact') ?>" className="nav-links">Contact</a></li>
                    <li><a href="#" className="nav-links nav-links-btn">Connexion</a></li>
                </ul>
            </nav>
        </div>
    )
}
