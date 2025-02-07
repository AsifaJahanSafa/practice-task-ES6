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

console.log(data.Sophia.study[1].Secondary[1].location)