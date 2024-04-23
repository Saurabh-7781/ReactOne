import React from "react";


const Component =(() =>{
    const arr = [
        {
           id: 1,
           name: "Saurabh",
           age: 20
        },
        {
            id: 2,
            name:"sssss",
            age:34
        },
        {
            id:3,
            name:"ttttt",
            age:55
        }
      ];


const a = arr.filter((i)=>{
    return i.age === 34;
})

    return (
        <>
            <h3>My First Components</h3>
            {
                <ul>
                    {
                        a.map((i)=>{
                            return (
                                <React.Fragment>
                                    <li>{i.id}</li>
                                    <li>{i.name}</li>
                                    <li>{i.age}</li>
                                </React.Fragment>
                            )
                        })
                    }
                </ul>
            }
        </>

    )

})
export default Component;