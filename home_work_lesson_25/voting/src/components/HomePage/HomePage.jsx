import React, { Component } from 'react';
import { Button } from '../Button/Button';
import './homePage.scss';

export class HomePage extends Component {
    constructor(props) {
        super(props);

        const savedVotes = localStorage.getItem('hero_votes');

        this.state = {
            heroClassList: savedVotes ? JSON.parse(savedVotes) : {
                barbarian: 0,
                bard: 0,
                druid: 0,
                paladin: 0,
                ranger: 0,
                rogue: 0,
                warlock: 0,
                wizard: 0
            },
            winner: null
        };
    };

    addVote(heroClass) {
    this.setState((prevState) => ({
            heroClassList: {
                ...prevState.heroClassList,
                [heroClass]: prevState.heroClassList[heroClass] + 1 
            }
        }),
        ()=> {
            localStorage.setItem('hero_votes', JSON.stringify(this.state.heroClassList))
        });
    };

    showResult = ()=> {
        const {heroClassList} = this.state;
        let maxVotes = 0;
        let currentWinner = null;

        for(const hero in heroClassList) {
            if (heroClassList[hero] > maxVotes) {
                maxVotes = heroClassList[hero];
                currentWinner = hero;
            }
        };

        this.setState({winner: currentWinner});
    };

    resetVotes = () => {
        localStorage.removeItem('hero_votes');

        this.setState({
            heroClassList: {
                barbarian: 0,
                bard: 0,
                druid: 0,
                paladin: 0,
                ranger: 0,
                rogue: 0,
                warlock: 0,
                wizard: 0
            },
            winner: null
        });
    };

    render() {
        return (
            <>
                <div className='wrapper'>
                    <div className="wrapper__classes">
                        <div className="wrapper__imgs" onClick={()=> this.addVote('barbarian')}>
                            <img src="/barbarian.svg" alt="barbarian" />
                            <p>votes: {this.state.heroClassList.barbarian}</p>
                        </div>
                        <div className="wrapper__imgs" onClick={()=> this.addVote('bard')}>
                            <img src="/bard.svg" alt="bard" />
                            <p>votes: {this.state.heroClassList.bard}</p>
                        </div>
                        <div className="wrapper__imgs" onClick={()=> this.addVote('druid')}>
                            <img src="/druid.svg" alt="druid" />
                            <p>votes: {this.state.heroClassList.druid}</p>
                        </div>
                        <div className="wrapper__imgs" onClick={()=> this.addVote('paladin')}>
                            <img src="/paladin.svg" alt="paladin" />
                            <p>votes: {this.state.heroClassList.paladin}</p>
                        </div>
                        <div className="wrapper__imgs" onClick={()=> this.addVote('wizard')}>
                            <img src="/wizard.svg" alt="wizard" />
                            <p>votes: {this.state.heroClassList.wizard}</p>
                        </div>
                        <div className="wrapper__imgs" onClick={()=> this.addVote('warlock')}>
                            <img src="/warlock.svg" alt="warlock" />
                            <p>votes: {this.state.heroClassList.warlock}</p>
                        </div>
                        <div className="wrapper__imgs" onClick={()=> this.addVote('rogue')}>
                            <img src="/rogue.svg" alt="rogue" />
                            <p>votes: {this.state.heroClassList.rogue}</p>
                        </div>
                        <div className="wrapper__imgs" onClick={()=> this.addVote('ranger')}>
                            <img src="/ranger.svg" alt="ranger" />
                            <p>votes: {this.state.heroClassList.ranger}</p>
                        </div>
                    </div>
                    <Button 
                        className="wrapper__show-result-btn"
                        text={'Show result'}
                        onClick={this.showResult}
                    />

                        {this.state.winner && (
                            <>
                                <div className="winner">
                                    <h2>Winner is: {this.state.winner}</h2>
                                    <img src={`/${this.state.winner}.svg`} alt="winner" />
                                </div>
                                <Button 
                                    className="button"
                                    text={'Reset votes'}
                                    onClick={this.resetVotes}
                                />
                            </>
                        )}
                </div>
            </>
        )
    }
}