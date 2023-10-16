import AppRouter from "./components/AppRouter";
import TopMenu from "./UI/menu/top-menu/TopMenu";
import './App.css'

function App() {
    return (
        <div>
            <TopMenu/>
            <AppRouter/>
        </div>
    );
}

export default App;



// const [isAuth, setIsAuth] = useState(false);
// const [isLoading, setLoading] = useState(true)


// useEffect(()=>{
//     if (localStorage.getItem('auth')){
//         setIsAuth(true)
//     }
//     setLoading(false);
// })

// <AuthContext.Provider value={{
//  isAuth,
//  setIsAuth,
//  isLoading
// }
// }>
// </AuthContext.Provider>



//const route = useHistory()
//rout.goBack...
//rout.push('/posts/${id}

//<Route exact path ='/about/:id'

//const params = useParams на странице детального просмотра

//const response = await axios.get('url', {
//  params: {
//      _limit: limit,
//      _page: page
//}