import moment from 'moment';

export const errorHandler = (err: any) => {
    if(err.message.includes('404')){
        alert('You have probably entered an invalid city name')
    }
    else if(err.message.includes('401')){
        alert('Your API key is probably invalid.')
    }
    else{
        console.log(err)
    }
}

export const makeDaysObject = (forecast: Forecast) => {
    const daysObj: any = {};
    const dayArray = forecast.list.map(item => ({ ...item, date: moment(item.dt_txt).format('dddd, HH:mm') }));
    dayArray.forEach(elem => {
        const weekDay = elem.date.split(',')[0] 
        if(daysObj[weekDay]){
            daysObj[weekDay] = [...daysObj[weekDay], elem] 
        }
        else{
            daysObj[weekDay] = [elem]
        }
    });
    return daysObj
}

export const makeDaysArray = (daysObj: any) => {
    const daysArray: any = []
    for(const [key, value] of Object.entries(daysObj)){
        daysArray.push([key, value]);
    }
    return daysArray
}