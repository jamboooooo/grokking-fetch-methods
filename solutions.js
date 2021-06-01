// твои решения
const data1 = fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(txt => {
        console.log(txt)
    })

const data2 = fetch('https://this-site-doesnt-exists.intocode')
    .then(res => res.json())
    .then(txt => {
        console.log(txt)
    })
    .catch(err => {
        console.log(err.message)
    })

const data3 = fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(txt => {
        console.log(typeof txt)
    })

const data4 = fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => {
        console.log(data.lenght);
    })

const data5 = fetch('https://reqres.in/api/users/1')
    .then(res => res.json())
    .then(txt => {
        console.log(txt.data.email);
    })

const data6 = fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: {
            'first_name': 'intocode'
        }
    }).then(res => res.json())
    .then(data => {
        console.log(data);
    })

const data7 = fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            'first_name': 'intocode'
        })
    }).then(res => res.json())
    .then(data => {
        console.log(data);
    })

const value = {
    method: 'POST',
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify({
        'first_name': 'intocode'
    })
}
const data8 = fetch('https://reqres.in/api/users', value)
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

const data9 = fetch('https://reqres.in/api/users', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            'first_name': 'into',
            'last_name': 'code'
        })
    }).then(res => res.json())
    .then(txt => {
        console.log(txt.id);
        console.log(txt.createdAt);
    })

const data10 = fetch('https://reqres.in/api/users/5', {
    method: 'DELETE'
}).then(res => {
    if (res.status === 204) {
        console.log('succes, user found');
    }
})

const data11 = fetch('https://reqres.in/api/users/3', {
    method: "PATCH",
    headers: {
        "Content-Type": 'application/json'
    },
    body: JSON.stringify({
        'first_name': 'интукод',
    })
})