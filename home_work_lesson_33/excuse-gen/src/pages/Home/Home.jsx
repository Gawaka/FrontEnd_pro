import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExcuse, likeExcuse, disLikeExcuse } from "../../store/excusesSlice";
import ExcuseCard from "../../components/ExcuseCard/ExcuseCard";

function Home(props) {
    const dispatch = useDispatch();
    const excuseList = useSelector((state) => state.excuses.list);
    const [randomExcuse, setRandomExcuse] = useState(null);

    const genRandomExcuse = ()=> {
        const randomIndex = Math.floor(Math.random() * excuseList.length);
        setRandomExcuse(excuseList[randomIndex]);
    };

    const handleExcuseDelete = (indexToDelete)=> {
        dispatch(deleteExcuse(indexToDelete))
        setRandomExcuse(null);
    };

    const freshExcuse = randomExcuse ? excuseList.find(e => e.id === randomExcuse.id) : null;

    return(
        <>
            <button 
                className="btn-generate"
                onClick={genRandomExcuse}
            >
                ✨ Отримати відмазку
            </button>
            {freshExcuse ? 
                <ExcuseCard
                    text={freshExcuse.text}
                    onDelete={()=> handleExcuseDelete(freshExcuse.id)}
                    likes={freshExcuse.likes}
                    onLike={()=> dispatch(likeExcuse(freshExcuse.id))}
                    onDislike={()=> dispatch(disLikeExcuse(freshExcuse.id))}
                /> : null
            }
        </>
    );
};

export default Home;