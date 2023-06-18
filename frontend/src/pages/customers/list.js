import { ListView } from "../../components/customListView/listView"
import {DynamicDialog} from './customerDialog'

export const Customers = () => {
    





    return (<>
    
    
    <ListView title={"Customers"} metaData={{dialog:DynamicDialog}} ></ListView>
    
    </>)

}