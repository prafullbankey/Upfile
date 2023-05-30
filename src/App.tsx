import { useEffect } from "react";
import { fetchContent } from "./slice/contactSlice";
import { useSelector, useDispatch } from 'react-redux';

 

  function App() {
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(fetchContent())
    }, [dispatch])
  
    const contents = useSelector((state:any) => state.content.contents)
    const isLoading = useSelector((state:any) => state.content.isLoading)
    const error = useSelector((state:any) => state.content.error)
  
    if (isLoading) {
      return 'loading...'
    }
  
    if (error) {
      return error
    }
  
    return (
      <div className='grid gap-4 grid-cols-2  md:grid-cols-4 lg:grid-cols-8  p-4'>
        {contents.map((content:any) => (
          <div key={content.id}>
            <img
              src={`${content?.thumbnailUrl}`}
              alt={`${content.title}`}
              className='w-full h-full rounded'
            />
          </div>
        ))}
      </div>
    )
  }
  
  export default App;