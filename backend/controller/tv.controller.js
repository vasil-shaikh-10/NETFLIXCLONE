import { fetchFromTMDB } from "../services/tmdb.services.js";

export async function  getTrendingTv(req,res){
    try {
        const data = await fetchFromTMDB('https://api.themoviedb.org/3/trending/tv/day?language=en-US')
        console.log("data")
        const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)]
        res.json({success:true,content : randomMovie})
    } catch (error) {
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}

export async function getTvTrailers(req,res) {
    const {id} = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/videos?language=en-US`)
        res.json({success:true,content : data.results})

    } catch (error) {
        if(error.message.includes("404")){
            return res.status(400).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}

export async function getTvDetalis(req,res) {
    const {id} = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}?language=en-US`)
        res.json({success:true,content : data.results})

    } catch (error) {
        if(error.message.includes("404")){
            return res.status(400).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}

export async function getSimilarTv(req,res) {
       const {id} = req.params

    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${id}/similar?language=en-US&page=1`)
        res.json({success:true,Similar:data.results})

    } catch (error) {
        if(error.message.includes("404")){
            return res.status(400).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}

export async function gettvByCategory(req,res) {
    const {category} = req.params
    try {
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/tv/${category}?language=en-US&page=1`)
        res.json({success:true,category:data.results})

    } catch (error) {
        if(error.message.includes("404")){
            return res.status(400).send(null)
        }
        res.status(500).json({success:false,message:"Internal Server Error !"})
    }
}