import { useLoaderData, Form } from "react-router-dom";
// import Session from "../components/Session"
import SessionCard from "../components/SessionCard";


const Index = (props) => {
    const sessions = useLoaderData()
console.log(sessions, "this is the data")
    return <>
     <div className="index">
    {sessions.map((session,idx) => <SessionCard key={idx} session={session}/>)}

    {/* <div className="index"> */}
        {/* <h2>Plan A Session</h2> */}
        <Form action="create" method="post">
        <h2>Plan A Session</h2>
            <input type="text" name="date" placeholder="Date:"/>
            <input type="text" name="mountain" placeholder="Mountain:"/>
            <input type="text" name="goals" placeholder="Goals:"/>
            <button>Create Your Session</button>
        </Form>
    </div>
    {/* {sessions.map((session,idx) => <SessionCard key={idx} session={session}/>)} */}
    </>

}

export default Index