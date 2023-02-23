import { useLoaderData, Form } from "react-router-dom";
import Session from "../components/Session"
const Index = (props) => {
    const sessions = useLoaderData()

    return <>
    <div className="index">
        <h2>Plan A Session</h2>
        <Form action="/create" method="post">
            <input type="text" name="Date" placeholder="Date:"/>
            <input type="text" name="Mountain" placeholder="Mountain:"/>
            <input type="text" name="Goals" placeholder="Goals:"/>
            <button>Create Your Session</button>
        </Form>
    </div>
    {/* {sessions.map((sessions) => <Session key={sessions.id} sessions={sessions}/>)} */}
    </>

}

export default Index