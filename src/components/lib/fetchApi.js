const RASE_URL = "http://ec2-3-122-253-30.eu-central-1.compute.amazonaws.com:5500/api/v1";

export const fetchApi = async (path, option = {}) => {
    try {
        const requestOptions = {
            method:option.method || "GET",
            headers:{
                UserID:"daniel",
                "Content-Type": 'application/json'
            },
        }
        if (requestOptions.method !== "GET") {
            requestOptions.body = JSON.stringify(option.body)
        }
       const response = await fetch(`${RASE_URL}/${path}`,requestOptions )

    if (!response.ok) {
        throw new Error("Something went wrong")
    }
    const result = await response.json();

    return result 
    
    } catch (error) {
      throw error
    }
    
}