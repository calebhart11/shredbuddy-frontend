import { Link } from "react-router-dom";

const Session = (props) => {
    const session = props.session;

    return (
        <>
        <div className="session">
            <Link to={`/session/${session.id}`}>
                <h1>{session.mountain}</h1>
            </Link>
            <h2>{session.date}</h2>
            <p>{session.goals}</p>
        </div>
        </>
    )
}

export default Session;