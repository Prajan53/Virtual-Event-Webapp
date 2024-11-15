const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const attendeeRouter = require("./routes/attendeeRoutes");
const speakerRouter = require("./routes/speakerRoutes");
const organiserRouter = require("./routes/organiserRoutes");
const sponsorRouter = require("./routes/sponsorRoutes");

app.use(express.json());
app.use(cors());
app.use("/api/attendee", attendeeRouter);
app.use("/api/speaker",speakerRouter);
app.use("/api/organiser",organiserRouter);
app.use("/api/sponsor", sponsorRouter);

async function main(){
    await mongoose.connect("")
    app.listen(3000);
    console.log("Listening on http://localhost:3000");
}

main()