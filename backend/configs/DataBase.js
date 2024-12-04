import mongoose from 'mongoose'

export const DataBase = async () => {
    await mongoose.connect("mongodb+srv://netflixClone:netflixClone@cluster0.dgwjmgh.mongodb.net/netflixClone?retryWrites=true&w=majority&appName=Cluster0")
    console.log("DataBaseConnet....")
}
