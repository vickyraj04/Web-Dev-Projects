import { useState , useCallback , useEffect , useRef} from 'react' 
import './App.css'

function App() { 
  const [length, setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password, setPassword] = useState(""); 
  const [copyState,setCopy] = useState("COPY");
  //UseRef hook
  const passwordRef = useRef(null);

  // useCallback dependencies memo them to optimse rendering
  const passwordGenarator = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "0123456789"
    }
    if(charAllowed) str += "&%@*#[]?";
    for(let i = 0; i < length ; i++){
        let ind = Math.floor(Math.random() * (str.length + 1));
        pass += (str.charAt(ind));
    }
    setPassword(pass);
    setCopy("Copy");
  }, [length , numberAllowed , charAllowed , setPassword, setCopy]);

  const copyPasswordToClipBoard = useCallback(()=>{
      passwordRef.current.select();
      window.navigator.clipboard.writeText(password);
      setCopy("Copied");
  },[password , copyState , setCopy])

  // useEffect dependencies are those whenever anything got change execute the callback
  useEffect(()=>{
    passwordGenarator();
  } , [length , numberAllowed , charAllowed,passwordGenarator]);



  return (
    <> 

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500
       bg-gray-7800'> 
          <h1 className='text-white text-center'> Password Generator</h1>
          <div className='flex shadow  rounded-lg overflow-hidden mb-4'>
        <input type="text" value = {password} 
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref  = {passwordRef}
       
        />
        <button className='outline-none bg-blue-700 text-white px-3 py-0.8 shrink-0'
        onClick={copyPasswordToClipBoard}
        >{copyState}</button>
       </div>
       <div className='flex test-sm gap-x-2'>

        <div className='flex items-center gap-x-1'>
          <input type="range" 
          min={8}
          max={25}
          value = {length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}
           />
           <label> Length : {length}</label>
        </div>
        <div className='flex items-cente gap-x-1'></div>
        <input 
        type="checkbox" 
        defaultChecked = {numberAllowed}
        id = "numberInput"
        onChange={()=>{
          setNumberAllowed((prev)=>{setNumberAllowed(!prev)});
        }}
        /> 
       <label htmlFor="numberInput"> Numbers</label>
       <input 
        type="checkbox" 
        defaultChecked = {charAllowed}
        id = "numberInput"
        onChange={()=>{
          setCharAllowed((prev)=>{setCharAllowed(!prev)});
        }}

        /> 
       <label htmlFor="numberInput"> Characters</label>
       </div>
        </div>
    </>
  )
}

export default App
