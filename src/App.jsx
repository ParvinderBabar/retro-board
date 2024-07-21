import './index.css'; // or your CSS file name

import './App.css'

const card = (title,deleteButton,like,vote) => {
  return (<div>
    <div className=' text-white text-4xl border rounded-2xl bg-purple-300  backdrop-grayscale-0 border-r-2 p-2 m-2'>
      <div className='font-semibold text-white'>
        {title}
      </div>
      <div className='flex justify-between py-2 text-gray-800'>
        <div>{like}</div>
        <div>{deleteButton}</div>
        <div>{vote}</div>
      </div>
          
    </div>
       
  </div>
  )
}
  
function App() {

  // const title = 'what didnt go well';
  // const like = "likes";
  // const deleteButton ="delete";
  // const vote = "vote"









  
  return (
    <>
      {card("what didnt go well", "like", "deleteButton", "vote")}
      {card("what didnt go well","like","deleteButton","vote")}
     {card("what didnt go well","like","deleteButton","vote")}
     
      
     
      
    </>
  )
}

export default App
