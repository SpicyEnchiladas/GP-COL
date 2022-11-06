import React, { useEffect, useRef, useState } from "react";
import {getCurrenciesCodes} from "../Global/data";
import DropDown from "./CurrencyDropDown";
import { getUSDRate, filterCities, getCurrRate, convertCitiesCurr } from "../Global/currencylayer";


async function getCities(USDRate : number, currRate : number) {
    
    let listOfCities = await fetch(process.env.DATABASE_URL+'/api/selectCity')
        .then ((citiesData ) => {
            console.log(citiesData);
            // let filteredCities = filterCities(citiesData, USDRate);
            // let citiesWithCurr = convertCitiesCurr(filterCities, currRate);

        })

   

    


}

const  sendInputData = (value : number | string, currenciesCode : string):void => {
    
    getUSDRate(Number(value), currenciesCode)
        .then((USD_Data) => {
            getCurrRate(currenciesCode)
                .then( (curr_DATA) => getCities(USD_Data, curr_DATA))

        } );

}

const BudgetInput : React.FC <{} > = () => {

    const [value, setValue] = useState < number | string >('');
    const [showDropDown, setShowDropDown] = useState<boolean>(false);
    const [selectCurrency, setCurrency] = useState<string>("");
    const [cities, setCities] = useState([]);

    // const citiesList = filterCities(cities, USDRate);




    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
      };

    const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
        if (event.currentTarget === event.target) {
            setShowDropDown(false);
        }
    };

    const currencySelection = (currency: string): void => {
        setCurrency(currency);
      };
    
    //Input validation for budget. Only accepts numbers
    const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        const result = event.target.value.replace(/\D/g, '');
        setValue(result);
    };

    return (
        <>  <div className="currencyInput">
                <input
                    type='string'
                    placeholder="What's your budget?"
                    value={value} 
                    onChange={handleChange} />
            </div>
            <button
                className={showDropDown ? "active" : undefined}
                onClick={(): void => toggleDropDown()}
                onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
                  dismissHandler(e)
                }
            >
                <div>{selectCurrency ? "Select: " + selectCurrency : "Select a currency"} </div>
                {showDropDown && (
                <DropDown
                    currenciesCode={getCurrenciesCodes()}
                    showDropDown={false}
                    toggleDropDown={(): void => toggleDropDown()}
                    currencySelection={currencySelection}
                />
                )}   

            </button>
            <button onClick={(): void => sendInputData(value, selectCurrency)}>Submit</button>
                

        </>
    )

};

export default BudgetInput;