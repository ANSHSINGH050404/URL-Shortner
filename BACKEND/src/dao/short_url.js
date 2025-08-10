import urlSchema from "../models/short_url.model.js"

export const saveSortUrl = async (shortUrl, longUrl, userId) => {
    try{
        const newUrl = new urlSchema({
            full_url:longUrl,
            short_url:shortUrl
        })
        if(userId){
            newUrl.user = userId
        }
        await newUrl.save()
    }catch(err){
        if(err.code == 11000){
            throw new ConflictError("Short URL already exists")
        }
        throw new Error(err)
    }
};