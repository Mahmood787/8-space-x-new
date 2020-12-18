import * as React from 'react';
import { useLaunchesQuery } from '../../generated/graphql';
import LaunchList from './List';
import {OwnProps} from './List'

const LaunchListContainer = (props:OwnProps) => {
    const order:any = "desc"
    const [startWith, setStartWith]= React.useState(21)
  const { data, error, loading,refetch } = useLaunchesQuery({
      variables:{
        order: order,
        sort: "launch_date_local",
        limit: startWith,
        offset: 0,
      },
      notifyOnNetworkStatusChange: true,
  });
  console.log(data)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !data) {
    return <div>ERROR</div>;
  }

  return <LaunchList data={data} {...props} 
  refetch={refetch} 
  setSW={setStartWith}
   startWith={startWith}
   />;
};
export default LaunchListContainer;