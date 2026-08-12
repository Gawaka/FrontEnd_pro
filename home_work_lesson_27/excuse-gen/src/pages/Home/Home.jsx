import { useState, useEffect } from "react";
import ExcuseForm from "../../components/ExcuseForm/ExcuseForm";
import ExcuseCard from "../../components/ExcuseCard/ExcuseCard";
import mockExcuses from "../../data/mockExcuses";

function Home(props) {
    const [randomExcuse, setRandomExcuse] = useState(null);
    const [excuseList, setExcuseList] = useState(()=> {
        const savedExcuses = localStorage.getItem('myExcuses');
        if (savedExcuses) {
            return JSON.parse(savedExcuses);
        }
        return mockExcuses;
    });

    useEffect(()=> {
        localStorage.setItem('myExcuses', JSON.stringify(excuseList));
    }, [excuseList]);

    const genRandomExcuse = ()=> {
        const randomIndex = Math.floor(Math.random() * excuseList.length);
        setRandomExcuse(excuseList[randomIndex])
    };

    const handleExcuseAdd = (text) => {
    const newExcuse = {
        id: Date.now(),
        text: text
    };
    setExcuseList((prevList) => [...prevList, newExcuse]);
    };

    const handleExcuseDelete = (indexToDelete)=> {
        setExcuseList((prevList)=> prevList.filter((excuse) => excuse.id !== indexToDelete));
        setRandomExcuse(null);
    };

    return(
        <>
            <ExcuseForm
                onSubmit={handleExcuseAdd}
            />
            <button 
                className="btn-generate"
                onClick={genRandomExcuse}
            >
                ✨ Згенерувати відмазку
            </button>
            {randomExcuse ? 
                <ExcuseCard
                    text={randomExcuse.text}
                    onDelete={()=> handleExcuseDelete(randomExcuse.id)}
                /> : null
            }
        </>
    );
};

export default Home;