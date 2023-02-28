import { Link, useLoaderData, Form } from "react-router-dom";
import SessionCard from "../components/SessionCard";
import Session from "../components/Session"
import Index from "./Index";
import { useState } from "react";
import { Calendar } from "react-calendar";

export default function Show(props) {
  const [date, setDate] = useState(new Date())
    // const{session} = props
    // const {mountain, date, goals} = session
    const session = useLoaderData()
    return (<>
<div className='calendar-container'>
        <Calendar
          onChange={setDate}
          value={date}
          selectRange={true}
        />
      </div>
      {date.length > 0 ? (
        <p className='text-center'>
          <span className='bold'>From:</span>{' '}
          {date[0].toDateString()}
          &nbsp;|&nbsp;
          <span className='bold'>to:</span> {date[1].toDateString()}
        </p>
      ) : (
        <p className='text-center'>
          <span className='bold'>Date:</span>{' '}
          {date.toDateString()}
        </p>
      )}
<div className="updatecontainer">
  
  <h2>Update this session</h2>
        <Form action={`/update/${session.id}`} method="post">
          <input
            type="text"
            name="date"
            placeholder="Date:"
            defaultValue={session.date}
            value={date}
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
          <button className="update">Update Session</button>
        </Form>
        <Form action={`/delete/${session.id}`} method="post">
            <button className="delete">Delete Session</button>
            <Link to="/">
        <button className="back">Go Back</button>
      </Link>
        </Form>
        </div>
        {/* <Link to="/">
        <button>Go Back</button>
      </Link> */}
            
        <div className="show">
            <SessionCard key={Show} session={session}>
            <h1>{session.mountain}</h1>
            <h2>{session.date}</h2>
            <p>{session.goals}</p>
            </SessionCard>
            
        </div>
        
        {/* <h2>Update this session</h2>
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
      </Link> */}
        </>
    )
}
// {session.findById((session,idx) => <SessionCard key={idx} session={session}/>)}

