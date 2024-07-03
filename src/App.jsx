import AppLogo from './assets/appLogo.svg'
function App() {

  return (
    <div>
      <img src={AppLogo} alt="app-log" className='size-16' />
      <h1 className="text-3xl font-bold bg-slate-700 p-8">LinkNotes</h1>
      <button className="btn bg-rose-800 hover:bg-rose-500 text-white">Button</button>
    </div>
  )
}

export default App
