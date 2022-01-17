import React from 'react';
import './styles.scss';

export default function ArticleList() {
    return (
        <div className="list--article--main--container col-12 d-flex flex-column justify-content-center">
            <div className="list--article--under--navbar--picture "/>
            <div className="list--article--header d-flex justify-content-center align-items-center justify-content-md-between">
                <div className="list--article--h1 col-sm-7 col-md-5 col-lg-8">
                    <h1 className="text-left">Liste des articles</h1>
                </div>
                <div className="list--article--top--menu--right col-md-5">
                    <div className="filters filters--category">
                        <a className="filters__choice" href="<?= $router->generate('article-categories') ?>">Voir les catégories</a>
                    </div>
                </div>
            </div>
            <div className="list--article--under--picture d-flex justify-content-center col-sm-12 p-0 mt-3 col-lg-10">
                <table className="table d-flex flex-column justify-content-center col-12 p-0">
                    <tbody className="col-12 p-0">
                        <?php foreach ($titleList as $title) : ?>
                            <tr className="list--article--unity d-flex justify-content-center col-12 p-0 flex-row">
                                <td className="list--article--column--category d-none d-lg-flex justify-content-start col-1"> <span className="badge categoryBadge"><?= $title->getCategory()->getName() ?></span></td>
                                <td className="list--article--column--title d-flex justify-content-start align-items-center col-11 col-md-8 ">
                                    <a className="list--article--a" href="<?= $router->generate('articleById', ['id' => $title->getNumber()]) ?>">
                                        <h2 className="list--article--column--title--main"><?= $title->getTitle() ?></h2>
                                    </a>
                                </td>
                                <td className="list--article--column--date d-none d-md-flex col-md-2 justify-content-end ">
                                    <p><?= $title->getCreatedAt("d-m-Y") ?></p>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
