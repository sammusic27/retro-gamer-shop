import { Header } from './components/header';
import { Footer } from './components/footer';

import { Card } from './components/card';

export function App(){

    const cards = [
        {
            title: 'Dendy',
            description: 'My first game station',
            link: '/dendy',
        },
        {
            title: 'Sega Mega Drive',
            description: 'My second game station',
            link: '/sega-mega-drive',
        },
    ]

    const cardsComponents = cards.map((card, index) => 
        <Card key={index} title={card.title} description={card.description} link={card.link} />
    );


    return (
        <div id="wrapper">
            <Header />
            <section id="main">
                <div className="card-holder">
                    {cardsComponents}
                </div>
            </section>
            <Footer />
        </div>
    );
}