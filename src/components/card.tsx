import Figure from 'react-bootstrap/Figure';

type Props = {
    image?: string;
    title: string;
    description?: string;
    link: string;
    linkText?: string;
}

export function Card(props: Props){
    return (
        <div className="card">
            <div className="img">
                <Figure>
                    <Figure.Image
                        width={200}
                        height={90}
                        alt="200x90"
                        src="holder.js/200x90"
                    />
                </Figure>
            </div>
            <div className="text-holder">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <a href={props.link}>{props.linkText}</a>
            </div>
        </div>
    );
}

Card.defaultProps = {
    linkText: 'more'
}
