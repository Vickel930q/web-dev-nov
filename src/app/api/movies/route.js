
import {NextResponse} from 'next/server'
export const GET= async (request)=>{
    try{
       // when sending response to the client(frond end), we need to send the response in JSON
        return new NextResponse(JSON.stringify({image1:"https://images.unsplash.com/photo-1712287633648-0c0f556d88ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"}), {status:200})
    }

    catch(err){
        console.log(err.message)
        return new NextResponse(JSON.stringify({msg:"server Error"},{status:500}))
    }
    
    
        
}

