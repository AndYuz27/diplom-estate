import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoutes = () => {
  const user  = localStorage.getItem('isAuthCmp');
  console.log(user)
  if (user === null){
    return (
      <Navigate to='/auth/empl'/>
  )
}else{
    return(
          <Outlet/>
    )
  }
}
export default PrivateRoutes;