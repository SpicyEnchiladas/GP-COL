import React from 'react'
import BudgetInput from './BudgetInput';
import HeaderPanel from './HeaderPanel';

export interface IHomePageProps { 
}
 
const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    return <div>
        <HeaderPanel></HeaderPanel>
        <BudgetInput></BudgetInput>
    </div>;
};
 
export default HomePage;