 export const getUsers = async () => {
    const baseUrl = process.env.REACT.APP.BASE.URL;
    try{
        const response = await fetch(`${baseUrl}/users`);
        return response.json();
    } catch (error){
        throw new Error(error.message)
    }
}
