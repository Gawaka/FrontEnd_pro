import React, { useEffect, useState } from 'react';
import { HeroClasses } from '../HeroClasses/HeroClasses';
import { Button } from '../Button/Button';
import './homePage.scss';

export function HomePage() {
    const savedVotes = localStorage.getItem('hero_votes');
    const [winner, setWinner] = useState(null);
    const [heroClassList, setHeroClasslist] = useState(savedVotes ? JSON.parse(savedVotes) : {
            barbarian: 0,
            bard: 0,
            druid: 0,
            paladin: 0,
            ranger: 0,
            rogue: 0,
            warlock: 0,
            wizard: 0
        });

    const classesData = [
        { id: 1, name: 'barbarian', src: '/barbarian.svg', votes: heroClassList.barbarian},
        { id: 2, name: 'bard', src: '/bard.svg', votes: heroClassList.bard},
        { id: 3, name: 'wizard', src: '/wizard.svg', votes: heroClassList.wizard},
        { id: 4, name: 'druid', src: '/druid.svg', votes: heroClassList.druid},
        { id: 5, name: 'rogue', src: '/rogue.svg', votes: heroClassList.rogue},
        { id: 6, name: 'paladin', src: '/paladin.svg', votes: heroClassList.paladin},
        { id: 7, name: 'ranger', src: '/ranger.svg', votes: heroClassList.ranger},
        { id: 8, name: 'warlock', src: '/warlock.svg', votes: heroClassList.warlock}
    ];

    const addVote = (heroClass)=> {
        setHeroClasslist((prevState)=> ({
            ...prevState,
            [heroClass]: prevState[heroClass] + 1
        }))
    };

    useEffect(()=> {
        localStorage.setItem('hero_votes', JSON.stringify(heroClassList))
    }, [heroClassList]);

    const showResult = ()=> {
        let maxVotes = 0;
        let currentWinner = null;

        for(const hero in heroClassList) {
            if (heroClassList[hero] > maxVotes) {
                maxVotes = heroClassList[hero];
                currentWinner = hero;
            }
        };

        setWinner(currentWinner);
    };

    const resetVotes = ()=> {
        localStorage.removeItem('hero_votes');
        setWinner(null);
        setHeroClasslist({
            barbarian: 0,
            bard: 0,
            druid: 0,
            paladin: 0,
            ranger: 0,
            rogue: 0,
            warlock: 0,
            wizard: 0
        });
    };

    return(
        <>
            <div className='wrapper'>
                <div className="wrapper__classes">
                    {classesData.map((item, i)=> (
                        <HeroClasses
                            className={"wrapper__imgs"}
                            key={item.id}
                            name={item.name}
                            votes={item.votes}
                            src={item.src}
                            onClick={()=> addVote(item.name)}
                        />
                    ))}
                </div>
                    <Button 
                        className="wrapper__show-result-btn"
                        text={'Show result'}
                        onClick={showResult}
                    />
                    {winner && (
                        <>
                            <div className="winner">
                                <h2>Winner is: {winner}</h2>
                                <img src={`/${winner}.svg`} alt="winner"/>
                            </div>
                            <Button
                                className="button"
                                text={'Reset votes'}
                                onClick={resetVotes}
                            />
                        </>
                    )}
            </div>
        </>
    )
};