import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {MonthStatistics} from "./pages/MonthStatistics/MonthStatistics";
import {Header} from "./shared/Header/Header";
import {useCustomSelector} from "./hooks/store";
import {MyLoading} from './pages/Home/components/MyLoading/MyLoading';


const App = () => {

    const isLoading = useCustomSelector(state => state.currentWeatherSliceReducer.isLoading)

    return (
        <div className='global-container'>
            {/*<Popup />*/}
            <div className="container">
                <Header/>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='month-statistics' element={<MonthStatistics/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default App;
