import React, { useState } from 'react'
import { useEffect } from 'react'

export default function SessionStorage() {
    const [items, setItems] = useState(() => {
        const storedData = sessionStorage.getItem("itemdata")
        return storedData ? JSON.parse(storedData) : []
    })
    const [inputValue, setInputValue] = useState({
        name: "",
        password: ""
    })
    const [editItem, setEditItem] = useState(null)

    useEffect(() => {
        sessionStorage.setItem("itemdata", JSON.stringify(items))
    })

    const [sort, setSort] = useState(null)


    const handleSort = (field) => {
        setSort(field)
    }
    const sortedList = sort ? [...items].sort((a, b) => a[sort].localeCompare(b[sort])) : items

    const handleAddData = () => {
        if (inputValue.name === "") {
            alert("Please Enter Name")
        } else {
            setItems([...items, inputValue])
            setInputValue({
                name: "",
                password: ""
            })
            setEditItem(null)

        }
    }

    const handleEdit = (index) => {
        setEditItem(index)
        setInputValue(items[index])
    }

    const handleSaveItem = () => {
        const updatedData = [...items]
        updatedData[editItem] = inputValue

        setItems(updatedData)

        setInputValue({
            name: "",
            password: ""
        })
        setEditItem(null)
    }

    const [searchData, setSearchData] = useState("")
    const handleSearch = (e) => {
        setSearchData(e.target.value)
    }

    const filterData = sortedList.filter((item) => {

        return item.name.toLowerCase().includes(searchData.toLowerCase()) ||
            item.password.toLowerCase().includes(searchData.toLowerCase())
    })


    const handleDelete = (index) => {
        const updatedData = [...items]
        updatedData.splice(index, 1)
        setItems(updatedData)
    }

    return (
        <>
            <h1>Session Storager</h1>
            <div className='border'>
                <h1>Crud</h1>

                <input className='text' type="text" placeholder='Enter Name' value={inputValue.name} onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })} />
                <br /><br />
                <input className='text' type="password" placeholder='Enter Password' value={inputValue.password} onChange={(e) => setInputValue({ ...inputValue, password: e.target.value })} />
                <br /><br />

                {
                    editItem === null ?

                        <button onClick={() => { handleAddData() }} className='add'>Add data</button>
                        :
                        <button onClick={() => { handleSaveItem() }} className='add'>Save Change</button>
                }
            </div>
            <br />
            <br />

            <table>
                <thead>
                    <tr>
                        <input type="text" value={searchData} onChange={(e) => handleSearch(e)} placeholder='Search Data' />
                    </tr>
                    <tr style={{textAlign:'center'}}>
                        <th>no</th>
                        <th>Name <button onClick={() => handleSort("name")}>&uarr;</button></th>
                        <th>Password <button onClick={() => handleSort("password")}>&uarr;</button></th>
                        <th>Action</th>
                    </tr>
                </thead>

                {
                    filterData.map((item, index) => {
                        return (
                            <>
                                <tbody key={index}>
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.password}</td>

                                        <td>
                                            <button className='box' onClick={() => handleEdit(index)}>Edit</button>
                                            <button className='box' onClick={() => handleDelete(index)}>Delete</button>
                                        </td>

                                    </tr>

                                </tbody>
                            </>
                        )
                    })
                }
            </table>
        </>

    )
}

