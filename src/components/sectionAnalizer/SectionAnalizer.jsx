import React from "react";
import "./_sectionAnalizer.scss"

class SectionAnalizer extends React.Component {
    render() {
        return (
            <section className="section-analizer">
                <div className="container">
                    <div className="section-analizer__wrapper">
                        <h1 className="title">Analizer</h1>
                        <p className="subtitle">Task Failure Rate</p>
                        <ul className="list-items">
                            <li className="list-items__item">
                                <img src="./img/30.png" alt="analizer_img" />
                                <p className="text">30% Make Offer</p>
                            </li>
                            <li className="list-items__item">
                                <img src="./img/28.png" alt="analizer_img" />
                                <p className="text">28% Bid</p>
                            </li>
                            <li className="list-items__item">
                                <img src="./img/4.png" alt="analizer_img" />
                                <p className="text">4% Invite for First Call</p>
                            </li>
                            <li className="list-items__item">
                                <img src="./img/4.png" alt="analizer_img" />
                                <p className="text">4% Invite for First Call</p>
                            </li>
                            <li className="list-items__item">
                                <img src="./img/4.png" alt="analizer_img" />
                                <p className="text">4% Invite for First Call</p>
                            </li>
                            <li className="list-items__item">
                                <img src="./img/4.png" alt="analizer_img" />
                                <p className="text">4% Invite for First Call</p>
                            </li>
                            <li className="list-items__item">
                                <img src="./img/4.png" alt="analizer_img" />
                                <p className="text">4% Invite for First Call</p>
                            </li><li className="list-items__item">
                                <img src="./img/4.png" alt="analizer_img" />
                                <p className="text">4% Invite for First Call</p>
                            </li>
                            <li className="list-items__item">
                                <img src="./img/4.png" alt="analizer_img" />
                                <p className="text">4% Invite for First Call</p>
                            </li>
                            <li className="list-items__item">
                                <img src="./img/4.png" alt="analizer_img" />
                                <p className="text">4% Invite for First Call</p>
                            </li>
                            <li className="list-items__item">
                                <img src="./img/4.png" alt="analizer_img" />
                                <p className="text">4% Invite for First Call</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        )
    }
}

export { SectionAnalizer };