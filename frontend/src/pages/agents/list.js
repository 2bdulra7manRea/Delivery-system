import { useQuery } from "react-query"
import { ListView } from "../../components/customListView/listView"
import { Agentservice } from "../../core/services/agent.service"
import { DynamicDialog } from './agentDialog'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const agentservice = new Agentservice();

export const Agent = () => {

const {isLoading , isError , data} = useQuery('agents-list',agentservice.get)


    if (isLoading) {
        return <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    }
    

    return (<>
    
    
    <ListView title={"Agents"} metaData={{dialog:DynamicDialog}} ></ListView>
    
    
    </>)

}