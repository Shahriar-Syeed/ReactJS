import {useState,Fragment} from 'react';

import componentsImg from "./assets/components.png";


import { CORE_CONCEPTS, EXAMPLE } from "./data.js";
import Header from "./components/Header/Header.jsx";
import {CoreConcept} from "./components/CoreConcept.jsx";
import {CoreConcept2} from "./components/CoreConcept.jsx";
import {CoreConcept3} from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import {TabButton2} from "./components/TabButton.jsx";
import {TabButton3} from "./components/TabButton.jsx";

import UseState from "./components/UseState.jsx";





function Button({caption, type="submit"}){
  return (<button title={caption} type={type} id='myBtn'>My Button</button>)
}


function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  const [selectedTopic1, setSelectedTopic1] = useState('components');
  // const [selectedTopic, setSelectedTopic] = useState('please click a button');
  
  let tabContent = 'Please click a button';

   function handleSelect(selectedButton){
    // selectedButton => 'components', 'jsx', 'props', 'state'
      console.log(selectedButton);
      tabContent =  selectedButton;
      setSelectedTopic(selectedButton);
      setSelectedTopic1(selectedButton);
       console.log("tabContent", tabContent);
       console.log("selectedTopic:",selectedTopic);
       
    }
   
    console.log("APP component Executing");

    let tabContents = <p>Please enter a topic</p>;
    if(selectedTopic){
     tabContents = <div id='tab-content'>
                <h3>{EXAMPLE[selectedTopic].title}</h3>
                <p>{EXAMPLE[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLE[selectedTopic].code}</code>
                </pre>
              </div>;
    }
  return (
    <Fragment>
      {/* <Header></Header> */}

      <Header />
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          {['hello', 'world']}
          {[<p key={1}>Hello</p>, <p key={2}>World</p>]}
          <ul>
          {CORE_CONCEPTS.map((item)=>(<CoreConcept key={item.title} {...item} />))}
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[1].title}
              description={CORE_CONCEPTS[1].description}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[2].title}
              description={CORE_CONCEPTS[2].description}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept
              title={CORE_CONCEPTS[3].title}
              description={CORE_CONCEPTS[3].description}
              image={CORE_CONCEPTS[3].image}
            />
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />

            <CoreConcept2 {...CORE_CONCEPTS[0]} />
            <CoreConcept2 {...CORE_CONCEPTS[1]} />
            <CoreConcept2 {...CORE_CONCEPTS[2]} />
            <CoreConcept2 {...CORE_CONCEPTS[3]} />
            
            <CoreConcept3 concept={CORE_CONCEPTS[0]} />
            <CoreConcept3 concept={CORE_CONCEPTS[1]} />
            <CoreConcept3 concept={CORE_CONCEPTS[2]} />
            <CoreConcept3 concept={CORE_CONCEPTS[3]} />
           
            
            
          </ul>
          <Button caption="myBtn" />
        </section>
        <section id="examples">
          <h2>Example</h2>
          
          <menu>
            <TabButton>Example 1</TabButton>
            <TabButton2 isSelected={selectedTopic === 'components'} onSelect={()=>{handleSelect('components')}}>Components</TabButton2>
            <TabButton2 isSelected={selectedTopic === 'jsx'} onSelect={()=>{handleSelect('jsx')}}>JSX</TabButton2>
            <TabButton2 isSelected={selectedTopic === 'props'} onSelect={()=>{handleSelect('props')}}>Props</TabButton2>
            <TabButton2 isSelected={selectedTopic === 'state'} onSelect={()=>{handleSelect('state')}}>State</TabButton2>
            <TabButton3 label="Example3"/>
          </menu>
          {selectedTopic}
          
            {selectedTopic 
            ? <div id='tab-content'>
                <h3>{EXAMPLE[selectedTopic].title}</h3>
                <p>{EXAMPLE[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLE[selectedTopic].code}</code>
                </pre>
              </div>
              : <p>Please enter a topic</p>}
              {!selectedTopic && <p>Please enter a topic</p>}
              {selectedTopic && <div id='tab-content'>
                <h3>{EXAMPLE[selectedTopic].title}</h3>
                <p>{EXAMPLE[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLE[selectedTopic].code}</code>
                </pre>
              </div>}
              {tabContents}
              <div id='tab-content'>
            <h3>{EXAMPLE[selectedTopic1].title}</h3>
            <p>{EXAMPLE[selectedTopic1].description}</p>
            <pre>
              <code>{EXAMPLE[selectedTopic1].code}</code>
            </pre>
          </div>
        </section>
        <h2>Time to get started!</h2>
      </main>
    </Fragment>
  );
}

export default App;
