import DropDown from "./components/Dropdown";

export default function App() {
  return (
    <>
      <div className="h-screen w-screen flex flex-col justify-start items-center">
        <div className='m-2'>
          <h1 className="text-3xl font-bold">Click For Options!</h1>
        </div>
        <DropDown />
      </div>
    </>
  );
}
