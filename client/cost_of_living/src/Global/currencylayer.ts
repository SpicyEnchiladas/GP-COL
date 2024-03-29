import { CityObj } from "./global";


export async function getUSDRate (budget: number, currency: string): Promise<number> {

    const myHeaders = new Headers();
        myHeaders.append("apikey", "AiwxOAjKjM80PYyCH37ucNGHr7f2mjzE");

    interface RequestOptions {
        method: string;
        redirect: RequestRedirect | undefined;
        headers: Headers;
    };

    const requestOptions:RequestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    const convertData = await fetch(`https://api.apilayer.com/currency_data/convert?to=USD&from=${currency}&amount=${budget}`, requestOptions)
    const parsedData = await convertData.json();
    
    return parsedData.result;
};

export async function getCurrRate (currency: string): Promise<number> {

    const myHeaders = new Headers();
        myHeaders.append("apikey", "AiwxOAjKjM80PYyCH37ucNGHr7f2mjzE");

    interface RequestOptions {
        method: string;
        redirect: RequestRedirect | undefined;
        headers: Headers;
    };



    const requestOptions:RequestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    //  RETURN DATA
    //  data = {
    //  "info": {
    //     "quote": 0.395434,
    //     "timestamp": 1667367904
    //   },
    //   "query": {
    //     "amount": 4000,
    //     "from": "JPY",
    //     "to": "PHP"
    //   },
    //   "result": 1581.736,
    //   "success": true
    // }
    // }

    return await fetch(`https://api.apilayer.com/currency_data/convert?to=${currency}&from=USD&amount=100`, requestOptions)
        .then(response => response.json())
        .then((data) => data['info' ]['quote'])
        .catch(error => console.log('error', error));
};
// CHANGE MONTLY_COL
export function filterCities (listOfCityArray: Array<CityObj>, USDRate: number): (Array<Object>) {
    return listOfCityArray.filter((city) => {
        if (city.total_cost_of_living < USDRate) {
            return city;
        };
    });
};

// CHANGE MONTLY_COL
export function convertCitiesCurr (listOfFilteredCities: Array<CityObj>, quote: number): Array<Object> {
    return listOfFilteredCities.map((city) => {
        return city.total_cost_of_living = quote * Number(city["total_cost_of_living"]);
    });
};
