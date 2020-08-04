import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars1.githubusercontent.com/u/62626810?s=400&u=7d400612422094801d510fc7f59d454491b57d11&v=4"
                    alt="Kewin Costa"
                />
                <div>
                    <strong>Kewin Costa</strong>
                    <span>Desenvolvimento Web</span>
                </div>
            </header>

            <p>
                Visual Studio Code (VS Code) was released in 2015 by Microsoft. Since then, it has ...
                        <br /><br />
                        Visual Studio Code (VS Code) was released in 2015 by Microsoft. Since then, it has ... Lorem ipsum resembles Latin but has no real meaning.
                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato.
                        </button>
            </footer>
        </article>
    )
}

export default TeacherItem;