import CustomDataGrid from "../dataDrid/dataGrid"
import { DynamicDialog } from "../dynamicDialog/dynamicDialog"
import './listView.css'
export const ListView = ({ title, url , metaData , Data}) => { 

    return (<>
    
        <div className="row mt-3">
            <div className="col-3 title-list">
                <h3>{title}</h3>
            </div>
        </div>
    
        <div className="row mt-3" >
            <div className="col-3">
               {<metaData.dialog></metaData.dialog>}
            </div>
        </div>
        
    
        <div className="row mt-3" >
            <div className="col-md-12">
                <CustomDataGrid></CustomDataGrid>
            </div>
    </div>
    
    
    
    </>)

}