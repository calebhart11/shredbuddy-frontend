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
        <h2>Plan A Session</h2>
        <Form action="create" method="post">
            <input type="text" name="Date" placeholder="Date:"/>
            <input type="text" name="Mountain" placeholder="Mountain:"/>
            <input type="text" name="Goals" placeholder="Goals:"/>
            <button>Create Your Session</button>
        </Form>
    </div>
    {/* {sessions.map((session,idx) => <SessionCard key={idx} session={session}/>)} */}
    </>

}

export default Index