import React from 'react'
import { useLaunchesQuery, useLaunchProfileQuery } from '../../generated/graphql';
import LaunchProfile  from './LaunchProfile';

interface Props{
    newId: number
}
const Index = ({newId}:Props) => {
   console.log(newId)
  const { data, error, loading, refetch } = useLaunchProfileQuery({ 
      variables: { id: String(newId) } });

      React.useEffect(() => {
        refetch();
      }, [newId]);
  
  if (loading) {
      return <div>Loading...</div>;
    }  
    if (error || !data) {
        return <div>ERROR</div>;
    }
    
    console.log(data)
  return <LaunchProfile data={data} />;
}

export default Index
