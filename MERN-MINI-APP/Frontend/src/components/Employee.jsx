import React from 'react';
import { useLocation } from 'react-router-dom';

function Employee() {
  const { state } = useLocation();
  return (
 
<div> <p>{state.email}</p>
<p>{state.name}</p>
<p>{state.mobile}</p>
<p>{state.designation}</p>
<p>{state.companyName}</p>
</div>
  )
}

export default Employee