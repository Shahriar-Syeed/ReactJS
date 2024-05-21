import {useState} from 'react';
import Section from './Section';
import TabButton from "./TabButton";
import Tabs from './Tabs';
import { EXAMPLE } from "../data";


export default function Examples (){
  const [selectedTopic, setSelectedTopic] = useState();
   function handleSelect(selectedButton){
    // selectedButton => 'components', 'jsx', 'props', 'state'
      setSelectedTopic(selectedButton);       
    }
  let TabContent = "Please Select a Topic.";
  if(selectedTopic)  { 
    TabContent = <div id='tab-content'>
                <h3>{EXAMPLE[selectedTopic].title}</h3>
                <p>{EXAMPLE[selectedTopic].description}</p>
                <pre>
                  <code>{EXAMPLE[selectedTopic].code}</code>
                </pre>
              </div>
              };
  return (
    <Section title="Example" id="examples">
      <Tabs
        // buttonsContainer="menu" // build in component
        // buttonsContainer={Section} // custom component
        // ButtonsContainer="ul"
        buttons={<>
            <TabButton isSelected={selectedTopic === 'components'} onClick={()=>{handleSelect('components')}}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onClick={()=>{handleSelect('jsx')}}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onClick={()=>{handleSelect('props')}}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onClick={()=>{handleSelect('state')}}>State</TabButton>
          </>
        }
      >
        {TabContent}
      </Tabs>
         
    </Section>
  );
}