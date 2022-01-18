import React from 'react';
import './styles.scss';

export default function ArticlesByCategory() {
    return (
        <div className="articlesByCategory--main col-12 p-0">
            <h1 className="articlesByCategory--main--title">Liste par catégorie</h1>
            <div className="articlesByCategory--list p-0">
                <table className="articlesByCategory--table table d-flex p-0 flex-column justify-content-center align-items-center col-12">
                    <tbody className="articlesByCategory--tbody col-12 p-0">
                        <?php foreach ($articlesByCategory as $articleByCategory) : ?>
                            <tr className="articlesByCategory--unity d-flex justify-content-center col-12 p-0">   
                                <td className="articlesByCategory--column--category d-md-flex justify-content-start col-2"> <span className="badge articlesByCategory--categoryBadge"><?= $articleByCategory->getCategory()->getName() ?></span></td>
                                <td className="articlesByCategory--column--title d-flex justify-content-start align-items-center col-10 col-md-8">
                                    <a className="list--article--a" href="<?= $router->generate('articleById', ['id' => $articleByCategory->getNumber()]) ?>">
                                        <h2><?= $articleByCategory->getTitle() ?></h2>
                                    </a>
                                </td >  
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
