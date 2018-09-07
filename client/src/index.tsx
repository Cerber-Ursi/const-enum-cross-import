import * as React from 'react';
import * as ReactDOM from 'react-dom';

// uncomment this to see the bug
// const enum Type {
//     Type1 = 'Type1',
//     Type2 = 'Type2'
// }

interface Props {
    param1: Type;
    param2: UnionType;
}

class App extends React.Component<Props> {
    render() {
        switch (this.props.param1) {
            case Type.Type1:
                return <div>{'Type 1 + ' + this.props.param2}</div>;
            case Type.Type2:
                return <div>{'Type 2 + ' + this.props.param2}</div>;
        }
    }
}

ReactDOM.render(
<App
    param1={Math.random() > 0.5 ? Type.Type1 : Type.Type2}
    param2="string1"
/>, document.getElementById('root'));
