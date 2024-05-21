import Section from "./Section"
import CoreConcept  from "./CoreConcept"
import { CORE_CONCEPTS } from "../data"

export default function CoreConcepts(){
  return (
    <Section title="Core Concepts" id="core-concepts">
          <ul>
          {CORE_CONCEPTS.map((item)=>(<CoreConcept key={item.title} {...item} />))}  
          </ul>
    </Section>
  )
}