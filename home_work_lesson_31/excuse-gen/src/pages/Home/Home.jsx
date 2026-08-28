import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteExcuseReq, likeExcuse, disLikeExcuse, fetchExcusesReq, clearExcusesReq, toggleExcuseReq } from "../../store/excusesSlice";
import ExcuseCard from "../../components/ExcuseCard/ExcuseCard";

function Home() {
    const dispatch = useDispatch();
    
    const { list: excuseList, isLoading } = useSelector((state) => state.excuses);
    
    const [randomExcuse, setRandomExcuse] = useState(null);

    useEffect(() => {
        dispatch(fetchExcusesReq());
    }, [dispatch]);

    const genRandomExcuse = ()=> {
        if (!excuseList || excuseList.length === 0) return; 
        
        const randomIndex = Math.floor(Math.random() * excuseList.length);
        setRandomExcuse(excuseList[randomIndex]);
    };

    const handleExcuseDelete = (indexToDelete)=> {
        dispatch(deleteExcuseReq(indexToDelete));
        setRandomExcuse(null);
    };

    const handleClearAll = () => {
        dispatch(clearExcusesReq());
        setRandomExcuse(null);
    };

    const freshExcuse = randomExcuse ? excuseList.find(e => e.id === randomExcuse.id) : null;

    return(
        <>
            <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                <button 
                    className="btn-generate"
                    onClick={genRandomExcuse}
                    disabled={isLoading || excuseList.length === 0}
                >
                    {isLoading ? "⏳ Завантаження..." : "✨ Отримати відмазку"}
                </button>
                
                <button 
                    className="btn-clear" 
                    onClick={handleClearAll}
                    disabled={isLoading || excuseList.length === 0}
                >
                    🗑️ Очистити все
                </button>
            </div>

            {freshExcuse ? 
                <ExcuseCard
                    text={freshExcuse.text}
                    onDelete={()=> handleExcuseDelete(freshExcuse.id)}
                    likes={freshExcuse.likes}
                    onLike={()=> dispatch(likeExcuse(freshExcuse.id))}
                    onDislike={()=> dispatch(disLikeExcuse(freshExcuse.id))}
                    completed={freshExcuse.completed}
                    onToggle={()=> dispatch(toggleExcuseReq(freshExcuse.id))}

                /> : null
            }
        </>
    );
};

export default Home;