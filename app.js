// Asynchronous

// Download image di sebuah url

const firstUrl = "https://www.first-url.com" // ---> 2 detik
const secondUrl = "https://www.second-url.com" // ---> 5 detik
const thirdUrl = "https://www.third-url.com" //  ---> 1 detik
const fourthUrl = "https://www.fourth-url.com" //  ---> 3 detik
const fifthUrl = "https://www.fifth-url.com" //  ---> 4 detik

// const download = (delay, url) => {

//     setTimeout(() => {
//         console.log(`Download successfully from ${url}`)
//     }, delay) // milliseconds
// }

// Callback --> function didalam function

// const download = (url, delay, callback) => {
    
//     // Synchronous
//     // console.log("Download started....")

//     // Asynchronous
//     setTimeout(() => {
//         console.log(`Download successfully from ${url}`)
//         // function callback akan ketrigger setelah delaynya selesai
//         callback()
//     }, delay)
// }

// download(firstUrl, 2000, () => {

//     download(secondUrl, 5000, () => {

//         download(thirdUrl, 1000, () => {
            
//             download(fourthUrl, 3000, () => {

//                 download(fifthUrl, 4000, () => {

//                     console.log("All downloads completed")
//                 })
//             })
//         })
//     })
// })


// PROMISE
// ES5 Javascript
// Syntax Lama

const download = (url, delay) => {

    return new Promise((resolve, reject) => {

        // Resolve --> Success Condition
        setTimeout(() => {
            console.log(`Download successfully from ${url}`)
            resolve();
        }, delay)

        // Reject --> Failed Condition
    })
}

// download(firstUrl, 2000)
//     .then(() => {
//         return download(secondUrl, 5000)
//     })
//     .then(() => {
//         return download(thirdUrl, 1000)
//     })
//     .then(() => {
//         return download(fourthUrl, 3000)
//     })
//     .then(() => {
//         return download(fifthUrl, 4000)
//     })
//     .then(() => {
//         console.log("All downloads successfull")
//     })


// ASYNC AWAIT
// ES8 JAVASCRIPT VERSION
// Syntax paling update


// 2 5 1 3 4
const showDownloads = async () => {

    await download(firstUrl, 2000)
    await download(secondUrl, 5000)
    await download(thirdUrl, 1000)
    await download(fourthUrl, 3000)
    await download(fifthUrl, 4000)
    console.log("All downloads successfull")
}

showDownloads();
