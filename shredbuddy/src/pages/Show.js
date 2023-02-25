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
            <SessionCard key={Show} session={session}>
            <h1>{session.mountain}</h1>
            <h2>{session.date}</h2>
            <p>{session.goals}</p>
            </SessionCard>
            
        </div>
        <h2>Update this session</h2>
        <Form action={`/update/${session.id}`} method="post">
          <input
            type="text"
            name="date"
            placeholder="Date:"
            defaultValue={session.date}
          />
          <input
            type="text"
            name="mountain"
            placeholder="Mountain"
            defaultValue={session.mountain}
          />
          <input
            type="text"
            name="goals"
            placeholder="Goals:"
            defaultValue={session.goals}
          />
          <button>Update Session</button>
        </Form>
        <Form action={`/delete/${session.id}`} method="post">
            <button>Delete Session</button>
        </Form>
        <Link to="/">
        <button>Go Back</button>
      </Link>
        </>
    )
}
// {session.findById((session,idx) => <SessionCard key={idx} session={session}/>)}

