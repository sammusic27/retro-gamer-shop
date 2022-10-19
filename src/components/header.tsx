type Props = {
    title?: string;
}

export function Header(props: Props){
    return (
        <header id="header">
            <h1>{props.title}</h1>
        </header>
    );
}

Header.defaultProps = {
    title: 'Retro Gamer'
};