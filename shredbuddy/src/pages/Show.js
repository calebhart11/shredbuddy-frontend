import { Link, useLoaderData, Form } from "react-router-dom";
import SessionCard from "../components/SessionCard";
import Session from "../components/Session"
import Index from "./Index";

export default function Show(props) {
    // const{session} = props
    // const {mountain, date, goals} = session
    const session = useLoaderData()
    return (<>
            
        <div className="show">
            <SessionCard key={Index} session={session}>
            <h1>{session.mountain}</h1>
            <h2>{session.date}</h2>
            <p>{session.goals}</p>
            </SessionCard>
        </div>
        </>
    )
}
// {session.findById((session,idx) => <SessionCard key={idx} session={session}/>)}

