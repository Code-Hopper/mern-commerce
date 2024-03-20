import "../database/conn.js"

let test = (req, res) => {
    console.log("Got a Message from Frontend!")
    res.status(200).json({message:"Hello From Node Backend !"})
}

export { test }