import React from 'react';

class MyComponent extends React.Component{
    state ={
        count: 0,
        date: new Date(),
      };

    render(){
          const { date } = this.state;

        return (
            <div>
                <p>Time: {date.toLocaleTimeString()}</p>
                <p>
                    <button type='button'>Click</button>
                </p>
            </div>
        );
    }
}
export default MyComponent;