import React from 'react';
import './styles.scss';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer--empty " />
            <div className="footer--legal d-flex justify-content-center align-items-center ">
                <ul className="footer--li d-flex flex-column flex-md-row pt-3">
                    <li className="footer--legalmentions footer--li mr-3">
                        <a className="footer--nav-link  " href="=">
                            Mentions légales
                        </a>
                    </li>
                    <li className="footer--confidentiality mr-3">
                        <a className="footer--nav-link  " href="=">
                            Politique de confidentialité
                        </a>
                    </li>
                    <li className="footer--apropos mr-3">
                        <a className="footer--nav-link  " href="<?= $router->generate('aPropos') ?>">
                            A propos
                        </a>
                    </li>
                    <li className="footer--informations">
                        <a className="footer--nav-link  " href="<?= $router->generate('contact') ?>">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
