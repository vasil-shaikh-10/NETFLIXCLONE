import { User } from "../models/user.model.js";
import {fetchFromTMDB} from '../services/tmdb.services.js'
export async function searchPerson(req,res) {
    let {query}=req.params
    // 
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/search/person?query=${query}&include_adult=false&language=en-US&page=1`)
        
        if (data.results.length == 0 ){
            res.status(404).send(null);
        }
        await User.findByIdAndUpdate(req.user._id,{
            $push:{
                searchHistory:{
                    id:data.results[0].id,
                    image:data.results[0].profile_path,
                    title:data.results[0].name,
                    searchType:'person',
                    createdAt:new Date(),
                },
            },
        })
        res.status(200).json({success:true,content:data.results})
    } catch (error) {
        console.log("Error in SearchPerson controller", error.message)
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}
export async function searchMovie(req,res) {
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`)
        
        if (data.results.length == 0 ){
            res.status(404).send(null);
        }
        await User.findByIdAndUpdate(req.user._id,{
            $push:{
                searchHistory:{
                    id:data.results[0].id,
                    image:data.results[0].profile_path,
                    title:data.results[0].title,
                    searchType:'movie',
                    createdAt:new Date(),
                },
            },
        })
        res.status(200).json({success:true,content:data.results})
    } catch (error) {
        console.log("Error in SearchMovie controller", error.message)
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}
export async function searchTv(req,res) {
//  'https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1 
try {
    const data = await fetchFromTMDB(`https://api.themoviedb.org/3/search/tv?query=${query}&include_adult=false&language=en-US&page=1`)
    
    if (data.results.length == 0 ){
        res.status(404).send(null);
    }
    await User.findByIdAndUpdate(req.user._id,{
        $push:{
            searchHistory:{
                id:data.results[0].id,
                image:data.results[0].profile_path,
                title:data.results[0].name,
                searchType:'tv',
                createdAt:new Date(),
            },
        },
    })
    res.status(200).json({success:true,content:data.results})
} catch (error) {
    console.log("Error in SearchTv controller", error.message)
    res.status(500).json({success:false,message:"Internal Server Error !"})
}  
}

export async function getSearchHistory(req,res) {
    try {
        res.status(200).json({success:true,content:req.user.searchHistory})
    } catch (error) {
    res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}

export async function removeItemFromSearchHistory(params) {
    let {id}=req.params
    id = parseInt(i)
    try {
       await User.findByIdAndUpdate(req.user._id,{
           $pull:{
               searchHistory:{id:id},
           }
       })
       res.status(200).json({success:true,content:"Item Removed From search History."})
   
    } catch (error) {
       res.status(500).json({success:false,message:"Internal Server Error !"})
       
    }   
}
