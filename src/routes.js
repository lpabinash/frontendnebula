
import UploadPage from './Components/UploadPage/UploadPage'
import NebulaMain from './Components/Layout/NebulaMain'
import LoginComponent from './Components/LoginPanel/LoginComponent'
import Artist from './Components/Artist/Artist'
import Category from './Components/Category/Category'



const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/home', name: 'Home', element: NebulaMain },
  { path: '/upload', name: 'Upload', element: UploadPage },
  { path: '/login', name: 'Upload', element: LoginComponent },
  { path: '/artist/:artist', name:'Artist Page', element:Artist},
  { path: '/category/:category', name:'Category Page', element:Category}
 
]
export default routes