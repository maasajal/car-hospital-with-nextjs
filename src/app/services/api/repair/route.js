import { connectDB } from "@/lib/connectDB"
import { services } from "@/lib/services"

export const GET = async () => {
    const db = await connectDB()
    const serviceCollection = db.collection("services")
    try{
        await serviceCollection.deleteMany();
        const resp = await serviceCollection.insertMany(services);
    } catch (error) {
        console.log(error)
    }
}