import {createShortUrlWithUser,createShortUrlWithoutUser} from  "../services/short_url.services.js"




export const createShortUrl = (async (req,res)=>{
    const data = req.body
    let shortUrl
    if(req.user){
        shortUrl = await createShortUrlWithUser(data.url,req.user._id,data.slug)
    }else{  
        shortUrl = await createShortUrlWithoutUser(data.url)
    }
    res.status(200).json({shortUrl : process.env.APP_URL + shortUrl})
})
 



export const redirectFromShortUrl = (async (req,res)=>{
    const {id} = req.params
    const url = await getShortUrl(id)
    if(!url) throw new Error("Short URL not found")
    res.redirect(url.full_url)
})