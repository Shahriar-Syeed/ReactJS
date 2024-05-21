import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];
 export const EXAMPLE = {
  components: {
    image: componentsImg,
    title: 'Components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
    code: `
      function welcome() {
        return <h1>Hello, World</h1>;
      }`,
  },
  jsx: {
    image: jsxImg,
    title: 'JSX',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    code: `
      <div>
        <h1>welcome {userName}</h1>
        <p>Time to learn React!</p>
      </div>`,
  },
  props: {
    image: propsImg,
    title: 'Props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
    code: `
      function welcome(props) {
        return <h1>Hello, {props.name}</h1>;
      }`,
  },
  state: {
    image: stateImg,
    title: 'State',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    code: `
      function Counter() {
        const [isVisible, setIsVisible] = useState(false);
        function handleClick(){
          setIsVisible(true);
        }
        return (
          <div>
            <p>{isVisible}</p>
            <button onClick={()=> {handleClick()}}>Show Counter</button>
          </div>;)
      }`,
  },
};
