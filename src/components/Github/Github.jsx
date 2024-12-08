import { useLoaderData } from "react-router-dom";

function Github() {
    const data = useLoaderData();
    console.log(data);
    return(
        <h1>Github Page</h1>
    )
}

export default Github;

export const githubInfoLoader = async()=>{
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json();
}