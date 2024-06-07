// async function getData() {
//     // Simulate getting data form server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })

// }

// Settle means resolve or reject
// Resolve means promise has settled successfully
// Reject means promise has not settled successfully

// Get Requests
// async function getData() {
//     // Simulate getting data form server
//     let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//     let data = await x.json()
//     //   console.log(x);
//       return data

// }

//Post Requests
async function getData() {
    // Simulate getting data form server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    //   console.log(x);
    return data

}

async function main() {

    console.log('Loading Modules');

    console.log('Do something else');

    console.log('Load Data');
    let data = await getData()

    console.log(data);

    console.log('Process Data');

    console.log('Task 2');
}

main()

// Example POST method implementation:
// async function postData(url = "", data = {}) {

//     const response = await fetch(url, {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },

//         body: JSON.stringify(data),
//     });
//     return response.json();
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//     console.log(data);
// });

// First way to do this
// data.then((v) => {

//     console.log(data);

//     console.log('Process Data');

//     console.log('Task 2');

// })

