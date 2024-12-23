import app from "./app.js";

console.log(process.env.BUILDENV, "process....");

const URL = process.env.BUILDENV === "dev" ? process.env.PORT : process.env.LIVEURL;

app.listen(8080, async (err) => {
    if (err) {
        console.log(`server failed with error ${err}`);
    } else {
        console.log(`server is running at ${URL}`);
    }
})