import { useLoaderData, Form } from "react-router-dom";
// import Session from "../components/Session"
import SessionCard from "../components/SessionCard";
// import Calendar from "react-calendar";


const Index = (props) => {
    const sessions = useLoaderData()
console.log(sessions, "this is the data")
    return <>
    <div className="plancontainer"><Form action="create" method="post">
            <h2>Plan A Session</h2>
            <input type="text" name="date" placeholder="Date:"/>
            <input type="text" name="mountain" placeholder="Mountain:"/>
            <input type="text" name="goals" placeholder="Goals:"/>
            <button className="create">Create Your Session</button>
        </Form>
        </div>
     <div className="index">
    <div className="cards">{sessions.map((session,idx) => <SessionCard key={idx} session={session}/>)}</div>

    {/* <div className="index"> */}
        {/* <h2>Plan A Session</h2> */}
    </div>
    {/* {sessions.map((session,idx) => <SessionCard key={idx} session={session}/>)} */}
    </>

}

export default Index