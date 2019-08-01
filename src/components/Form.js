import React from 'react';

const Form=props=>(
            <div>
                <form onSubmit={props.getWeather}>
                <input type="text" name= "city" placeholder="CITY" />
                <input type="text" name= "country" placeholder="COUNTRY" />
                <button> Get Weather</button>
                </form>
            </div>
);

export default Form;