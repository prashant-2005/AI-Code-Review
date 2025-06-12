const {main} = require("../services/ai.service.js")

module.exports.getReview = async (req,res)=>{
    const code = req.body.code;

    if(!code){
        return res.status(400).send("code is required")
    }

    const response = await main(code)

    res.json(response)
}