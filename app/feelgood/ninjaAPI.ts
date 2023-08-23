import axios from "axios";

//functions for separate API calls

const aPIKey = '+/Kdimt7p9mi5p8FKv8mxQ==Hy6oJnoDukSahBMM'

const url = 'https://api.api-ninjas.com/v1/';

export const getJokes = async () => {
    try {
        const response = await axios.get(`${url}dadjokes?limit=1`, {
            headers: {
                'X-Api-Key': aPIKey
            }
        })
        return response.data[0].joke
    } catch (err) {
        console.error(err)
        return ('unknown')
    }
}


export const getBucketList = async (): Promise<string> => {
    try {
        const response = await axios.get(`${url}bucketlist`, {
            headers: {
                'X-Api-Key': aPIKey
            }
        })
        return response.data.item
    } catch (err) {
        console.error(err)
        return ('unknown')
    }

}

export const getRecipe = async (cocktail: string): Promise<Array<string>> => {
    try {
        const response = await axios.get(`${url}cocktail?name=${cocktail}`, {
            headers: {
                'X-Api-Key': aPIKey
            }
        })
        console.log(response.data)
        return response.data[0].ingredients
    } catch (err) {
        console.error(err)
        return ([])
    }
}

export const getAPIData = (type: string): Promise<string> => {
    if (type === 'dadJoke') {
        return getJokes()
    }
    else {
        return getBucketList()
    }
}




