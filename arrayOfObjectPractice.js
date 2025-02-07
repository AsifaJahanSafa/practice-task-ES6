// task-1
let data={
    Sophia:{
        id:33,
        study:[
            {
            Primary:[
                {school_name:"Acc primary School"},
                {location:"Peters Burg"}
            ]
            },

            {
                Secondary:[
                    {school_name:"Acc Secondary School"},
                    {location:"St Lorence "}
    
                ]
            }
        ]
    }

}

console.log(data.Sophia.study[1].Secondary[1].location);

// task-2

let students={
    2222:{
        name:"Jack",
        section:"C",
        class:"IX",
        address:{
            "building No":12,
            "street":"St. Jason",
            "City":"Petersburgs",
            "Country":"UK"
        }
    },
        3333:{
            name:"Harry",
            section:"D",
            class:"X",
            address:{
                "building No":85,
                "street":"barmingham",
                "City":"Landon",
                "Country":"UK"
            },

        }
    
}

console.log(students[2222].address.City);
console.log(students[3333].name);


// Task-3
let date2={
    data:[
        {
            bookId:1,
            bookDetails:{
                name:"Habluder Adda",
                catagory:"xyz",
                price:"20$",

            },

            bookCatagory:"basic"
        },

        {
            bookId:2,
            bookDetails:{
                name:"gobluder Adda",
                catagory:"abc",
                price:"50$",

            },

            bookCatagory:"basic"
        }
    ]
}

console.log(date2.data[0].bookDetails.name)