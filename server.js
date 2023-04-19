const app = require("./app.js");

//Configure our dotenv
require("dotenv").config();
const PORT = process.env.PORT;
// ps -A | grep nodemon

//Listen
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})
