import axios from "axios";


export const api = axios.create({
  baseURL: "http://localhost:5000/",
});

export const GetPosts = async () => {
  try{
    const response = await api.get(`api/getPost`);
    return response;
  } catch(e){
    alert(e)
  }
}

// const [task, setTask] = React.useState();
//   React.useEffect(() => {
//     axios.get(`http://localhost:5000/api/getTask`)
//     .then((res) => {
//       setTask(res.data)
//     })
//     .catch((err) => {
//       console.warn(err);
//       alert('Error to get task')
//     });
//   }, [])
//   const tasks = task.map(post => <FIListItem task={post} key={post.number}/>)