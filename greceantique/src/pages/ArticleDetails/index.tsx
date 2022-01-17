import React from 'react';
import './styles.scss';

export default function ArticleDetails() {
    return (
        <div className="container main--container articlePage article col-12">
            <div className="article--under--navbar--picture col-12" />
            <div className="article--container col-12 col-md-10 col-lg-8">
                <div className="article--entete d-flex flex-column align-content-end">
                    <div className="article--above--title">
                        <div className="article--category"><a href="<?= $router->generate('articlesByCategory', ['id' => $articleDetails->getCategory_Id()]) ?>" className="badge categoryBadge"><?= $articleDetails->getCategory()->getName() ?></a></div>
                        <h1 className="article--main--title"><?= $articleDetails->getTitle() ?></h1>
                    </div>
                    <div className="article--under--title d-flex flex-column flex-md-row align-content-center">
                        <p className="article--createdAt align-self-start">Publié le : <?= $articleDetails->getCreatedAt("d-m-Y") ?></p>
                        <p className="article--author align-self-start ml-md-2">par <?= $articleDetails->getAuthor()->getFirstname() ?></p>
                    </div>
                </div>
                <div className="article--main">
                    <tr>
                        <td className="article--content"><?= $articleDetails->getContent() ?></td>
                    </tr>
                </div>
            </div>
        </div>
    )
}
