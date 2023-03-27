import { getAllByTestId, render } from '@testing-library/react'
import Header from '../Header'
import {Provider} from 'react-redux'
import store from '../../utils/store'
import {StaticRouter} from 'react-router-dom/server'

test("logo should load on rendering Header",()=>{
    //load header
    const header = render(<StaticRouter><Provider store={store}><Header/></Provider></StaticRouter>)

    //check if logo is loaded
    const logo_text = header.getAllByTestId('logo_text')
    expect(logo_text[0].innerHTML).toBe('FoodBox');

});