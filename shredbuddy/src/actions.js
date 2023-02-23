import url from "./url"
import { redirect } from "react-router-dom"

export async function CreateAction({request}){
    //get the form data
    const formData = await request.formData()
    //construct a new session
    const newSession = {
        date: formData.get("date"),
        mountain: formData.get("mountain"),
        goals: formData.get("goals")
    }
    //request to create route in backend
    await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newSession)
    })
    //redirect to index page
    return redirect("/")
}

export async function UpdateAction({request, params, }) {
    //get the form data
    const formData = await request.formData()
    //construct updated session
    const updatedSession = {
        date: formData.get("date"),
        mountain: formData.get("mountain"),
        goals: formData.get("goals")

    }
    //request to update route in backend
    await fetch(url + params.id + "/", {
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedSession),
    })
    //redirect back to index page
    return redirect("/")
}

export async function DeleteAction({params}) {
    //get params
    const id = params.id
    //send request to delete route in backend
    await fetch(url + id + "/", {
        method: "delete"
    })
    //redirect
    return redirect("/")
}