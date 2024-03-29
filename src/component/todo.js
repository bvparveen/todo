import React, { useState } from 'react';
import '../App.css';
export default function Todo() {
    const [inputData, setInputData] = useState("")
    const [items, setItems] = useState([])
    const [toggle, setToggle] = useState(true)
    const [iseditItem, setIsEditItem] = useState(null)
    const [del,setDele]=useState(true)


    const addItems = () => {
        if (!inputData) {
            alert('pelese fill data');

        } else if (inputData && !toggle) {
            setItems(
                items.map((elem) => {
                    if (elem.id === iseditItem)
                        return { ...elem, name: inputData }
                    return elem
                })

            )
            setToggle(true)
            setInputData('')
            setIsEditItem(null)
        }
        else {
            const data = {

                id: new Date().getTime().toString(), name: inputData,

            }

            setItems([...items, data])
            setInputData('')

        }

    }
    //delete iteams
    const deleteItem = (id) => {
        //console.log("")
        const updatedItems = items.filter((elem) => {
            alert("are you sure delete item")
        
            return elem.id !== id;
        });
        setItems(updatedItems)

    }
    console.log(items);

    //Edit item
    const editItem = ((id) => {
        const NeweditItems = items.find((elem) => {
            return elem.id === id

        })
        console.log(NeweditItems);
        setToggle(false)
        setInputData(NeweditItems.name)
        setIsEditItem(id)



    })

    //remove
    const removeAll = () => {
        setItems([])
    }
    return (
        <>
            <div className='main-div'>
                <div className="child-div">
                    <h1 className='heading'>To-Do App</h1>
                    <div className='addItems' >
                        <input type="text"
                            placeholder='add items here..'
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)
                            }
                        />
                        {
                            toggle ? <i className="fa fa-plus add-btn"
                                title='Add items'
                                onClick={addItems}>

                            </i> :
                                <i className="fa fa-pencil-square-o"
                                    aria-hidden="true"
                                    title='updated items'

                                    onClick={addItems}
                                ></i>
                        }

                    </div>

                    <div className="showItems">

                        {
                            items.map((elem) => {
                                return (
                                    <div className="eachItem"
                                        key={elem.id}>
                                        <h1>{elem.name}</h1>
                                        <div className="todo-btn">

                                            <i className="fa fa-pencil-square-o"
                                                aria-hidden="true"
                                                onClick={() => editItem(elem.id)}
                                            ></i>


                                            <i className="fa fa-trash" aria-hidden="true"
                                                title="Delete Item"
                                                onClick={() =>
                                                    deleteItem(elem.id)}
                                            ></i>

                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>

                    <div className="showItems">
                        <button className='btn effect' onClick={removeAll}>
                            <span>REMOVE ALL</span></button>
                    </div>

                </div>

            </div>

        </>

    )
}
// clc
import { useState } from "react";
import "./styles.css";

 export default function App() {
  const [val,setVal]=useState("")
  
  const onClickHandler=(e)=>
  {
    setVal(val.concat(e.target.value))
  }
  const onClear=()=>
  {
    setVal(" ")
  }


  const calculor =()=>
  {
    var EVAL_IS_BAD__AVOID_THIS = eval;
    setVal(EVAL_IS_BAD__AVOID_THIS(val).toString())

  }
  return (
    <div className="App">
      <h1>calculator</h1>
     <div>
       <input type="text" value={val} />
       </div>
       <br/>

       <div>
         <input type="button" value="9" onClick={onClickHandler} />
         <input type="button" value="8"   onClick={onClickHandler} />
         <input type="button" value="7"   onClick={onClickHandler} />
         </div>

         <br/>
       <div>
         <input type="button" value="6"   onClick={onClickHandler} />
         <input type="button" value="5"   onClick={onClickHandler} />
         <input type="button" value="4"   onClick={onClickHandler} />
         </div>

         <br/>
       <div>
         <input type="button" value="3"   onClick={onClickHandler} />
         <input type="button" value="2"   onClick={onClickHandler} />
         <input type="button" value="1"   onClick={onClickHandler} />
         </div>

         <br/>
       <div>
         <input type="button" value="/"   onClick={onClickHandler} />
         <input type="button" value="+"   onClick={onClickHandler} />
         <input type="button" value="-"   onClick={onClickHandler} />
         </div>

         <br/>
         <div>
         <input type="button" value="%"   onClick={onClickHandler} />
         <input type="button" value="C"   onClick={onClear} />
         <input type="button" value="="   onClick={calculor} />
         </div>
    </div>
  );
}

