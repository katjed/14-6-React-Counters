var Counter = React.createClass({
    getInitialState: function() {
    	console.log('getInitialState: określa początkowy stan komponentu');
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
    	console.log('render: zwraca potrzebny do wyświetlenia komponent');
        return React.createElement('div', {},
            React.createElement('span', {}, 'Licznik: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-')
        );
    },

    getDefaultProps: function() {
        console.log('getDefaultProps: ustawia domyślne wartości propsów');
    },

    componentWillMount: function() {
        console.log('componentWillMount: wywoływana tuż przed renderowaniem, gdy odbierane są propsy');
    },

    componentDidMount: function() {
        console.log('componentDidMount: wywoływana tuż po renderowaniu, operacje na komponencie już zamontowanym na drzewie DOM');
    },

    componentWillReceiveProps: function() {
        console.log('componentWillReceiveProps: wywoływana tylko wtedy, gdy komponent otrzyma nowe właściwości i nie jest to faza pierwszego renderowania (montowania komponentu), aktualizuje stan na podstawie nadchodzących propsów');
    },

    shouldComponentUpdate: function() {
        console.log('shouldComponentUpdate: wywoływana tuż przed wywołaniem metody render w celu sprawdzenia czy trzeba jeszcze raz przerenderować komponent, stosuje się ją w celu optymalizacji aplikacji');
        return true;
    },

    componentWillUpdate: function() {
        console.log('componentWillUpdate: wywoływana jeśli shouldComponentUpdate zwróci wartość true, powinna być wywoływana tylko do przygotowania na nadchodzące zmiany');
    },

    componentDidUpdate: function() {
        console.log('componentDidUpdate: wywoływana tuż po renderowaniu, operacje na komponencie zamontowanym na drzewie DOM analogicznie do metody componentDidMount');
    },

    componentWillUnmount: function() {
        console.log('componentWillUnmount: wywoływana przed usunięciem komponentu w celu uporządkowania kwestii związanych z odpinaniem timerów czy listenerów na elementach DOM');
    }
});

var element = 
	React.createElement('div', {}, 
        React.createElement(Counter),
        React.createElement(Counter),
        React.createElement(Counter)
    );

ReactDOM.render(element, document.getElementById('app'));