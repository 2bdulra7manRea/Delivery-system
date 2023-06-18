import { ListView } from "../../components/customListView/listView"
import {DynamicDialog} from './shipmentDialog'

export const Shipments = () => {
    





    return (<>
    
        <ListView title={"Shipments"} metaData={{dialog:DynamicDialog}} ></ListView>
    
    
    </>)

}