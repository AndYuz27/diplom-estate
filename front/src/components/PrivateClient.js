import { Navigate, Outlet } from 'react-router-dom'

const PrivateClient = () => {
  const user  = localStorage.getItem('isAuthClient');
  console.log(user)
  if (user === null){
    return (
      <Navigate to='/auth/client'/>
  )
}else{
    return(
          <Outlet/>
    )
  }
}
export default PrivateClient;