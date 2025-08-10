import { generateNanoid } from "../utils/helper.js";

import { saveSortUrl } from "../dao/short_url.js";

export const createShortUrlWithUser=async(url)=>{
 const shortUrl=generateNanoid(7);
 await saveSortUrl(shortUrl,url)
  return shortUrl;

}
export const createShortUrlWithoutUser=async(url,userId)=>{
 const shortUrl=generateNanoid(7);  
 await saveSortUrl(shortUrl,url,userId)
  return shortUrl;

}