import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import ThemeContext from './contexts/themeContext.jsx';
import Section from './components/Section.jsx';
import Todo from './components/setState/Todo.jsx'
export default class App extends React.Component {
    state = {
        theme: 'light',
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    };
                }
                return {
                    theme: 'dark',
                };
            });
        },
    }

    render(){
        return (
            <div className="app">
                <Todo/>
            <Counter>
                {(counter, incrementCount) => (
                    <ClickCounter count={counter} incrementCount={incrementCount} />
                )}
            </Counter>
            <ThemeContext.Provider value={this.state}>
                <Section/>
            </ThemeContext.Provider>
        </div>
        )
    }
}
