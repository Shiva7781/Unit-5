import { useState } from "react";

export const Inventory = () => {

    const [inven, setInven] = useState({

        Books: 5,
        Notebooks: 10,
        Pens: 15,
    })

    const handleChange = (items, value, changeBy) => {

        if (value + changeBy < 0) {

            return
        }
        if (items === "Books") {

            setInven({ ...inven, Books: value + changeBy })
        }
        else if (items === "Notebooks") {

            setInven({ ...inven, Notebooks: value + changeBy })
        }
        else if (items === "Pens") {

            setInven({ ...inven, Pens: value + changeBy })
        }
    }

    return (

        <div style={{
            border: "2px solid red",
            borderRadius: "3px",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            width: "400px",
            margin:"auto",
            marginTop: "20px"
        }}
        >

            <div className="items" >
                <span style={{margin: "20px"}}>Books:</span>
                <button style={{margin: "10px"}} onClick={() => handleChange("Books", inven.Books, 1)} className="circularButton" >+</button>
                <button onClick={() => handleChange("Books", inven.Books, -1)} className="circularButton">-</button>
                <span style={{margin: "20px"}}>{inven.Books}</span>
            </div>

            <div className="items">
                <span style={{margin: "20px"}}>NoteBooks:</span>
                <button style={{margin: "10px"}} onClick={() => handleChange("Notebooks", inven.Notebooks, 1)} className="circularButton">+</button>
                <button onClick={() => handleChange("Notebooks", inven.Notebooks, -1)} className="circularButton">-</button>
                <span style={{margin: "20px"}}>{inven.Notebooks}</span>
            </div>


            <div className="items">
                <span style={{margin: "20px"}}>Pens:</span>
                <button style={{margin: "10px"}} onClick={() => handleChange("Pens", inven.Pens, 1)} className="circularButton">+</button>
                <button onClick={() => handleChange("Pens", inven.Pens, -1)} className="circularButton">-</button>
                <span style={{margin: "20px"}}>{inven.Pens}</span>
            </div>

            Total: {inven.Books + inven.Notebooks + inven.Pens}

        </div>
    )
}
