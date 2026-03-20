import axios from "axios";

qpp.get("/", async (req,res)=>
{
    try
    {
        const response = await axios.get("https://bored-api.appbrewery.com/random");
        res.render("index.ejs", {activity: response.data});//we don't need to use json.parse if we use axios
    }
    catch(error)
    {
        console.error("Failed to make request:", error.message);
        res.status(500), send("Failed to fetch activity. Please try again.");
    }
});