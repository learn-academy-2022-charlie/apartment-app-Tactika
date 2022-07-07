import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import ApartmentIndex from './ApartmentIndex'

Enzyme.configure({ adapter: new Adapter() })

describe("When ApartmentIndex renders", () => {
  it("displays a heading", () => {
    const apartmentIndex = shallow(<ApartmentIndex />)
    const apartmentIndexCard = apartmentIndex.find("card")
    expect(apartmentIndexCard.length).not.be(0)
  })
})