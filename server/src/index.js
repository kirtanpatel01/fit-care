import { config } from "dotenv";
import { server } from "./app.js";
import { connectDB } from "./db/index.js";

config();
const PORT = process.env.PORT || 8002;

connectDB().then(() => {
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
})
.catch((err) => {
    console.log('Error in MongDB connection: ', err)
})
