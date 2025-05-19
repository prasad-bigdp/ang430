// const p = new Promise((resolve, reject) =>
// {
//     setTimeout(() =>
//     {
//         resolve("hello world")
//     },10000)
// })
// p
//     .then((data) => console.log(data))
//     .catch((err)=>console.log(err))
async function demo()
{
	const re = await
	    setTimeout(() =>
	    {
	        resolve("hello world")
	    },10000)
}