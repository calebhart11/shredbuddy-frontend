import { Link, useLoaderData, Form } from "react-router-dom";
import SessionCard from "../components/SessionCard";
import Session from "../components/Session"

const Show = (props) => {
   const session = useLoaderData()
    return (
        <>
        <h1>{session.mountain}</h1>
        <h2>{session.date}</h2>
        <p>{session.goals}</p>
        </>
    )
}
// {session.findById((session,idx) => <SessionCard key={idx} session={session}/>)}

export default Show