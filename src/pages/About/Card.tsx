interface Properties {
    description: string;
    headline: string;
    name: string;
}

export default function Card({ description, name, headline }: Properties) {
    return (
        <div>
            <h4>{name}</h4>
            <p>{headline}</p>
            <div>
                <p>{description}</p>
            </div>
        </div>
    );
}
