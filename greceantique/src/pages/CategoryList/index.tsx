import React from 'react';
import './styles.scss';

export default function CategoryList() {
    return (
        <div className="container category--list--main--container col-12 p-0">
            <div className="right  category--list--right col-12 d-flex flex-row align-items-between">
                <div className="divTitle col-12 col-md-11 col-lg-5 ">
                    <h1 className="category--list--main--title ">
                        Liste des categories
                    </h1>
                    <div className="category--list-container d-flex flex-column">
                        <?php foreach ($categories as $category) : ?>
                            <?php $categories ?>
                            <a href="<?= $router->generate('articlesByCategory', ['id' => $category->getId()]) ?>" className=" btn d-flex col-10">
                                <div className="category--list--unity d-flex flex-row justify-content-between align-items-center">
                                    <div className="category--list--h2">
                                        <h2 className="category--list--name"><?= $category->getName() ?></h2>
                                    </div>
                                    <div className="category--list--arrow d-sm-none d-md-flex justify-content-center align-items-center">
                                        <i className="fas fa-chevron-right category--list--arrow--i"></i>
                                    </div>
                                </div>
                            </a>
                        <?php endforeach; ?>
                    </div>
                </div>
                <div className="vide p-0 col-md-1 col-lg-7"></div>
            </div>
        </div>
    )
}
