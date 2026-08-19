import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExcuse, likeExcuse, disLikeExcuse } from "../../store/excusesSlice";
import ExcuseForm from "../../components/ExcuseForm/ExcuseForm";
import ExcuseCard from "../../components/ExcuseCard/ExcuseCard";
import mockExcuses from "../../data/mockExcuses";


function AddExcuse(props) {
    const dispatch = useDispatch();
    const excuseList = useSelector((state) => state.excuses.list);
    const [lastAdded, setLastAdded] = useState(()=> {
        const savedAdded = localStorage.getItem('addedExcuses');
        if (savedAdded) {
            return JSON.parse(savedAdded);
        }
        return null;
    });

useEffect(()=> {
    localStorage.setItem('addedExcuses', JSON.stringify(lastAdded));
}, [lastAdded]);

const handleExcuseAdd = (text) => {
    const newExcuse = {
        id: Date.now(),
        text: text,
        likes: 0,
    };
    dispatch(addExcuse(newExcuse));
    setLastAdded((prevList) => prevList ? [...prevList, newExcuse] : [newExcuse]);
};

const handleDeleteAdded = (indexToDelete)=> {
    setLastAdded((prevList)=> prevList.filter((added)=> added.id !== indexToDelete));
};

    return(
        <>
        <h1>✨Додати відмазку</h1>
            <ExcuseForm
                onSubmit={handleExcuseAdd}
            />
            {lastAdded ? 
                lastAdded.map((item)=> {
                    const freshItem = excuseList.find(excuse => excuse.id === item.id) || item;
                    
                    return (
                        <ExcuseCard 
                            text={freshItem.text}
                            key={freshItem.id}
                            onDelete={()=> handleDeleteAdded(freshItem.id)}
                            likes={freshItem.likes}
                            onDislike={()=> dispatch(disLikeExcuse(freshItem.id))}
                            onLike={()=> dispatch(likeExcuse(freshItem.id))}
                        />
                    )
                })
            : null}
        </>
    )
};

export default AddExcuse;