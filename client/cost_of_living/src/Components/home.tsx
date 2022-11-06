import React, { useState } from 'react'
import BudgetInput from './BudgetInput';
import Gallery from './Gallery';
import HeaderPanel from './HeaderPanel';

export interface IHomePageProps {
}
 
const HomePage: React.FC<IHomePageProps> = () => {
    const [currentView, setCurrentView] = useState<string>("Favourites");

    function handleCurrentView(view:string) {
        setCurrentView(view);
    }

    return <div>
        <HeaderPanel></HeaderPanel>
        <BudgetInput 
            handleCurrentView = {handleCurrentView}></BudgetInput>
        <Gallery 
            handleCurrentView = {handleCurrentView}
            currentView = {currentView}
        ></Gallery>
    </div>;
};
 
export default HomePage;