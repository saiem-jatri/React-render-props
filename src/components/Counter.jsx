import React from 'react';

class Counter extends React.Component {
    state = {
        count: 0,
    };
    
    incrementCount = () => {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    };

    render() {
        // eslint-disable-next-line react/prop-types
        const { children } = this.props;
        const { count } = this.state;
        return children(count, this.incrementCount); //eta app.jsx e <Counter/> er moddhe pass hoy r tar moddhe ClickCounter r HoverCounter peye jay  props gula
    }
}

export default Counter;