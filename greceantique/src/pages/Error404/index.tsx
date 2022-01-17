import React from 'react';
import './styles.scss';

export default function error404() {
    return (
        <div className="error404--container">
            <div className="error-404--content">
                <h1>404 Not Found</h1>
                <p>Oups...la page demandée n'existe pas</p>
                <a href="<?= $router->generate('main-home') ?>">retour à l'accueil</a>
            </div>
        </div>
    )
}
